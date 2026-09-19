const managementRoles = [
  {
    title: "Business relations",
    items: [
      "Du är lagets ansikte utåt mot företag och sponsorer.",
      "Du hittar nya samarbetspartners, tar första kontakten och håller relationen levande under säsongen.",
      "Du tar fram sponsorerbjudanden och ser till att sponsorerna syns och får det vi lovat.",
      "Du samordnar med ekonomiansvarig inför varje avtal.",
    ],
  },
  {
    title: "Ekonomiansvarig",
    items: [
      "Du ser till att laget har pengar att bygga bilen för.",
      "Du håller i budgeten, följer upp utgifter och sköter bokföringen.",
      "Du söker bidrag och håller koll på deadlines.",
      "Du hanterar kontraktskrivning och avtal med sponsorer och leverantörer.",
      "Du samordnar med business relations så att det som lovas också går att leverera.",
    ],
  },
];

const chassisRoles = [
  {
    title: "Ram och struktur",
    items: [
      "Du konstruerar bilens rörram.",
      "Du ansvarar för primärstrukturen och bilens infästningspunkter.",
    ],
  },
  {
    title: "Fjädring och styrning (2 personer)",
    items: [
      "Ni konstruerar länkarmar, fjädring och hjulupphängning.",
      "Ni tar fram styrgeometrin och bestämmer hjulbas och spårvidd.",
    ],
  },
  {
    title: "Bromsar och pedalställ",
    items: [
      "Du konstruerar bromssystemet och pedalställ.",
      "Du ser till att bilen klarar bromstestet och säkerhetskraven kring bromsarna.",
    ],
  },
  {
    title: "Hjul och uprights",
    items: [
      "Du ansvarar för hjullager, uprights och navpartier.",
      "Du väljer däck och hjul och håller gränssnittet mot drivlinan.",
    ],
  },
  {
    title: "Kaross och förarmiljö",
    items: [
      "Du konstruerar kaross, förarsäte och brandvägg.",
      "Du ansvarar för förarens ergonomi och att cockpit klarar besiktningens mallar.",
    ],
  },
];

const drivetrainRoles = [
  {
    title: "Motorer och infästning (2 personer)",
    items: [
      "Ni väljer motorer och konstruerar motorfästen.",
      "Ni ansvarar för att motorerna integreras i chassit.",
    ],
  },
  {
    title: "Växelriktare och motorstyrning",
    items: [
      "Du väljer och monterar växelriktare.",
      "Du arbetar med momentstyrning och hur motorerna eller motorn styrs.",
    ],
  },
  {
    title: "Transmission och drivaxlar (om vi väljer central motor)",
    items: [
      "Du beräknar utväxling mot topphastighet och acceleration.",
      "Du konstruerar differential, drivaxlar och kedja eller rem.",
    ],
  },
  {
    title: "Kylsystem",
    items: [
      "Du konstruerar kylningen av motorer och växelriktare.",
      "Du dimensionerar kylare, pumpar och flöden.",
    ],
  },
  {
    title: "Simulering och prestanda",
    items: [
      "Du bygger varvtids och accelerationsmodeller som stöd för konstruktionsbeslut.",
      "Du håller i bilens viktbudget.",
    ],
  },
];

const electronicsRoles = [
  {
    title: "Ackumulatorlåda, mekanik",
    items: [
      "Du konstruerar lådan som håller bilens batteri.",
      "Du ansvarar för hållfasthet, innerväggar och infästning i bilen.",
    ],
  },
  {
    title: "Ackumulator (2 personer)",
    items: [
      "Ni bygger bilens batteri: celler, segmentering och säkringar.",
      "Ni jämför cellalternativ utifrån energi, pris och ledtid.",
    ],
  },
  {
    title: "Batteriövervakning",
    items: [
      "Du ansvarar för övervakning av celler, temperatur och isolation.",
      "Du tar fram hur systemet hanterar fel på ett säkert sätt.",
    ],
  },
  {
    title: "Avstängningskrets och säkerhet",
    items: [
      "Du konstruerar bilens säkerhetskrets med nödstopp och brytare.",
      "Du ser till att bilen stängs av säkert när något går fel.",
    ],
  },
  {
    title: "Lågspänning och data",
    items: [
      "Du ansvarar för bilens lågspänningssystem och kablage.",
      "Du arbetar med sensorer, dataloggning och förarens gränssnitt.",
    ],
  },
];

const goals = [
  "Ge studenter praktisk erfarenhet av att konstruera, bygga och testa ett riktigt fordon.",
  "Bygga vår första Formula Student bil och ta den till start i tävling 2027 eller 2028.",
  "Klara den tekniska besiktningen på första försöket, med säkerheten i främsta rummet.",
  "Bygga upp ett lag och en kunskapsbas som håller i många säsonger framåt.",
  "Skapa långsiktiga samarbeten med företag som vill vara med och utveckla framtidens ingenjörer.",
];

const values = [
  "Säkerhet först. Ingen deadline är viktigare än att alla i laget och på banan är säkra.",
  "Vi lär oss genom att göra. Ingen behöver kunna allt från början, alla behöver vilja lära sig.",
  "Vi delar kunskap. Det du lär dig dokumenterar du, så att nästa person kan bygga vidare.",
  "Vi håller det vi lovar, både mot varandra och mot våra samarbetspartners.",
  "Vi jobbar tillsammans. Ingen del av bilen fungerar utan de andra, och ingen i laget ska behöva lösa problem ensam.",
  "Alla är välkomna. Vi söker engagemang, inte en viss utbildning eller bakgrund.",
];

type RoleSectionProps = {
  title: string;
  subtitle?: string;
  roles: {
    title: string;
    items: string[];
  }[];
};

function RoleSection({ title, subtitle, roles }: RoleSectionProps) {
  return (
    <section className="mx-auto mt-14 w-full max-w-[1400px] px-4 md:mt-20 md:px-10">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600">
          {title}
        </p>
        {subtitle ? (
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">{subtitle}</p>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {roles.map((role) => (
          <article
            key={role.title}
            className="rounded-3xl border border-zinc-200 bg-white/75 p-7 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/75"
          >
            <h3 className="text-xl font-black">{role.title}</h3>
            <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-300">
              {role.items.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function JoinPage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="racing-background absolute -inset-[20%] rotate-[-8deg] scale-125" />
      </div>

      <main className="min-h-screen overflow-x-clip pb-12 text-zinc-950 dark:text-white">
        <section className="mx-auto w-full max-w-[1600px] px-4 pt-24 md:px-10">
          <div className="rounded-3xl bg-zinc-950 px-8 py-16 text-white shadow-2xl md:px-14 md:py-24">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-blue-400">
              Join us
            </p>
            <h1 className="max-w-4xl text-4xl font-black italic leading-[0.95] tracking-[-0.04em] md:text-7xl">
              20 roller vi söker
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-zinc-300 md:text-xl">
              Vi bygger ett tvärfunktionellt team för att ta vår första bil hela
              vägen till tävling.
            </p>
          </div>
        </section>

        <RoleSection
          title="Management"
          subtitle="Business relations och ekonomiansvarig."
          roles={managementRoles}
        />

        <RoleSection title="Vi söker: Chassi, 6 personer" roles={chassisRoles} />

        <RoleSection
          title="Vi söker: Drivlina, 6 personer"
          roles={drivetrainRoles}
        />

        <RoleSection
          title="Vi söker: Elektronik, 6 personer"
          roles={electronicsRoles}
        />

        <section className="mx-auto mt-14 w-full max-w-[1400px] px-4 md:mt-20 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 bg-zinc-100/80 p-7 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/75">
              <h2 className="text-3xl font-black">Mål</h2>
              <ul className="mt-5 space-y-3 text-zinc-700 dark:text-zinc-300">
                {goals.map((goal) => (
                  <li key={goal} className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-zinc-200 bg-zinc-100/80 p-7 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/75">
              <h2 className="text-3xl font-black">Värderingar</h2>
              <ul className="mt-5 space-y-3 text-zinc-700 dark:text-zinc-300">
                {values.map((value) => (
                  <li key={value} className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1400px] px-4 pb-4 md:px-10">
          <div className="rounded-3xl border border-zinc-200 bg-white/80 p-8 text-center backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/75 md:p-12">
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Intresserad? Hör av dig till{" "}
              <a
                href="mailto:contact@uppsalaformulastudent.se"
                className="font-bold text-blue-600 hover:text-blue-700"
              >
                contact@uppsalaformulastudent.se
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
