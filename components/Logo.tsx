import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="focus-ring flex items-center gap-3 rounded-md" aria-label="DWMI home">
      <Image
        src="/dwmi-logo.svg"
        alt="DWMI logo mark"
        width={44}
        height={44}
        className="h-11 w-11 shrink-0"
      />
      {!compact && (
        <span className="leading-tight">
          <span className="block text-xl font-semibold tracking-[0.08em] text-[#0b2545]">DWMI</span>
          <span className="block text-xs font-medium text-slate-600">Dutch Water Management International</span>
        </span>
      )}
    </a>
  );
}
