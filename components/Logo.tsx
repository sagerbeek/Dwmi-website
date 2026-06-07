export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="focus-ring flex items-center gap-3 rounded-md" aria-label="DWMI home">
      <svg className="h-12 w-12 shrink-0" viewBox="0 0 96 96" role="img" aria-label="DWMI logo mark">
        <circle cx="48" cy="48" r="43" fill="#f7fbfa" stroke="#0b2545" strokeWidth="4" />
        <path d="M16 55c9-9 19-12 31-8 11 4 19 1 33-12v17c-11 10-23 14-36 10-10-3-18 0-28 9V55Z" fill="#1689c7" opacity="0.94" />
        <path d="M25 38c14-17 30-21 47-12-11 4-19 11-25 22-9-6-16-8-22-10Z" fill="#4f8f5b" />
        <path d="M54 31c5 9 5 18 1 28" fill="none" stroke="#f7fbfa" strokeWidth="3" strokeLinecap="round" />
        <path d="M34 67h34v7H34zM39 55h7v12h-7zM50 49h7v18h-7zM61 43h7v24h-7z" fill="#e5a44f" />
        <path d="M20 75c15-13 29-15 43-7 6 3 11 3 17-1" fill="none" stroke="#1b9aaa" strokeWidth="3" strokeLinecap="round" />
      </svg>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-xl font-semibold tracking-[0.08em] text-[#0b2545]">DWMI</span>
          <span className="block text-xs font-medium text-slate-600">Dutch Water Management International</span>
        </span>
      )}
    </a>
  );
}
