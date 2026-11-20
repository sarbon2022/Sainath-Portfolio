import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, FolderGit2, GraduationCap } from "lucide-react";
import { PageContainer, PageHeader, TechTag } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { projects, type Project } from "@/data/profile";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Insurance & Travel CRM, API Integrations | Sainath Bohare" },
      {
        name: "description",
        content:
          "Insurance booking CRM, travel & accommodation CRM, loyalty voucher integration and an ASP.NET e-commerce project.",
      },
      { property: "og:title", content: "Featured Projects — Sainath Bohare" },
      { property: "og:description", content: "Enterprise CRM modules and SOAP/REST supplier integrations built with C#, ASP.NET and SQL Server." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const filters = ["All", "C#", "ASP.NET Web Forms", "SQL Server", "SOAP", "REST API", "XML", "Bootstrap"];

function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter))),
    [filter],
  );

  return (
    <PageContainer>
      <PageHeader
        eyebrow="featured projects"
        title={
          <>
            CRM modules & <span className="text-gradient">supplier integrations</span>
          </>
        }
        description="Business-critical work across insurance, travel, accommodation and loyalty — plus my MCA final-year project."
      />

      <Reveal className="mt-12 flex flex-wrap justify-center gap-2" delay={100}>
        <span className="sr-only" id="filter-label">Filter projects by technology</span>
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-1.5 font-mono text-xs font-medium transition-all",
              filter === f
                ? "border-transparent bg-gradient-primary text-primary-foreground shadow-glow"
                : "border-glass-border bg-secondary/50 text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
      {visible.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">No projects use {filter}.</p>
      )}
    </PageContainer>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = project.category === "Academic" ? GraduationCap : FolderGit2;
  const hasDetails = project.responsibilities.length > 0;

  return (
    <Reveal delay={index * 80}>
      <article id={project.id} className="glass glass-hover flex h-full scroll-mt-28 flex-col rounded-3xl p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
            <Icon className="h-6 w-6" />
          </span>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold",
              project.category === "Professional" ? "bg-primary/10 text-primary" : "bg-gold/15 text-gold",
            )}
          >
            {project.category}
          </span>
        </div>
        <p className="mt-6 font-mono text-xs text-muted-foreground">{project.domain}</p>
        <h2 className="mt-2 text-xl font-bold">{project.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {hasDetails && (
          <div className="mt-5">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={`${project.id}-details`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              {open ? "Hide" : "Show"} responsibilities
              <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
            </button>
            <div
              id={`${project.id}-details`}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-500",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <ul className="overflow-hidden">
                {project.responsibilities.map((r) => (
                  <li key={r} className="mt-3 flex gap-2.5 text-sm leading-relaxed text-muted-foreground first:mt-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
          {project.tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>
      </article>
    </Reveal>
  );
}
