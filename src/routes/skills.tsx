import { createFileRoute } from "@tanstack/react-router";
import { PageContainer, PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { getGroupIcon, skillIcons } from "@/components/site/skill-icons";
import { skillGroups } from "@/data/profile";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Technical Skills — Sainath Bohare, .NET Developer" },
      {
        name: "description",
        content:
          "C#, ASP.NET MVC, ASP.NET Core, Web Forms, Angular, SQL Server, Entity Framework, LINQ, SOAP and REST API integration.",
      },
      { property: "og:title", content: "Technical Skills — Sainath Bohare" },
      { property: "og:description", content: "Frontend, backend, database and API integration skills on the .NET stack." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="technical skills"
        title={
          <>
            A full-stack toolkit on the <span className="text-gradient">.NET</span> platform
          </>
        }
        description="From responsive interfaces to optimized SQL and supplier APIs — the technologies I use every day."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, gi) => {
          const GroupIcon = getGroupIcon(group.id);
          return (
            <Reveal key={group.id} delay={gi * 80} className="glass group rounded-3xl p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold">{group.title}</h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">{group.blurb}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform duration-500 group-hover:rotate-6">
                  <GroupIcon className="h-6 w-6" />
                </span>
              </div>
              <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.skills.map((skill, si) => {
                  const Icon = skillIcons[skill.key];
                  return (
                    <Reveal
                      as="li"
                      key={skill.key}
                      delay={gi * 80 + si * 50}
                      className="flex flex-col items-start gap-3 rounded-xl border border-glass-border bg-secondary/40 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary"
                    >
                      <Icon className="h-6 w-6 text-primary" aria-hidden />
                      <span className="text-sm font-medium leading-snug">{skill.name}</span>
                    </Reveal>
                  );
                })}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </PageContainer>
  );
}
