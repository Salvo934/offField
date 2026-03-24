import { ContactForm } from "./ContactForm";

export function CTA(): JSX.Element {
  return (
    <section
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink-950 py-20 text-white sm:py-28"
      id="contatto"
      aria-labelledby="cta-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-glow-top opacity-50" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Prossimo passo
            </p>
            <h2
              id="cta-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.85rem] lg:leading-[1.1]"
            >
              Fatti notare dagli sponsor.{" "}
              <span className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
                Inizia oggi.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-zinc-400">
              Raccontaci disciplina, obiettivi e tempistiche: ti rispondiamo con prossimi step e una
              stima chiara — senza impegno.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
