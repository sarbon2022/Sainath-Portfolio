import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Building2, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { TbBrandLinkedin } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { PageContainer, PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { profile, summary } from "@/data/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sainath Bohare — Full-Stack .NET Developer" },
      {
        name: "description",
        content:
          "Results-driven Full-Stack .NET developer with 2.9+ years building CRM modules for travel, insurance and accommodation platforms.",
      },
      { property: "og:title", content: "About Sainath Bohare" },
      { property: "og:description", content: "Professional summary and profile of Full-Stack .NET developer Sainath Bohare." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const strengths = [
  { title: "Clean, maintainable code", text: "Readable C# and SQL that teams can extend with confidence." },
  { title: "Complex problem solving", text: "From requirement analysis to working technical implementation." },
  { title: "Database performance", text: "Optimized stored procedures, functions, views and indexes." },
  { title: "Scalable business solutions", text: "Enterprise CRM modules and supplier integrations that grow." },
];

function AboutPage() {
  const details = [
    { icon: UserRound, label: "Name", value: profile.name },
    { icon: Briefcase, label: "Role", value: profile.designation },
    { icon: Building2, label: "Previous company", value: `${profile.previousDesignation}, ${profile.previousCompany}` },
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: TbBrandLinkedin, label: "LinkedIn", value: "linkedin.com/in/sainath-bohare", href: profile.linkedin },
  ];

  return (
    <PageContainer>
      <PageHeader
        eyebrow="about me"
        title={
          <>
            Building <span className="text-gradient">enterprise software</span> that businesses rely on
          </>
        }
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="glass rounded-3xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold">Professional summary</h2>
          <div className="mt-5 space-y-5 leading-relaxed text-muted-foreground">
            {summary.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/experience">
                See my experience <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link to="/contact">Contact me</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100} className="glass rounded-3xl p-8">
          <h2 className="text-lg font-semibold">Profile at a glance</h2>
          <dl className="mt-6 space-y-5">
            {details.map((d) => (
              <div key={d.label} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <d.icon className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{d.label}</dt>
                  <dd className="mt-0.5 break-words text-sm font-medium">
                    {d.href ? (
                      <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:text-primary">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <section className="mt-20">
        <Reveal>
          <h2 className="text-center text-3xl font-bold">What I bring to a team</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="glass glass-hover rounded-2xl p-6">
              <span className="font-mono text-sm text-primary">0{i + 1}</span>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
