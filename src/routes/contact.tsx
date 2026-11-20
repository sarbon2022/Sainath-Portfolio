import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Copy, Download, Mail, MapPin, Phone, Send } from "lucide-react";
import { TbBrandLinkedin } from "react-icons/tb";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageContainer, PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { profile } from "@/data/profile";
import { buildMailto, contactSchema, type ContactValues } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sainath Bohare — Hire a Full-Stack .NET Developer" },
      {
        name: "description",
        content: "Get in touch with Sainath Bohare, Full-Stack .NET & Angular developer in Thane, Maharashtra. Email, phone and LinkedIn.",
      },
      { property: "og:title", content: "Contact Sainath Bohare" },
      { property: "og:description", content: "Reach out about .NET Developer and Full-Stack Developer opportunities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass = "h-11 rounded-xl border-glass-border bg-secondary/40 focus-visible:ring-primary";

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (values: ContactValues) => {
    window.location.href = buildMailto(profile.email, values);
    toast.success("Opening your email app", { description: "Your message is ready to send." });
    reset();
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Couldn't copy — please select the address manually.");
    }
  };

  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: TbBrandLinkedin, label: "LinkedIn", value: "in/sainath-bohare", href: profile.linkedin },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <PageContainer>
      <PageHeader
        eyebrow="contact"
        title={
          <>
            Let's build something <span className="text-gradient">together</span>
          </>
        }
        description="Open to .NET Developer and Full-Stack Developer opportunities. I usually reply within a day."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-4">
          {channels.map((c) => {
            const content = (
              <>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="truncate font-medium">{c.value}</p>
                </div>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass glass-hover flex items-center gap-4 rounded-2xl p-5"
              >
                {content}
              </a>
            ) : (
              <div key={c.label} className="glass flex items-center gap-4 rounded-2xl p-5">
                {content}
              </div>
            );
          })}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="glass" onClick={copyEmail}>
              <Copy /> Copy email
            </Button>
            <Button asChild variant="hero">
              <a href={profile.resumeUrl} download>
                <Download /> Download Resume
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100} className="glass rounded-3xl p-7 sm:p-9">
          <h2 className="text-xl font-bold">Send a message</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Your name" error={errors.name?.message}>
                <Input id="name" autoComplete="name" placeholder="Jane Doe" className={fieldClass} aria-invalid={!!errors.name} {...register("name")} />
              </Field>
              <Field id="email" label="Email" error={errors.email?.message}>
                <Input id="email" type="email" autoComplete="email" placeholder="jane@company.com" className={fieldClass} aria-invalid={!!errors.email} {...register("email")} />
              </Field>
            </div>
            <Field id="subject" label="Subject" error={errors.subject?.message}>
              <Input id="subject" placeholder=".NET Developer opportunity" className={fieldClass} aria-invalid={!!errors.subject} {...register("subject")} />
            </Field>
            <Field id="message" label="Message" error={errors.message?.message}>
              <Textarea
                id="message"
                rows={6}
                placeholder="Tell me about the role or project…"
                className="rounded-xl border-glass-border bg-secondary/40 focus-visible:ring-primary"
                aria-invalid={!!errors.message}
                {...register("message")}
              />
            </Field>
            <Button type="submit" variant="hero" size="xl" disabled={isSubmitting} className="justify-self-start">
              <Send /> Send message
            </Button>
          </form>
        </Reveal>
      </div>
    </PageContainer>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
