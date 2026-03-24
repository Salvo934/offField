import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "./SiteHeader";

const heroVideoSources = [
  `${import.meta.env.BASE_URL}herosfondo.mp4`,
  `${import.meta.env.BASE_URL}sfondohero1.mp4`,
  `${import.meta.env.BASE_URL}sfondohero2.mp4`,
] as const;

export function Hero(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    const play = (): void => {
      void video.play().catch(() => {});
    };

    play();

    const onEnded = (): void => {
      setCurrentVideoIndex((i) => (i + 1) % heroVideoSources.length);
    };

    const onVisibility = (): void => {
      if (document.visibilityState === "visible") play();
    };

    const onPause = (): void => {
      if (document.hidden || video.ended) return;
      window.setTimeout(play, 80);
    };

    const onStalled = (): void => {
      play();
    };

    video.addEventListener("ended", onEnded);
    video.addEventListener("pause", onPause);
    video.addEventListener("stalled", onStalled);
    video.addEventListener("waiting", onStalled);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("stalled", onStalled);
      video.removeEventListener("waiting", onStalled);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    void video.play().catch(() => {});
  }, [currentVideoIndex]);

  return (
    <>
      <SiteHeader />
      <section
        className="relative isolate flex min-h-[100svh] flex-col justify-start overflow-hidden bg-black pb-20 pt-28 text-white sm:pt-32 lg:pt-36 lg:pb-24"
        aria-labelledby="hero-heading"
      >
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={heroVideoSources[currentVideoIndex]} type="video/mp4" />
      </video>
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
