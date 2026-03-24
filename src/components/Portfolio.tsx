type CaseStudy = {
  name: string;
  role: string;
  league: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
};

const cases: CaseStudy[] = [
  {
    name: "Elena Marchesi",
    role: "Centrocampista",
    league: "Serie A Femminile",
    description:
      "Hub con highlight reel, heatmap attività, statistiche progressive e sezione dedicata agli sponsor.",
    imageSrc:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Atleta in allenamento indoor",
    tags: ["Highlight", "Stats", "Sponsor deck"],
  },
  {
    name: "Marco Vitale",
    role: "Tennis · ATP Challenger",
    league: "Tour internazionale",
    description:
      "Pagina cinematografica con gallery match, timeline carriera e integrazione social per scouting.",
    imageSrc:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tennista durante un match",
    tags: ["Bio", "Gallery", "Social"],
  },
  {
    name: "Jamal Okonkwo",
    role: "Guardia · Basket",
    league: "Lega europea",
    description:
      "Profilo premium con reel verticale, numeri avanzati e link condivisibile per agenti e brand.",
    imageSrc:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Giocatore di basket in palleggio",
    tags: ["Reel", "Metriche", "Link unico"],
  },
];

function TagList({
  tags,
  groupName,
}: {
  tags: string[];
  groupName: "featured" | "grid";
}): JSX.Element {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Moduli inclusi">
      {tags.map((tag) => (
        <li key={tag}>
          <span
            className={
              groupName === "featured"
                ? "inline-flex rounded-full border border-blue-500/25 bg-blue-600/15 px-3.5 py-1.5 text-xs font-medium text-blue-100 ring-1 ring-inset ring-blue-400/15"
                : "inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 ring-1 ring-inset ring-white/[0.04] transition group-hover/grid:border-blue-500/25 group-hover/grid:bg-blue-600/10 group-hover/grid:text-blue-200"
            }
          >
            {tag}
          </span>
        </li>
      ))}
    </ul>
  );
}

function FeaturedCase({ item, index }: { item: CaseStudy; index: number }): JSX.Element {
  return (
    <article className="group/feat relative">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-8">
        <div className="lg:col-span-8">
          <div className="relative rounded-[1.35rem] bg-gradient-to-br from-blue-500/35 via-white/[0.12] to-transparent p-px shadow-[0_0_60px_-20px_rgba(37,99,235,0.45)]">
            <div className="overflow-hidden rounded-[1.28rem] bg-zinc-950 ring-1 ring-inset ring-white/[0.05]">
              <div className="group/img relative aspect-[16/11] w-full overflow-hidden sm:aspect-[2/1] lg:aspect-[16/10]">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={1600}
                  height={1000}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-[1.1s] ease-out group-hover/feat:scale-[1.03]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/30"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-blue-600/[0.1] mix-blend-overlay opacity-0 transition duration-700 group-hover/feat:opacity-100"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-60"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.08]"
                  aria-hidden
                />

                <div
                  className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10"
                  aria-hidden
                >
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] font-medium tabular-nums tracking-[0.2em] text-blue-300/90">
                        {String(index + 1).padStart(2, "0")} — In evidenza
                      </p>
                      <p className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-blue-300">{item.role}</p>
                    </div>
                    <div className="hidden sm:flex sm:gap-2">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-medium text-zinc-200 backdrop-blur-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_14px_rgba(37,99,235,0.8)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Case study
            </span>
            <span className="font-mono text-[11px] font-medium tabular-nums text-zinc-600">
              #{String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[1.85rem] lg:leading-tight">
            {item.name}
          </h3>
          <p className="mt-2 text-[15px] font-semibold text-blue-400">{item.role}</p>
          <p className="mt-1 text-sm text-zinc-500">{item.league}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-zinc-400">{item.description}</p>
          <div className="mt-8">
            <TagList tags={item.tags} groupName="featured" />
          </div>
          <a
            href="#contatto"
            className="group/link mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-blue-500/35 hover:bg-blue-600/15 hover:text-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Progetto sullo stesso piano
            <span className="transition-transform group-hover/link:translate-x-0.5" aria-hidden>
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

function GridCase({
  item,
  index,
}: {
  item: CaseStudy;
  index: number;
}): JSX.Element {
  return (
    <article className="group/grid flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-zinc-950/80 to-black/60 shadow-card ring-1 ring-inset ring-white/[0.04] transition duration-500 hover:-translate-y-1 hover:border-blue-500/25 hover:shadow-[0_28px_70px_-34px_rgba(37,99,235,0.4)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover/grid:scale-[1.05]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-blue-600/[0.1] mix-blend-overlay opacity-0 transition duration-500 group-hover/grid:opacity-100"
          aria-hidden
        />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-lg border border-white/10 bg-black/50 px-2 py-1 font-mono text-[10px] font-medium tabular-nums tracking-wider text-zinc-300 backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
            {item.name}
          </h3>
          <p className="mt-1 text-sm font-semibold text-blue-400">{item.role}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">{item.league}</p>
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-zinc-400">{item.description}</p>
        <div className="mt-6">
          <TagList tags={item.tags} groupName="grid" />
        </div>
        <a
          href="#contatto"
          className="group/link mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-zinc-500 transition hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Parliamone
          <span className="transition-transform group-hover/link:translate-x-0.5" aria-hidden>
            →
          </span>
        </a>
      </div>
    </article>
  );
}

export function Portfolio(): JSX.Element {
  const [featured, ...gridCases] = cases;
  if (featured === undefined) {
    return (
      <section
        className="border-t border-white/[0.06] bg-black py-24"
        id="portfolio"
        aria-labelledby="portfolio-heading"
      >
        <h2 id="portfolio-heading" className="sr-only">
          Portfolio
        </h2>
      </section>
    );
  }

  return (
    <section
      className="relative overflow-hidden border-t border-white/[0.06] bg-black py-24 text-white sm:py-32"
      id="portfolio"
      aria-labelledby="portfolio-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-glow-top opacity-[0.38]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[length:56px_56px] bg-grid-fade bg-repeat opacity-[0.18]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-blue-600/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-glow-mid blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/[0.1] py-1 pl-1 pr-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-200">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/30">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
              </span>
              Portfolio
            </span>
            <h2
              id="portfolio-heading"
              className="mt-7 font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.06]"
            >
              Esempi di profili atleta —{" "}
              <span className="font-editorial font-normal italic text-zinc-400">mock</span>{" "}
              realistici
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-500 sm:text-lg">
              Showcase pensato come un media kit: gerarchia chiara, immagini forti e dettagli per chi
              decide fuori dal feed.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-5 sm:flex-row sm:items-center lg:flex-col lg:items-end">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 text-right backdrop-blur-sm ring-1 ring-inset ring-white/[0.04]">
              <p className="font-mono text-3xl font-bold tabular-nums text-white sm:text-4xl">
                {cases.length}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                case study
              </p>
            </div>
            <a
              href="#contatto"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Richiedi la tua pagina
            </a>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <FeaturedCase item={featured} index={0} />
        </div>

        {gridCases.length > 0 ? (
          <div className="mt-14 border-t border-white/[0.06] pt-14 sm:mt-16 sm:pt-16">
            <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-600">
              Altri progetti
            </p>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              {gridCases.map((item, i) => (
                <GridCase key={item.name} item={item} index={i + 2} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
