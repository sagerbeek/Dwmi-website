import type { ReactNode } from "react";

import { ExpertiseIcon } from "./InlineSVGIllustrations";

export function ChallengeCard({ title, children }: { title: string; children: ReactNode }) {
  return <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className="mb-5 h-1.5 w-14 rounded-full bg-[#1689c7]" /><h3 className="text-xl font-semibold text-[#0b2545]">{title}</h3><p className="mt-3 leading-7 text-slate-600">{children}</p></article>;
}

export function ExpertiseCard({ title, index }: { title: string; index: number }) {
  return <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#1689c7]/40 hover:shadow-md"><div className="mb-4 inline-flex rounded-2xl bg-[#e8f5fb] p-3 text-[#1689c7] group-hover:bg-[#1689c7] group-hover:text-white"><ExpertiseIcon type={index} /></div><h3 className="font-semibold leading-snug text-[#0b2545]">{title}</h3></article>;
}

export function MembershipCard({ label, value, children }: { label: string; value: string; children: ReactNode }) {
  return <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1689c7]">{label}</p><p className="mt-4 text-3xl font-semibold text-[#0b2545]">{value}</p><p className="mt-4 leading-7 text-slate-600">{children}</p></article>;
}

export function GovernanceCard({ title }: { title: string }) {
  return <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#ecfdf5] text-[#4f8f5b]"><svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><h3 className="font-semibold text-[#0b2545]">{title}</h3></article>;
}

export function BoardCard({ name, children }: { name: string; children: ReactNode }) {
  return <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b2545] text-xl font-semibold text-white">{name.split(" ").map(part => part[0]).join("")}</div><h3 className="text-xl font-semibold text-[#0b2545]">{name}</h3><p className="mt-1 text-sm font-semibold text-[#1689c7]">Board member</p><p className="mt-4 leading-7 text-slate-600">{children}</p></article>;
}
