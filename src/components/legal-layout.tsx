import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function LegalLayout({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <div className="pointer-events-none absolute -top-40 -left-32 size-[520px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 size-[560px] rounded-full bg-indigo-500/20 blur-[130px]" />

      <header className="relative z-10 mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-primary font-display text-sm font-bold tracking-tight text-primary-foreground">
            123
          </div>
          <div>
            <p className="font-display text-lg font-bold leading-none tracking-tight">
              123
              <span className="text-primary">Sídla</span>
            </p>
          </div>
        </Link>
        <Link
          to="/"
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          ← Zpět na web
        </Link>
      </header>

      <main className="relative z-10 mx-auto max-w-4xl px-6 pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {effectiveDate}
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight">
          {title}
        </h1>

        <div className="legal-prose mt-10 space-y-6 text-[15px] leading-relaxed text-muted-foreground">
          {children}
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <p className="text-center md:text-left">
            © 2026 123Sídla · Václavské náměstí 782/22, 110 00 Praha 1
          </p>
          <div className="flex gap-6">
            <Link to="/ochrana-osobnich-udaju" className="transition hover:text-white">
              Ochrana údajů
            </Link>
            <Link to="/obchodni-podminky" className="transition hover:text-white">
              Obchodní podmínky
            </Link>
            <a href="mailto:Info@123sidla.cz" className="transition hover:text-white">
              Info@123sidla.cz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="!mt-12 font-display text-2xl font-bold tracking-tight text-white">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export function Ul({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5">{children}</ul>;
}
