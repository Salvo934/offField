import { whatsappHref } from "../config/contact";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  idealFor: string;
  goal: string;
  includes: string[];
  result: string;
  badge?: string;
  featured?: boolean;
};

function whatsappMessageForPlan(plan: Plan): string {
  const includesBlock = plan.includes.map((x) => `• ${x}`).join("\n");
  return `Ciao Studio! Vorrei richiedere il pacchetto ${plan.name} (${plan.price}).\n\nMessaggio dal sito — sezione Pacchetti.\n\n— Informazioni pacchetto —\nTagline: ${plan.tagline}\nIdeale per: ${plan.idealFor}\nObiettivo: ${plan.goal}\n\nInclude:\n${includesBlock}\n\n— Dati per iniziare —\n(Compila qui sotto e invia)\n• Nome sito: offField\n• Nome e Cognome atleta:\n• Disciplina / ruolo:\n• Età / categoria:\n• Club / società (e città):\n• Link social (Instagram / TikTok / altro):\n• Curriculum sportivo (breve) o risultati principali:\n• Obiettivo a 3-6 mesi:\n• Tempistiche (quando vuoi essere online?):\n• Hai già foto/video pronti? (sì/no + note):\n• Need extra (se vuoi):\n• Preferisci contatto via WhatsApp o email?\n\nGrazie! ${plan.result}\n`;
}

const ACCENTS = {
  START: {
    topLine: "bg-blue-500/70",
    glow: "bg-blue-500/20",
    tagText: "text-blue-300",
    checkBg: "bg-blue-600/20",
    checkText: "text-blue-400",
    resultBorder: "border-blue-400/25",
    resultGlow: "shadow-[0_0_40px_-22px_rgba(59,130,246,0.45)]",
    ctaNormal:
      "border border-white/15 bg-white/[0.04] text-white hover:border-blue-500/45 hover:bg-white/[0.07]",
    ctaFeatured:
      "bg-gradient-to-b from-blue-500 to-blue-600 text-white ring-1 ring-blue-400/25 hover:from-blue-400 hover:to-blue-500",
  },
  GROWTH: {
    topLine: "bg-blue-500/90",
    glow: "bg-blue-500/22",
    tagText: "text-blue-300",
    checkBg: "bg-blue-600/20",
    checkText: "text-blue-400",
    resultBorder: "border-blue-400/25",
    resultGlow: "shadow-[0_0_44px_-20px_rgba(37,99,235,0.55)]",
    ctaNormal:
      "border border-white/15 bg-white/[0.04] text-white hover:border-blue-500/45 hover:bg-white/[0.07]",
    ctaFeatured:
      "bg-gradient-to-b from-blue-500 to-blue-600 text-white ring-1 ring-blue-400/25 hover:from-blue-400 hover:to-blue-500",
  },
  ELITE: {
    topLine: "bg-fuchsia-500/80",
    glow: "bg-fuchsia-500/18",
    tagText: "text-fuchsia-200",
    checkBg: "bg-fuchsia-600/18",
    checkText: "text-fuchsia-300",
    resultBorder: "border-fuchsia-400/25",
    resultGlow: "shadow-[0_0_44px_-20px_rgba(217,70,239,0.35)]",
    ctaNormal:
      "border border-white/15 bg-white/[0.04] text-white hover:border-fuchsia-500/35 hover:bg-white/[0.07]",
    ctaFeatured:
      "bg-gradient-to-b from-fuchsia-500 to-fuchsia-600 text-white ring-1 ring-fuchsia-400/25 hover:from-fuchsia-400 hover:to-fuchsia-500",
  },
  PRO: {
    topLine: "bg-sky-500/80",
    glow: "bg-sky-500/18",
    tagText: "text-sky-200",
    checkBg: "bg-sky-600/18",
    checkText: "text-sky-300",
    resultBorder: "border-sky-400/25",
    resultGlow: "shadow-[0_0_44px_-20px_rgba(56,189,248,0.35)]",
    ctaNormal:
      "border border-white/15 bg-white/[0.04] text-white hover:border-sky-500/35 hover:bg-white/[0.07]",
    ctaFeatured:
      "bg-gradient-to-b from-sky-500 to-sky-600 text-white ring-1 ring-sky-400/25 hover:from-sky-400 hover:to-sky-500",
  },
} as const;

type AccentName = keyof typeof ACCENTS;
function getAccent(name: string) {
  return ACCENTS[name as AccentName] ?? ACCENTS.START;
}

const plans: Plan[] = [
  {
    name: "START",
    tagline: "ATHLETE PRESENCE",
    price: "349€",
    idealFor: "Atleti giovani o dilettanti che vogliono una presenza online credibile.",
    goal: "Quando qualcuno cerca il tuo nome, trova un atleta serio.",
    includes: [
      "Landing page atleta professionale",
      "Bio sportiva (storia + percorso)",
      "Foto profilo + mini gallery",
      "Collegamento social (Instagram, TikTok)",
      "Sezione contatti",
      "Design mobile-first",
      "Link condivisibile per coach e società",
    ],
    result: "Ora esisto online in modo professionale.",
  },
  {
    name: "GROWTH",
    tagline: "ATHLETE PERFORMANCE PROFILE",
    price: "799€",
    idealFor: "Atleti agonisti che vogliono visibilità e crescita reale.",
    goal: "Diventare un atleta strutturato e riconoscibile.",
    includes: [
      "Sito completo atleta (4-6 sezioni)",
      "Storytelling carriera sportiva",
      "Sezione risultati e competizioni",
      "Highlights performance",
      "Media gallery avanzata (foto + video)",
      "Profilo atleta strutturato",
      "Contatti per società/scout",
      "SEO base (visibilità su Google)",
    ],
    result: "Sono un atleta serio e competitivo.",
  },
  {
    name: "ELITE",
    tagline: "ATHLETE BRAND & SCOUTING KIT",
    price: "1.490€",
    idealFor: "Semi-pro e atleti ambiziosi.",
    goal: "Costruire un'immagine pronta per sponsor e agenti.",
    includes: [
      "Brand atleta completo premium",
      "Sito avanzato personalizzato",
      "Storytelling professionale della carriera",
      "Sezione scouting dedicata",
      "Media kit sponsor (PDF scaricabile)",
      "Pagina press / highlights",
      "Ottimizzazione immagine pubblica",
      "Struttura per agenti e società",
    ],
    result: "Sono pronto per essere sponsorizzato.",
  },
  {
    name: "PRO",
    tagline: "OFFICIAL ATHLETE SITE",
    price: "1.200€ - 2.500€",
    idealFor: "Atleti già in club, semi-pro avanzati o professionisti.",
    goal: "Avere un sito ufficiale da atleta riconosciuto.",
    includes: [
      "Sito ufficiale atleta premium",
      "Carriera completa (club, stagioni, risultati)",
      "Statistiche e performance dettagliate",
      "Media professionale (foto/video)",
      "Sezione press e articoli",
      "Area sponsor e collaborazioni",
      "Contatti agenti / management",
      "SEO professionale",
    ],
    result: "Sono un atleta ufficiale e riconosciuto.",
  },
];

export function Pricing(): JSX.Element {
  return (
    <section
      className="relative border-b border-white/[0.06] bg-black py-20 sm:py-28"
      id="pacchetti"
      aria-labelledby="pricing-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.1),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Pacchetti
          </p>
          <h2
            id="pricing-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl"
          >
            Quattro livelli chiari per crescere come atleta online.
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            Dalla presenza professionale al sito ufficiale completo: scegli il livello giusto per il
            tuo momento sportivo.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-2 md:gap-7 xl:grid-cols-4 xl:items-stretch xl:gap-8">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 sm:p-7 lg:p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.015] ${
                plan.featured
                  ? "border-blue-500/40 bg-gradient-to-b from-blue-600/15 to-zinc-950/80 shadow-[0_0_60px_-20px_rgba(37,99,235,0.35)] hover:shadow-[0_20px_70px_-26px_rgba(37,99,235,0.45)]"
                  : "border-white/[0.08] bg-zinc-950/40 shadow-[0_14px_46px_-32px_rgba(0,0,0,0.85)] hover:border-white/[0.14] hover:shadow-[0_20px_60px_-28px_rgba(37,99,235,0.28)]"
              }`}
            >
              {plan.badge ? (
                <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 px-4 py-1 text-[10px] font-semibold uppercase tracking-wider text-white ring-1 ring-blue-400/30">
                  {plan.badge}
                </p>
              ) : null}

              {(() => {
                const a = getAccent(plan.name);
                return (
                  <>
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-[1px] ${a.topLine}`}
                      aria-hidden
                    />
                    <div
                      className={`pointer-events-none absolute -right-16 -top-10 h-56 w-56 rounded-full blur-3xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-90 ${a.glow}`}
                      aria-hidden
                    />
                  </>
                );
              })()}

              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              >
                <div className="absolute -top-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
              </div>

              <div className="flex flex-1 flex-col">
                {(() => {
                  const a = getAccent(plan.name);
                  return (
                    <>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                        {plan.name}
                      </h3>
                      <p className={`mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${a.tagText}`}>
                        {plan.tagline}
                      </p>
                <p className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
                        {plan.price}
                      </p>
                    </>
                  );
                })()}

                <div className="mt-5 space-y-4 text-sm text-zinc-300">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Ideale per
                    </p>
                    <p className="mt-1.5 text-zinc-300">{plan.idealFor}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Obiettivo
                    </p>
                    <p className="mt-1.5 text-zinc-300">{plan.goal}</p>
                  </div>
                </div>
                <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-zinc-300">
                  {plan.includes.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-xs font-bold ${getAccent(
                          plan.name
                        ).checkBg} ${getAccent(plan.name).checkText}`}
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappHref(whatsappMessageForPlan(plan))}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-center text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                    plan.featured
                      ? getAccent(plan.name).ctaFeatured ??
                        "bg-gradient-to-b from-blue-500 to-blue-600 text-white ring-1 ring-blue-400/25 hover:from-blue-400 hover:to-blue-500"
                      : getAccent(plan.name).ctaNormal
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chiedi questo pacchetto
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-zinc-500">
          Ogni pacchetto è personalizzabile in base alla disciplina, ai materiali disponibili e agli
          obiettivi sportivi.
        </p>
      </div>
    </section>
  );
}
