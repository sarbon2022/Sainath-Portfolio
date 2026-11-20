/** Subtle animated grid + glow orbs behind every page. */
export function BackgroundFx() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="orb-primary absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full blur-3xl" />
      <div className="orb-electric absolute -right-40 top-1/3 h-[600px] w-[600px] rounded-full blur-3xl" />
      <div className="orb-primary absolute -bottom-60 left-1/3 h-[480px] w-[480px] rounded-full opacity-60 blur-3xl" />
    </div>
  );
}
