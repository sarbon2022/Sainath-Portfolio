import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Sainath Bohare — Home">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary font-display text-sm font-bold text-primary-foreground shadow-glow">
        SB
      </span>
      <span className="hidden font-display text-sm font-semibold leading-tight sm:block">
        Sainath Bohare
        <span className="block font-mono text-[10px] font-normal text-muted-foreground">.NET Developer</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 transition-all duration-300",
          scrolled ? "glass" : "border border-transparent",
        )}
      >
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <a href={profile.resumeUrl} download>
              <Download /> Resume
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu">
                <Menu className="!size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-glass-border bg-background">
              <SheetHeader>
                <SheetTitle className="text-left font-display">Navigate</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="mt-2 flex flex-col gap-1 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: true }}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild variant="hero" className="mt-4">
                  <a href={profile.resumeUrl} download>
                    <Download /> Download Resume
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
