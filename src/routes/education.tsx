import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, GraduationCap } from "lucide-react";
import { PageContainer, PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { certifications, education } from "@/data/profile";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education & Certifications — Sainath Bohare" },
      {
        name: "description",
        content:
          "MCA from IMCOST, Thane (Mumbai University, 2023), B.Sc. IT from Mumbai University (2021), plus ASP.NET, MS-CIT and Automation 360 RPA certifications.",
      },
      { property: "og:title", content: "Education & Certifications — Sainath Bohare" },
      { property: "og:description", content: "MCA and B.Sc. IT from Mumbai University with ASP.NET and RPA certifications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="education & certifications"
        title={
          <>
            Grounded in <span className="text-gradient">computer applications</span>
          </>
        }
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <section>
          <Reveal>
            <h2 className="flex items-center gap-2.5 text-xl font-bold">
              <GraduationCap className="h-5 w-5 text-primary" /> Education
            </h2>
          </Reveal>
          <div className="mt-6 space-y-5">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 100} className="glass glass-hover flex items-start gap-5 rounded-3xl p-7">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-primary font-display text-lg font-bold text-primary-foreground shadow-glow">
                  {e.year}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug">{e.degree}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{e.school}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section>
          <Reveal>
            <h2 className="flex items-center gap-2.5 text-xl font-bold">
              <BadgeCheck className="h-5 w-5 text-primary" /> Certifications
            </h2>
          </Reveal>
          <ul className="mt-6 space-y-4">
            {certifications.map((c, i) => (
              <Reveal as="li" key={c.name} delay={i * 80} className="glass glass-hover flex items-center gap-4 rounded-2xl p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{c.name}</p>
                  {c.issuer && <p className="text-sm text-muted-foreground">{c.issuer}</p>}
                </div>
              </Reveal>
            ))}
          </ul>
        </section>
      </div>
    </PageContainer>
  );
}
