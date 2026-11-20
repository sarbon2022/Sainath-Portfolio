import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = { eyebrow: string; title: ReactNode; description?: ReactNode };

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">
        <span className="text-muted-foreground">{"// "}</span>
        {eyebrow}
      </p>
      <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}

export function PageContainer({ children }: { children: ReactNode }) {
  return <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pt-36">{children}</main>;
}

export function TechTag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-glass-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] font-medium text-secondary-foreground">
      {children}
    </span>
  );
}
