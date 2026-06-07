import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1689c7]">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-tight text-[#0b2545] md:text-4xl">{title}</h2>
      {children && <div className="mt-5 text-base leading-7 text-slate-600 md:text-lg">{children}</div>}
    </div>
  );
}
