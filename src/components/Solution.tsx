const pillars: { title: string; body: string }[] = [
  {
    title: "Pagine atleta premium",
    body: "Architettura pensata per narrativa sportiva: gerarchia dei contenuti, ritmo visivo e focus sulle conversioni (contatti, media kit, highlight).",
  },
  {
    title: "Design + strategia",
    body: "Non solo estetica: posizionamento, messaggi chiave e percorsi per sponsor, club e fan — tutto allineato al tuo brand personale.",
  },
  {
    title: "Visibilità condivisibile",
    body: "Un URL unico, ottimizzato per mobile, pronto da inviare via mail, WhatsApp o QR — sempre aggiornabile con la tua stagione.",
  },
];

export function Solution(): JSX.Element {
  return (
    <section
      className="relative overflow-hidden border-b border-white/[0.06] bg-black py-24 sm:py-32"
      aria-labelledby="solution-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[length:64px_64px] bg-grid-fade bg-repeat opacity-[0.35]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(100%,42rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/45 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-glow-mid blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-20 lg:items-start">
          <div className="lg:sticky lg:top-36">
            <span className="inline-flex items-center rounded-full border border-blue-500/25 bg-blue-600/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300">
              La soluzione
            </span>
            <h2
              id="solution-heading"
              className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
            >
              Una presenza digitale costruita come un{" "}
              <span className="text-zinc-300">media kit vivente</span>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-500 sm:text-lg">
              Ti affianchiamo end-to-end: dalla raccolta materiali alla pagina finale che puoi
              presentare con orgoglio.
            </p>
            <a
              href="#contatto"
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:border-blue-500/35 hover:bg-blue-600/[0.12] hover:text-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Parliamo del tuo progetto
              <span
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden
              >
                →
              </span>
            </a>
          </div>

          <div className="relative">
            <div
              className="absolute left-[21px] top-10 bottom-10 hidden w-px bg-gradient-to-b from-blue-500/40 via-white/[0.08] to-transparent sm:block"
              aria-hidden
            />
            <ol className="relative space-y-4 sm:space-y-5">
              {pillars.map((pillar, index) => (
                <li key={pillar.title}>
                  <article className="group relative rounded-2xl border border-white/[0.07] bg-gradient-to-br from-zinc-900/60 via-zinc-950/40 to-black/50 p-6 shadow-card ring-1 ring-inset ring-white/[0.03] transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/25 hover:shadow-[0_24px_80px_-40px_rgba(37,99,235,0.35)] sm:p-7">
                    <div className="flex gap-5 sm:gap-6">
                      <span
                        className="relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-600/5 font-display text-sm font-bold text-blue-300 ring-1 ring-blue-500/30 transition group-hover:from-blue-500/30 group-hover:to-blue-600/10 group-hover:ring-blue-400/45"
                        aria-hidden
                      >
                        {index + 1}
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                          {pillar.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
                          {pillar.body}
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
