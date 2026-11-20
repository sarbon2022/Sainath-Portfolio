import { Mail, Phone } from "lucide-react";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { profile } from "@/data/profile";

const linkClass =
  "grid h-10 w-10 place-items-center rounded-xl border border-glass-border bg-secondary/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2.5">
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={linkClass}>
        <TbBrandLinkedin className="h-5 w-5" />
      </a>
      <a href={`mailto:${profile.email}`} aria-label="Send email" className={linkClass}>
        <Mail className="h-[18px] w-[18px]" />
      </a>
      <a href={profile.phoneHref} aria-label="Call" className={linkClass}>
        <Phone className="h-[18px] w-[18px]" />
      </a>
      {profile.github && (
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={linkClass}>
          <TbBrandGithub className="h-5 w-5" />
        </a>
      )}
    </div>
  );
}
