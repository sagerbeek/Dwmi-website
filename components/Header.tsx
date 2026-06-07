"use client";

import { useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  ["Home", "#home"],
  ["Why DWMI", "#why"],
  ["Platform", "#platform"],
  ["Expertise", "#expertise"],
  ["Membership", "#membership"],
  ["Governance", "#governance"],
  ["Board", "#board"],
  ["Contact", "#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map(([label, href]) => <a className="focus-ring rounded-md hover:text-[#1689c7]" href={href} key={href}>{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#join" className="focus-ring hidden rounded-full bg-[#0b2545] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#123761] sm:inline-flex">Join DWMI</a>
          <button type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="focus-ring rounded-lg border border-slate-300 p-2 text-[#0b2545] lg:hidden">
            <span className="sr-only">Toggle navigation menu</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true"><path d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2">
            {navItems.map(([label, href]) => <a onClick={() => setOpen(false)} className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#1689c7]" href={href} key={href}>{label}</a>)}
            <a onClick={() => setOpen(false)} href="#join" className="focus-ring rounded-lg bg-[#0b2545] px-3 py-2 text-sm font-semibold text-white sm:hidden">Join DWMI</a>
          </div>
        </nav>
      )}
    </header>
  );
}
