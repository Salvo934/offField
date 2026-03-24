const steps: { title: string; body: string }[] = [
  {
    title: "Contatto iniziale",
    body: "Call conoscitiva: obiettivi, audience (sponsor, club, media) e tono visivo desiderato.",
  },
  {
    title: "Raccolta materiali",
    body: "Video, foto, statistiche, biografia, link social e asset brand — ti guidiamo su cosa serve.",
  },
  {
    title: "Design + sviluppo",
    body: "Proposta visiva, iterazioni rapide e build performante mobile-first con animazioni leggere.",
  },
  {
    title: "Consegna finale",
    body: "Pubblicazione, formazione rapida su aggiornamenti e supporto per sponsor kit / QR.",
  },
];

export function Process(): JSX.Element {
  return (
    <section
      className="border-t border-white/[0.06] bg-ink-950 py-20 sm:py-28"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Processo
          </p>
          <h2
            id="process-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl"
          >
            Chiaro, veloce, senza attriti.
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            Un flusso lineare così puoi restare concentrato sulla prestazione, non sui file.
          </p>
        </div>
        <ol className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-white/[0.08] bg-black/50 p-6 transition hover:border-blue-500/30"
            >
              <span
                className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/35 bg-blue-600/10 font-display text-xs font-bold text-blue-400"
                aria-hidden
              >
                {index + 1}
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 text-center">
          <a
            href="#contatto"
            className="inline-flex items-center justify-center rounded-full border border-blue-500/40 px-8 py-3 text-sm font-semibold text-blue-400 transition hover:bg-blue-600/10 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Inizia con un messaggio
          </a>
        </div>
      </div>
    </section>
  );
}
