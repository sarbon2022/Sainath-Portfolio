import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, CalendarDays, CheckCircle2 } from "lucide-react";
import { PageContainer, PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { experience } from "@/data/profile";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Sainath Bohare, Software Developer" },
      {
        name: "description",
        content:
          "Software Developer at Athrava Infotech (Oct 2023 – Jul 2026) building CRM modules and SOAP/REST supplier integrations for travel and insurance clients.",
      },
      { property: "og:title", content: "Professional Experience — Sainath Bohare" },
      { property: "og:description", content: "CRM development, supplier integrations and SQL Server work at Athrava Infotech." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="experience"
        title={
          <>
            <span className="text-gradient">2.9+ years</span> of real-world development
          </>
        }
        description="Enterprise CRM modules, supplier connectivity and SQL Server work for travel, accommodation and insurance clients."
      />

      <ol className="relative mx-auto mt-16 max-w-4xl">
        <span aria-hidden className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-primary via-electric to-transparent sm:left-6" />
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 100} className="relative pb-12 pl-16 last:pb-0 sm:pl-20">
            <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow sm:h-12 sm:w-12">
              <Briefcase className="h-5 w-5" />
            </span>
            <article className="glass glass-hover rounded-3xl p-7 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">{job.role}</h2>
                  <p className="mt-1 font-display font-medium text-primary">{job.company}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-secondary/60 px-3 py-1 font-mono text-xs">
                    <CalendarDays className="h-3.5 w-3.5 text-primary" />
                    {job.period}
                  </span>
                  <span className="text-xs text-muted-foreground">{job.type}</span>
                </div>
              </div>

              {job.clients.length > 0 && (
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Clients</span>
                  {job.clients.map((c) => (
                    <span key={c} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {c}
                    </span>
                  ))}
                </div>
              )}

              <ul className="mt-6 grid gap-3">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </PageContainer>
  );
}
