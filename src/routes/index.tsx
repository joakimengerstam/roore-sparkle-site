import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpenCheck,
  Check,
  FileCheck2,
  Link2,
  Mail,
  MessageSquareText,
  Quote,
  ReceiptText,
  Send,
  Sparkles,
} from "lucide-react";

const contactHref =
  "mailto:joakim.engerstam@roore.se?subject=15%20minuter%20om%20ett%20fl%C3%B6de";

const services = [
  {
    number: "01",
    title: "Fakturor & bokföring",
    description:
      "Tolkning, kontering och export till Fortnox, Visma eller Bokio. Ni granskar innan något bokförs.",
    icon: ReceiptText,
    tags: ["Leverantörsfakturor", "SIE-export"],
  },
  {
    number: "02",
    title: "Order & offert",
    description:
      "Orderrader och beräkningar går från mejl eller formulär till färdiga utkast i affärssystemet.",
    icon: FileCheck2,
    tags: ["Orderregistrering", "Bekräftelser"],
  },
  {
    number: "03",
    title: "Mejl & ärenden",
    description:
      "Inkommande post sorteras och sammanfattas. Svarsutkast väntar på er innan något skickas.",
    icon: MessageSquareText,
    tags: ["Sortering", "Svarsutkast"],
  },
  {
    number: "04",
    title: "Integrationer",
    description:
      "Affärssystem, kassa, webbshop och bank kopplas ihop så informationen slipper flyttas för hand.",
    icon: Link2,
    tags: ["Befintliga system", "Säkra flöden"],
  },
  {
    number: "05",
    title: "Rapportering",
    description:
      "Dagliga siffror samlas, kontrolleras och skickas dit de ska—utan klipp, klistra och dubbelarbete.",
    icon: BookOpenCheck,
    tags: ["Dagliga siffror", "Veckorapport"],
  },
  {
    number: "06",
    title: "Text & dokument",
    description:
      "Ostrukturerade underlag blir tydliga, användbara utkast med mänsklig kontroll i rätt steg.",
    icon: Sparkles,
    tags: ["Dokument", "Godkännande"],
  },
];

const workflow = [
  ["06:02", "Kontoutdrag hämtat", "14 transaktioner", "done"],
  ["06:03", "Verifikationer klara", "12 att godkänna", "done"],
  ["06:03", "Avvikelse upptäckt", "2 för granskning", "review"],
  ["07:41", "Faktura tolkad", "Kontering föreslagen", "done"],
  ["08:15", "Orderutkast skapat", "Väntar på ert ja", "waiting"],
] as const;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Roore — Automatisering av order och fakturor" },
      {
        name: "description",
        content:
          "Roore bygger bort repetitiv order-, faktura- och mejlhantering i systemen ni redan använder. Börja med ett flöde.",
      },
      { property: "og:title", content: "Roore — Automatisering som fungerar i vardagen" },
      {
        property: "og:description",
        content:
          "Vi förbereder fakturor, ordrar, mejl och bokföring. Ni godkänner innan något går vidare.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Roore AB",
          address: { "@type": "PostalAddress", addressLocality: "Stockholm", addressCountry: "SE" },
          email: "joakim.engerstam@roore.se",
          url: "https://www.roore.se",
        }),
      },
    ],
  }),
});

function Logo() {
  return (
    <a href="#top" className="inline-flex items-center gap-2.5" aria-label="Roore, till startsidan">
      <span className="grid size-8 grid-cols-2 gap-0.5 rounded-[3px] bg-primary p-1.5" aria-hidden="true">
        <span className="rounded-[1px] bg-primary-foreground" />
        <span className="rounded-[1px] bg-primary-foreground/45" />
        <span className="rounded-[1px] bg-primary-foreground/45" />
        <span className="rounded-[1px] bg-primary-foreground" />
      </span>
      <span className="text-lg font-extrabold text-foreground">Roore.</span>
    </a>
  );
}

function Index() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="border-b border-border/80 bg-background/95">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav aria-label="Huvudnavigation" className="hidden items-center gap-7 md:flex">
            <a className="nav-link" href="#tjanster">Tjänster</a>
            <a className="nav-link" href="#for-vem">För vem</a>
            <a className="nav-link" href="#arbetssatt">Arbetssätt</a>
          </nav>
          <a href={contactHref} className="button-small">
            Ta ett första samtal <ArrowDownRight className="size-4" />
          </a>
        </div>
      </header>

      <section className="relative border-b border-border" aria-labelledby="hero-title">
        <div className="absolute inset-x-0 top-0 h-px bg-accent" />
        <div className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-16 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-24">
          <div className="animate-rise">
            <p className="eyebrow">Roore AB · Stockholm</p>
            <h1 id="hero-title" className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.4rem)] font-extrabold leading-[.98]">
              Få bort jobbet som görs <span className="text-primary">om och om igen.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              Vi bygger bort repetitiv order-, faktura- och mejlhantering i systemen ni redan har. Allt förbereds—ni godkänner innan det går vidare.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={contactHref} className="button-primary">
                Boka 15 minuter <ArrowRight className="size-4" />
              </a>
              <a href="#tjanster" className="button-secondary">
                Se vad vi bygger
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Check className="size-3.5 text-primary" /> Era befintliga system</span>
              <span className="inline-flex items-center gap-2"><Check className="size-3.5 text-primary" /> Mänskligt godkännande</span>
              <span className="inline-flex items-center gap-2"><Check className="size-3.5 text-primary" /> Ett flöde i taget</span>
            </div>
          </div>

          <div className="relative animate-rise-delayed lg:pl-4">
            <div className="absolute -left-6 -top-6 hidden size-28 border-l border-t border-accent lg:block" aria-hidden="true" />
            <div className="workflow-panel">
              <div className="flex items-start justify-between border-b border-workflow-line pb-5">
                <div>
                  <p className="workflow-label">Pågående flöde</p>
                  <h2 className="mt-2 font-mono text-base font-semibold text-workflow-foreground">Dagens underlag</h2>
                </div>
                <span className="status-live"><span className="status-dot" /> Aktivt</span>
              </div>
              <ol className="mt-2">
                {workflow.map(([time, title, detail, state], index) => (
                  <li key={title} className="workflow-row" style={{ animationDelay: `${250 + index * 120}ms` }}>
                    <time className="font-mono text-xs text-workflow-muted">{time}</time>
                    <span className={`workflow-check ${state}`}>
                      {state === "review" ? "!" : state === "waiting" ? "·" : "✓"}
                    </span>
                    <span className="min-w-0">
                      <strong className="block font-mono text-xs font-medium text-workflow-foreground">{title}</strong>
                      <span className="mt-1 block font-mono text-[11px] text-workflow-muted">{detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 flex items-center justify-between border-t border-workflow-line pt-5">
                <span className="font-mono text-[10px] uppercase text-workflow-muted">Nästa steg</span>
                <span className="inline-flex items-center gap-2 font-mono text-xs text-workflow-accent">
                  Ert godkännande <ArrowRight className="size-3.5" />
                </span>
              </div>
            </div>
            <div className="ml-auto mt-4 flex w-fit items-center gap-2 border border-border bg-background px-3 py-2 font-mono text-[10px] uppercase text-muted-foreground shadow-sm">
              <span className="size-1.5 rounded-full bg-primary" /> Inget skickas utan er
            </div>
          </div>
        </div>
      </section>

      <section id="tjanster" className="section-band">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-8 border-b border-border pb-12 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="eyebrow">Det vi bygger</p>
              <h2 className="section-title mt-5">Från handpåläggning<br />till färdigt underlag.</h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-muted-foreground md:justify-self-end">
              Vi utgår från hur ni faktiskt arbetar. Inte en ny plattform att lära sig, utan bättre flöden i Fortnox, Visma, Bokio eller affärssystemet ni redan använder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="service-item group">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-muted-foreground">{service.number}</span>
                    <Icon className="size-5 text-primary transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-10 text-xl font-bold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{service.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="for-vem" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-28">
          <div>
            <p className="eyebrow text-primary-foreground/60">För vem</p>
            <h2 className="section-title mt-5 max-w-md">För team där administrationen har blivit ett eget jobb.</h2>
          </div>
          <div className="grid gap-px bg-primary-foreground/15 sm:grid-cols-2">
            {[
              ["Ekonomi", "Ni hanterar samma slags fakturor, underlag och avstämningar varje vecka."],
              ["Order", "Beställningar kommer via mejl eller formulär och skrivs in manuellt."],
              ["Kundservice", "Inkorgen kräver sortering, sammanfattning och återkommande svar."],
              ["Verksamhet", "Information flyttas mellan system som inte riktigt pratar med varandra."],
            ].map(([title, text]) => (
              <article key={title} className="bg-primary px-6 py-7 sm:p-8">
                <span className="mb-7 block size-2 bg-contact-accent" />
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="arbetssatt" className="section-band border-b border-border">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Så går det till</p>
            <h2 className="section-title mt-5">Litet första steg.<br />Tydligt resultat.</h2>
          </div>
          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
            {[
              ["01", "15 minuter", "Vi tittar på ett order- eller fakturaflöde och ser om det finns ett tydligt första jobb."],
              ["02", "Ett flöde i drift", "Vi bygger runt ert arbetssätt. Ni testar, granskar och godkänner innan något går vidare."],
              ["03", "Mät och gå vidare", "Ni får siffror på ärenden, tid och värde. Fungerar det tar vi nästa flöde."],
            ].map(([num, title, text]) => (
              <li key={num} className="process-step">
                <span className="process-number">{num}</span>
                <h3 className="mt-8 text-xl font-bold">{title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-contact text-contact-foreground" id="kontakt">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="eyebrow text-contact-foreground/60">Ett flöde först</p>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.5rem,5vw,4.8rem)] font-extrabold leading-[1.02]">
                Vilket återkommande jobb vill ni slippa nästa vecka?
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-sm text-base leading-7 text-contact-foreground/70">
                Femton minuter räcker för att se om det finns ett första flöde att bygga.
              </p>
              <a href={contactHref} className="button-contact mt-7">
                <Mail className="size-4" /> Boka 15 minuter
              </a>
            </div>
          </div>
          <div className="mt-20 flex flex-col gap-5 border-t border-contact-foreground/15 pt-7 text-xs text-contact-foreground/55 sm:flex-row sm:items-center sm:justify-between">
            <Logo />
            <a className="inline-flex items-center gap-2 transition-colors hover:text-contact-foreground" href="mailto:joakim.engerstam@roore.se">
              joakim.engerstam@roore.se <Send className="size-3" />
            </a>
            <span>Stockholm · Sverige</span>
          </div>
        </div>
      </section>
    </main>
  );
}