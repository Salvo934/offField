type Block = {
  kicker: string;
  title: JSX.Element;
  lead: string;
  body: string;
};

const blocks: Block[] = [
  {
    kicker: "Essenziale",
    title: (
      <>
        Torniamo al <em className="font-editorial italic text-zinc-200">vero</em>, senza
        artifici.
      </>
    ),
    lead: "Niente template generici.",
    body: "In un mare di feed identici, scegliamo pochi elementi forti: gerarchia chiara, contenuti curati e una voce che suona tua — non da social manager anonimo.",
  },
  {
    kicker: "Fondamenta",
    title: (
      <>
        Una pagina che regge il peso delle <em className="font-editorial italic text-zinc-200">decisioni</em>.
      </>
    ),
    lead: "Sponsor e club leggono in fretta.",
    body: "Serve un unico link che racconti chi sei in campo: risultati, video, numeri e contatti in ordine. Non più PDF dispersi o reel che spariscono.",
  },
  {
    kicker: "Rispetto",
    title: (
      <>
        Quando il talento c&apos;è, il compito è <em className="font-editorial italic text-zinc-200">mostrarlo</em>.
      </>
    ),
    lead: "Chiarezza prima di tutto.",
    body: "Non reinventiamo il tuo sport: mettiamo in scena la tua storia con design e tecnologia che restano al servizio del messaggio — puliti, memorabili, condivisibili.",
  },
];

export function Problem(): JSX.Element {
  return (
    <section
      className="relative border-t border-white/[0.06] bg-zinc-950 py-24 sm:py-32 lg:py-40"
      id="filosofia"
      aria-labelledby="philosophy-heading"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400/90">
          Filosofia
        </p>
        <h2
          id="philosophy-heading"
          className="mt-6 max-w-4xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-4xl lg:text-5xl"
        >
          Meno rumore. Più{" "}
          <em className="font-editorial font-normal italic text-blue-200/90">chiarezza</em>.
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500 sm:text-xl">
          Gli stakeholder decidono in pochi secondi. Noi costruiamo il posto in cui quella decisione
          ti è favorevole.
        </p>

        <div className="mt-20 space-y-24 sm:mt-28 sm:space-y-32">
          {blocks.map((block) => (
            <article key={block.kicker} className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
                {block.kicker}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
                {block.title}
              </h3>
              <p className="mt-4 font-medium text-zinc-400">{block.lead}</p>
              <p className="mt-6 text-base leading-relaxed text-zinc-500 sm:text-lg">{block.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
