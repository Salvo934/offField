const items: { title: string; description: string }[] = [
  {
    title: "Pagina personalizzata atleta",
    description: "Layout unico, tipografia forte e sezioni modulate sul tuo percorso e disciplina.",
  },
  {
    title: "Highlights video integrati",
    description: "Hero cinematografico, capitoli e caricamento ottimizzato per mobile e scouting.",
  },
  {
    title: "Statistiche performance",
    description: "Numeri chiave, grafici leggibili e update stagionali senza confusione.",
  },
  {
    title: "Gallery foto curata",
    description: "Sequenze editoriali, lightbox e immagini compresse per velocità reale.",
  },
  {
    title: "Design premium",
    description: "Estetica da studio creativo: spazi, contrasti e micro-interazioni leggere.",
  },
  {
    title: "Social & contatti",
    description: "Integrazione feed/link, CTA verso sponsor e moduli per richieste dirette.",
  },
];

export function Services(): JSX.Element {
  return (
    <section
      className="relative overflow-hidden border-y border-white/[0.06] bg-ink-950 py-24 sm:py-32"
      id="servizio"
      aria-labelledby="services-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,rgba(37,99,235,0.09),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[length:56px_56px] bg-grid-fade bg-repeat opacity-25"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-blue-500/25 bg-blue-600/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300">
              Servizio
            </span>
            <h2
              id="services-heading"
              className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white text-balance sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
            >
              Tutto ciò che serve per presentarti come un professionista.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-500 sm:text-lg">
              Ogni elemento è pensato per chi deve decidere in fretta: sponsor, club, media e fan.
            </p>
          </div>
          <p className="shrink-0 text-sm font-medium tabular-nums text-zinc-600 lg:text-right">
            <span className="block text-2xl font-display font-bold tracking-tight text-white sm:text-3xl">
              6
            </span>
            moduli inclusi
          </p>
        </div>

        <ul className="mt-14 grid auto-rows-fr gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {items.map((item) => (
            <li key={item.title}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-black/35 p-6 ring-1 ring-inset ring-white/[0.02] transition duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-blue-500/50 before:to-transparent before:opacity-0 before:transition-opacity hover:-translate-y-0.5 hover:border-blue-500/20 hover:shadow-[0_20px_60px_-28px_rgba(37,99,235,0.28)] hover:before:opacity-100 sm:p-7">
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-600/[0.07] blur-2xl transition-opacity opacity-0 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex items-start justify-between gap-4">
                  <h3 className="font-display text-[17px] font-semibold leading-snug tracking-tight text-white">
                    {item.title}
                  </h3>
                  <span
                    className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-blue-600 shadow-[0_0_14px_rgba(37,99,235,0.65)] ring-2 ring-blue-500/25 transition group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(37,99,235,0.85)]"
                    aria-hidden
                  />
                </div>
                <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-zinc-500">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-3 sm:mt-16 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href="#contatto"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Richiedi la tua pagina
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-8 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-blue-500/40 hover:bg-blue-600/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Guarda esempi
          </a>
        </div>
      </div>
    </section>
  );
}
