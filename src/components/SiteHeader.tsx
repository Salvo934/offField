import { useCallback, useEffect, useId, useState } from "react";
import { NAV_ITEMS } from "../config/nav";
import { SOCIAL_CHANNELS } from "../config/social";
import { SOCIAL_ICON_ACCENT, SocialNetworkIcon } from "./SocialNetworkIcon";

const BRAND_LOGO_GLOW =
  "[filter:drop-shadow(0_0_1px_rgba(255,255,255,0.95))_drop-shadow(0_0_6px_rgba(255,255,255,0.7))_drop-shadow(0_0_14px_rgba(255,255,255,0.45))_drop-shadow(0_0_24px_rgba(255,255,255,0.2))]";

function BrandLogoMark({ className }: { className: string }): JSX.Element {
  return (
    <img
      src="/logomenumobile.png"
      alt=""
      width={56}
      height={56}
      decoding="async"
      className={`w-auto shrink-0 object-contain object-bottom ${BRAND_LOGO_GLOW} ${className}`}
    />
  );
}

export function SiteHeader(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();
  const menuTitleId = useId();
  const closeMenu = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen, closeMenu]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (): void => {
      if (mq.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 px-3 pt-3 sm:px-5 lg:px-8 ${
        mobileOpen ? "z-[160] md:z-50" : "z-50"
      }`}
      role="banner"
    >
      <div
        className={`relative z-[120] mx-auto max-w-[90rem] overflow-visible rounded-2xl border border-white/[0.05] bg-black/15 px-3 py-2.5 shadow-[0_8px_28px_-14px_rgba(0,0,0,0.45)] backdrop-blur-lg ring-1 ring-inset ring-white/[0.02] sm:px-4 sm:py-3 lg:px-5 ${
          mobileOpen ? "max-md:hidden" : ""
        }`}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/35 to-transparent"
          aria-hidden
        />

        <div className="relative flex w-full items-center gap-2 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-3 lg:gap-4">
          <a
            href="#"
            className="group flex min-w-0 max-w-[55%] shrink-0 items-center gap-2 justify-self-start rounded-xl py-0.5 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 sm:max-w-none sm:gap-3 md:col-start-1 md:justify-self-start md:self-center md:max-w-none"
            onClick={closeMenu}
          >
            <BrandLogoMark className="h-9 max-h-9 max-w-[2.35rem] sm:h-10 sm:max-h-10 sm:max-w-[2.75rem] md:h-11 md:max-h-11 md:max-w-[3.1rem] transition group-hover:brightness-110" />
            <span className="flex min-w-0 flex-col items-start leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg md:text-xl">
                off<span className="text-blue-400">Field.</span>
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-500 transition group-hover:text-zinc-400 sm:text-[10px] sm:tracking-[0.22em]">
                Siti Web per atleti
              </span>
            </span>
          </a>

          <div className="hidden min-w-0 max-w-full justify-self-center overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:col-start-2 md:block md:self-center">
            <nav aria-label="Navigazione principale">
              <ul className="mx-auto flex w-max max-w-full flex-wrap items-center justify-center gap-0.5 rounded-full bg-white/[0.02] p-1 ring-1 ring-inset ring-white/[0.04]">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block whitespace-nowrap rounded-full px-2.5 py-2 text-[12px] font-medium text-zinc-400 transition hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 lg:px-3.5 lg:text-[13px]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="ml-auto flex shrink-0 items-center justify-end gap-1.5 sm:gap-2 md:ml-0 md:col-start-3 md:justify-self-end md:self-center md:gap-3">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-zinc-300 transition hover:border-white/[0.14] hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 md:hidden"
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span className="sr-only">{mobileOpen ? "Chiudi menu" : "Menu"}</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
            <a
              href="#contatto"
              className="hidden items-center justify-center rounded-full bg-gradient-to-b from-blue-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow ring-1 ring-blue-400/25 transition hover:from-blue-400 hover:to-blue-500 hover:ring-blue-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 sm:inline-flex"
              onClick={closeMenu}
            >
              Crea il tuo brand
            </a>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-[130] flex min-h-0 flex-col overflow-hidden bg-zinc-950 animate-menu-shell-in motion-reduce:animate-none md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby={menuTitleId}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_100%_-20%,rgba(37,99,235,0.22),transparent_55%),radial-gradient(ellipse_70%_50%_at_-10%_100%,rgba(59,130,246,0.08),transparent_50%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.07] bg-grain-overlay bg-[length:256px_256px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-6 bottom-32 select-none font-display text-[min(42vw,11rem)] font-extrabold uppercase leading-none tracking-tighter text-white/[0.04]"
            aria-hidden
          >
            S
          </div>

          <div className="relative z-10 shrink-0 border-b border-white/[0.07] px-4 pb-3 pt-[max(0.5rem,env(safe-area-inset-top))] sm:px-5">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
              <a
                href="#"
                className="justify-self-start rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                onClick={closeMenu}
                aria-label="Torna in cima"
              >
                <BrandLogoMark className="h-12 max-h-12 max-w-[3.15rem]" />
              </a>
              <p
                id={menuTitleId}
                className="justify-self-center text-center font-display text-lg font-bold tracking-tight text-white sm:text-xl"
              >
                off<span className="text-blue-400">Field.</span>
              </p>
              <button
                type="button"
                className="justify-self-end -m-1 flex items-center justify-center p-1.5 text-zinc-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                aria-label="Chiudi menu"
                onClick={closeMenu}
              >
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <nav
            id={menuId}
            className="relative z-10 min-h-0 flex-1 overflow-y-auto overscroll-contain px-5"
            aria-label="Navigazione principale"
          >
            <p className="pb-3 pt-4 text-[10px] font-semibold uppercase tracking-[0.38em] text-zinc-600">
              Naviga
            </p>
            <ul>
              {NAV_ITEMS.map((item, i) => (
                <li
                  key={item.href}
                  className="border-t border-white/[0.06] first:border-t-0 animate-menu-row-in motion-reduce:animate-none motion-reduce:opacity-100"
                  style={{ animationDelay: `${120 + i * 70}ms` }}
                >
                  <a
                    href={item.href}
                    className="group relative flex items-center gap-3 py-5 pl-1 pr-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                    onClick={closeMenu}
                  >
                    <span
                      className="pointer-events-none absolute left-0 top-1/2 h-10 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                    <span className="w-9 shrink-0 font-mono text-[11px] font-medium tabular-nums tracking-wider text-zinc-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="font-editorial text-[1.05rem] italic text-zinc-500 transition group-hover:text-zinc-400 sm:text-xl">
                        {item.menuEmphasis}
                      </span>
                      <span className="ml-2 inline font-display text-[1.35rem] font-semibold uppercase tracking-[0.12em] text-white transition group-hover:tracking-[0.14em] sm:text-[1.55rem] sm:tracking-[0.16em]">
                        {item.menuWord}
                      </span>
                    </span>
                    <svg
                      className="h-5 w-5 shrink-0 text-zinc-700 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="relative z-10 shrink-0 border-t border-white/[0.07] bg-gradient-to-t from-black/25 to-transparent px-5 pb-[max(0.85rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm animate-menu-foot-in motion-reduce:animate-none motion-reduce:opacity-100"
            style={{ animationDelay: `${120 + NAV_ITEMS.length * 70 + 40}ms` }}
          >
            <div
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
              aria-hidden
            />
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-zinc-600">Canali social</p>
            <ul className="mt-1.5 flex flex-wrap items-center gap-2">
              {SOCIAL_CHANNELS.map((ch) => (
                <li key={ch.id}>
                  <a
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={ch.label}
                    aria-label={ch.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-zinc-500 ring-1 ring-inset ring-white/[0.05] transition hover:border-blue-500/35 hover:bg-blue-600/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${SOCIAL_ICON_ACCENT[ch.id]}`}
                  >
                      <SocialNetworkIcon id={ch.id} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}
