import { Logo } from "./Logo";

const footerLinks = [
  ["Why DWMI", "#why"], ["Platform", "#platform"], ["Expertise", "#expertise"], ["Membership", "#membership"], ["Governance", "#governance"], ["Contact", "#contact"],
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div><Logo /><p className="mt-4 max-w-md text-slate-600">Collective Dutch Expertise, Global Water Impact.</p></div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-3 text-sm font-medium text-slate-600 sm:grid-cols-3">{footerLinks.map(([label, href]) => <a className="focus-ring rounded-md hover:text-[#1689c7]" key={href} href={href}>{label}</a>)}</nav>
        </div>
        <p className="mt-10 text-sm text-slate-500">© {new Date().getFullYear()} DWMI. All rights reserved.</p>
      </div>
    </footer>
  );
}
