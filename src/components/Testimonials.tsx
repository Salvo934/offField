const quotes: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "Finalmente un link da mandare agli sponsor: video, numeri e storia in una pagina sola. Ha cambiato come ci presentiamo ai brand.",
    name: "Laura Ferri",
    role: "Head of Performance · FC mock",
  },
  {
    quote:
      "I club ricevono decine di profili. La pagina di Marco è stata leggibile in 30 secondi — abbiamo richiesto i full highlight subito dopo.",
    name: "David Müller",
    role: "Talent scout · campionato europeo",
  },
  {
    quote:
      "Non volevo un sito ‘da template’. Qui si sente il valore del lavoro sul campo e la qualità fuori dal campo.",
    name: "Giulia Conti",
    role: "Atleta professionista · atletica",
  },
];

export function Testimonials(): JSX.Element {
  return (
    <section
      className="border-t border-white/[0.06] bg-black py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Testimonial
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl"
          >
            Chi lavora con atleti sa riconoscere la differenza.
          </h2>
        </div>
        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {quotes.map((item) => (
            <li
              key={item.name}
              className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-zinc-900/30 p-8 backdrop-blur-sm transition hover:border-blue-500/25"
            >
              <span className="font-display text-3xl leading-none text-blue-500/40" aria-hidden>
                “
              </span>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300">{item.quote}</p>
              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <p className="font-display text-sm font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs text-zinc-500">{item.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
