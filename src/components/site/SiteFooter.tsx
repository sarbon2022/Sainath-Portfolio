import { Link } from "@tanstack/react-router";
import { navItems, profile } from "@/data/profile";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  return (
    <footer className="border-t border-glass-border bg-background/60 backdrop-blur">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.designation}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.location}</p>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="text-muted-foreground transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-glass-border py-5 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.shortName} · Built with care
      </div>
    </footer>
  );
}
