import { CONTACT, whatsappHref } from "../config/contact";
import { SOCIAL_CHANNELS } from "../config/social";
import { SOCIAL_ICON_ACCENT, SocialNetworkIcon } from "./SocialNetworkIcon";

const FOOTER_LINKS: { href: string; label: string; external?: boolean }[] = [
  { href: "#contatto", label: "Contatti" },
  { href: `mailto:${CONTACT.email}`, label: "Email" },
  {
    href: whatsappHref("Ciao, vorrei informazioni sulla pagina atleta."),
    label: "WhatsApp",
    external: true,
  },
  { href: "#portfolio", label: "Portfolio" },
];

export function Footer(): JSX.Element {
  return (
    <footer className="relative border-t border-white/[0.08] bg-zinc-950">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/35 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
            <div className="flex items-center justify-center gap-2.5 lg:justify-start">
              <img
                src="/logomenumobile.png"
                alt=""
                width={36}
                height={36}
                decoding="async"
                className="h-9 w-auto max-h-9 object-contain object-bottom [filter:drop-shadow(0_0_1px_rgba(255,255,255,0.95))_drop-shadow(0_0_6px_rgba(255,255,255,0.45))]"
              />
              <p className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                off<span className="text-blue-400">Field.</span>
              </p>
            </div>
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
              Web per atleti
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500 sm:mt-5 sm:text-[15px] sm:leading-relaxed">
              La chiarezza che ti rappresenta — siti e presenza digitale su misura.
            </p>
          </div>

          <div className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-1 sm:flex sm:flex-row sm:items-start sm:justify-start sm:gap-14 lg:gap-20">
            <nav
              aria-label="Link footer"
              className="flex flex-col items-center gap-2.5 text-center sm:items-start sm:gap-3 sm:text-left"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-600">Navigazione</p>
              <ul className="flex flex-col items-center gap-2 text-sm text-zinc-400 sm:items-start sm:gap-2.5">
                <li>
                  <a href="#filosofia" className="transition hover:text-white">
                    Filosofia
                  </a>
                </li>
                <li>
                  <a href="#servizio" className="transition hover:text-white">
                    Servizio
                  </a>
                </li>
                <li>
                  <a href="#pacchetti" className="transition hover:text-white">
                    Pacchetti
                  </a>
                </li>
                <li>
                  <a href="#contatto" className="transition hover:text-white">
                    Contatti
                  </a>
                </li>
              </ul>
            </nav>

            <nav
              aria-label="Contatti e risorse"
              className="flex flex-col items-center gap-2.5 text-center sm:items-start sm:gap-3 sm:text-left"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-600">Contatti</p>
              <ul className="flex flex-col items-center gap-2 text-sm text-zinc-400 sm:items-start sm:gap-2.5">
                {FOOTER_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="transition hover:text-white"
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/[0.06] pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            {SOCIAL_CHANNELS.map((ch) => (
              <a
                key={ch.id}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                title={ch.label}
                aria-label={ch.label}
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-500 ring-1 ring-inset ring-white/[0.04] transition hover:border-blue-500/30 hover:bg-blue-600/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 sm:h-10 sm:w-10 ${SOCIAL_ICON_ACCENT[ch.id]}`}
              >
                <SocialNetworkIcon id={ch.id} className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>
          <p className="max-w-[20rem] text-center text-[10px] leading-snug tracking-wide text-zinc-600 sm:max-w-none sm:shrink-0 sm:text-right sm:text-[11px]">
            © {new Date().getFullYear()} offField. Pagine web su misura per atleti.
          </p>
        </div>
      </div>
    </footer>
  );
}
