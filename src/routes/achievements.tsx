import { createFileRoute } from "@tanstack/react-router";
import { Award, Medal, Trophy, Workflow } from "lucide-react";
import { PageContainer, PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { professionalAchievements, sportsAchievements } from "@/data/profile";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Sainath Bohare" },
      {
        name: "description",
        content:
          "National-level Ice Hockey participant, State-level Gold and Silver medalist, and contributor to enterprise CRM modules for multiple clients.",
      },
      { property: "og:title", content: "Achievements — Sainath Bohare" },
      { property: "og:description", content: "Sports honours in Ice Hockey and professional contributions to enterprise CRM software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AchievementsPage,
});

const medalStyle = {
  national: { bg: "bg-gradient-primary", icon: Trophy, label: "National" },
  gold: { bg: "bg-medal-gold", icon: Medal, label: "Gold" },
  silver: { bg: "bg-medal-silver", icon: Medal, label: "Silver" },
};

function AchievementsPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="achievements"
        title={
          <>
            Discipline on the ice, <span className="text-gradient">delivery at work</span>
          </>
        }
        description="The teamwork and drive from competitive Ice Hockey carry straight into how I build software."
      />

      <section className="mt-16">
        <Reveal>
          <h2 className="text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Sports · Ice Hockey</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {sportsAchievements.map((a, i) => {
            const s = medalStyle[a.medal];
            return (
              <Reveal key={a.title} delay={i * 100} className="glass glass-hover group rounded-3xl p-8 text-center">
                <div className="relative mx-auto h-24 w-24">
                  <div className={cn("absolute inset-0 rounded-full opacity-40 blur-xl", s.bg)} />
                  <div
                    className={cn(
                      "relative grid h-24 w-24 place-items-center rounded-full text-primary-foreground shadow-card transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6",
                      s.bg,
                    )}
                  >
                    <s.icon className="h-10 w-10" strokeWidth={1.75} />
                  </div>
                </div>
                <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
                <h3 className="mt-2 text-xl font-bold">{a.title}</h3>
                <p className="mt-1 text-sm text-primary">{a.detail}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mt-20">
        <Reveal>
          <h2 className="text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Professional</h2>
        </Reveal>
        <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
          {professionalAchievements.map((a, i) => {
            const Icon = i === 0 ? Award : Workflow;
            return (
              <Reveal key={a} delay={i * 100} className="glass glass-hover flex gap-5 rounded-3xl p-7">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="leading-relaxed text-foreground/90">{a}</p>
              </Reveal>
            );
          })}
        </div>
      </section>
    </PageContainer>
  );
}
