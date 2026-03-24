import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "./SiteHeader";

const heroVideoSources = [
  `${import.meta.env.BASE_URL}herosfondo.mp4`,
  `${import.meta.env.BASE_URL}sfondohero1.mp4`,
  `${import.meta.env.BASE_URL}sfondohero2.mp4`,
] as const;

const CLIP_COUNT = heroVideoSources.length;
const CROSSFADE_MS = 1000;
/** Sotto questa larghezza: un solo video (autoplay iOS molto più affidabile). */
const MOBILE_MAX_WIDTH = 767;

function configureVideoElement(el: HTMLVideoElement): void {
  el.muted = true;
  el.defaultMuted = true;
  el.volume = 0;
  el.playsInline = true;
  el.setAttribute("playsinline", "true");
  el.setAttribute("webkit-playsinline", "true");
  el.setAttribute("muted", "");
  el.setAttribute("x-webkit-airplay", "deny");
}

function tryPlay(el: HTMLVideoElement | null): void {
  if (!el) return;
  const p = el.play();
  if (p !== undefined) void p.catch(() => {});
}

/** Più tentativi subito dopo load — necessario su Safari iOS. */
function kickstartPlay(v: HTMLVideoElement): void {
  const attempt = (): void => tryPlay(v);
  attempt();
  queueMicrotask(attempt);
  requestAnimationFrame(() => requestAnimationFrame(attempt));
  v.addEventListener("loadedmetadata", attempt, { once: true });
  v.addEventListener("loadeddata", attempt, { once: true });
  v.addEventListener("canplay", attempt, { once: true });
  v.addEventListener("canplaythrough", attempt, { once: true });
}

export function Hero(): JSX.Element {
  const v0 = useRef<HTMLVideoElement>(null);
  const v1 = useRef<HTMLVideoElement>(null);
  const singleRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const [narrow, setNarrow] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`).matches;
  });
  const [frontSlot, setFrontSlot] = useState<0 | 1>(0);
  const [clips, setClips] = useState<[number, number]>([0, 1]);
  const [mobileClip, setMobileClip] = useState(0);

  const frontSlotRef = useRef<0 | 1>(0);
  const clipsRef = useRef<[number, number]>([0, 1]);
  frontSlotRef.current = frontSlot;
  clipsRef.current = clips;

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`);
    const sync = (): void => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!narrow) return;
    const v = singleRef.current;
    if (!v) return;
    configureVideoElement(v);
    v.load();
    kickstartPlay(v);
  }, [narrow, mobileClip]);

  useEffect(() => {
    const v = v0.current;
    if (!v || narrow) return;
    configureVideoElement(v);
    v.load();
    if (frontSlotRef.current === 0) {
      kickstartPlay(v);
    } else {
      const prep = (): void => {
        v.currentTime = 0;
        v.pause();
      };
      v.addEventListener("loadeddata", prep, { once: true });
    }
  }, [narrow, clips[0]]);

  useEffect(() => {
    const v = v1.current;
    if (!v || narrow) return;
    configureVideoElement(v);
    v.load();
    if (frontSlotRef.current === 1) {
      kickstartPlay(v);
    } else {
      const prep = (): void => {
        v.currentTime = 0;
        v.pause();
      };
      v.addEventListener("loadeddata", prep, { once: true });
    }
  }, [narrow, clips[1]]);

  useEffect(() => {
    const unlock = (): void => {
      if (narrow) tryPlay(singleRef.current);
      else {
        tryPlay(v0.current);
        tryPlay(v1.current);
      }
    };
    window.addEventListener("touchstart", unlock, { passive: true, capture: true });
    window.addEventListener("click", unlock, { capture: true });
    return () => {
      window.removeEventListener("touchstart", unlock, { capture: true });
      window.removeEventListener("click", unlock, { capture: true });
    };
  }, [narrow]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        if (narrow) tryPlay(singleRef.current);
        else {
          const slot = frontSlotRef.current;
          tryPlay(slot === 0 ? v0.current : v1.current);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(section);
    return () => io.disconnect();
  }, [narrow]);

  useEffect(() => {
    const onVis = (): void => {
      if (document.visibilityState !== "visible") return;
      if (narrow) tryPlay(singleRef.current);
      else {
        const slot = frontSlotRef.current;
        tryPlay(slot === 0 ? v0.current : v1.current);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [narrow]);

  const prevFrontRef = useRef<0 | 1 | undefined>(undefined);
  useEffect(() => {
    const prev = prevFrontRef.current;
    prevFrontRef.current = frontSlot;
    if (prev === undefined || prev === frontSlot) return;

    const id = window.setTimeout(() => {
      const front = frontSlotRef.current;
      const hidden = (1 - front) as 0 | 1;
      const visibleClip = clipsRef.current[front];
      const next = (visibleClip + 1) % CLIP_COUNT;
      setClips((c) => {
        if (c[hidden] === next) return c;
        const n: [number, number] = [...c];
        n[hidden] = next;
        return n;
      });
    }, CROSSFADE_MS);

    return () => window.clearTimeout(id);
  }, [frontSlot]);

  const onEndedDual = (slot: 0 | 1): void => {
    if (slot !== frontSlotRef.current) return;
    const back = (1 - slot) as 0 | 1;
    const el = back === 0 ? v0.current : v1.current;
    if (!el) return;
    el.currentTime = 0;
    kickstartPlay(el);
    setFrontSlot(back);
  };

  const slotOpacity = (slot: 0 | 1): string =>
    frontSlot === slot ? "opacity-100" : "opacity-0";

  return (
    <>
      <SiteHeader />
      <section
        ref={sectionRef}
        className="relative isolate flex min-h-[100svh] flex-col justify-start overflow-hidden bg-black pb-20 pt-28 text-white sm:pt-32 lg:pt-36 lg:pb-24"
        aria-labelledby="hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden
        >
          {narrow ? (
            <video
              ref={singleRef}
              className="absolute inset-0 h-full w-full scale-105 object-cover"
              autoPlay
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              src={heroVideoSources[mobileClip]}
              onEnded={() => setMobileClip((i) => (i + 1) % CLIP_COUNT)}
            />
          ) : (
            <>
              <video
                ref={v0}
                className={`absolute inset-0 h-full w-full scale-105 object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${slotOpacity(0)}`}
                autoPlay
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                src={heroVideoSources[clips[0]]}
                onEnded={() => onEndedDual(0)}
              />
              <video
                ref={v1}
                className={`absolute inset-0 h-full w-full scale-105 object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${slotOpacity(1)}`}
                autoPlay
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                src={heroVideoSources[clips[1]]}
                onEnded={() => onEndedDual(1)}
              />
            </>
          )}
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-black/45 sm:bg-black/40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.14),transparent)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-14">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.35em] text-zinc-400 sm:mb-10">
            Studio · Pagine per atleti
          </p>

          <h1
            id="hero-heading"
            className="max-w-[18ch] font-display text-[2.65rem] font-bold leading-[0.98] tracking-[-0.02em] text-balance drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:max-w-none sm:text-6xl sm:leading-[0.96] lg:text-7xl lg:leading-[0.94] xl:text-[5.25rem]"
          >
            <span className="block">Costruita dalla</span>
            <span className="block">tua storia.</span>
            <span className="mt-1 block sm:mt-2">
              <span className="text-zinc-100">Distinta.</span>{" "}
              <span className="font-editorial text-[0.92em] font-normal italic text-blue-300/95 sm:text-[0.9em]">
                Professionale
              </span>
              <span className="text-zinc-100">.</span>
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-6 sm:mt-14 sm:flex-row sm:flex-wrap sm:items-center sm:gap-10">
            <a
              href="#portfolio"
              className="group inline-flex w-fit items-baseline gap-2 border-b border-zinc-500 pb-1 text-sm text-zinc-200 transition hover:border-white hover:text-white"
            >
              <span className="font-medium">Vedi esempi</span>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 transition group-hover:text-zinc-400">
                (portfolio)
              </span>
            </a>
            <a
              href="#filosofia"
              className="inline-flex w-fit items-center text-sm font-medium text-zinc-400 underline decoration-zinc-600 underline-offset-4 transition hover:text-white hover:decoration-zinc-500"
            >
              Scopri il nostro approccio
            </a>
          </div>

          <p className="mt-12 max-w-xl text-base leading-relaxed text-zinc-300 sm:mt-16 sm:text-lg sm:leading-relaxed">
            Dal rumore dei social emerge una pagina unica: video, numeri, biografia e link condivisibili
            con sponsor e scouting — senza template, senza compromessi.
          </p>

          <div className="mt-12 sm:mt-14">
            <a
              href="#contatto"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Richiedi la tua pagina
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
