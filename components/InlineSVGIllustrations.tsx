const line = { strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function HeroIllustration() {
  return (
    <svg viewBox="0 0 760 520" className="h-auto w-full" role="img" aria-label="World map with water flows and connected expert nodes">
      <defs>
        <linearGradient id="heroSea" x1="0" x2="1"><stop stopColor="#1689c7" stopOpacity=".18" /><stop offset="1" stopColor="#1b9aaa" stopOpacity=".08" /></linearGradient>
        <filter id="soft"><feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#0b2545" floodOpacity=".12" /></filter>
      </defs>
      <rect x="20" y="20" width="720" height="480" rx="34" fill="#ffffff" filter="url(#soft)" />
      <rect x="44" y="46" width="672" height="428" rx="26" fill="url(#heroSea)" />
      <g fill="#4f8f5b" opacity=".22">
        <path d="M116 188c44-42 105-47 145-18 22 16 18 46-11 52-51 10-94-4-134-34Z" />
        <path d="M333 154c44-28 89-29 136-2 31 18 32 45 3 58-50 23-102 3-139-56Z" />
        <path d="M507 268c47-36 104-33 135 0 20 21 8 51-23 55-53 7-83-16-112-55Z" />
        <path d="M245 314c44-20 91-16 122 11 17 15 11 39-13 47-45 15-83-4-109-58Z" />
      </g>
      <g fill="none" {...line}>
        <path d="M72 284c94-64 180-63 258 2s163 68 256 12" stroke="#1689c7" strokeWidth="5" opacity=".68" />
        <path d="M88 334c98-46 175-38 232 23s144 70 266 2" stroke="#1b9aaa" strokeWidth="3" opacity=".55" />
        <path d="M156 224c83-27 164-9 241 54s147 82 236 47" stroke="#e5a44f" strokeWidth="3" opacity=".6" strokeDasharray="8 13" />
      </g>
      <g stroke="#0b2545" strokeWidth="2">
        {[ [178,248,'Expert'], [344,274,'Lead'], [514,230,'Client'], [572,354,'Project'], [262,365,'Partner'] ].map(([x,y,label]) => (
          <g key={label as string}>
            <circle cx={x as number} cy={y as number} r="18" fill="#fff" />
            <circle cx={x as number} cy={y as number} r="7" fill={(label === 'Lead' ? '#e5a44f' : label === 'Client' ? '#4f8f5b' : '#1689c7')} stroke="none" />
            <text x={x as number} y={(y as number)+40} textAnchor="middle" fill="#334155" stroke="none" fontSize="14" fontWeight="600">{label as string}</text>
          </g>
        ))}
        <path d="M196 248l130 26M362 272l134-38M360 288l194 58M280 358l276-6" fill="none" opacity=".35" />
      </g>
    </svg>
  );
}

export function ProcessDiagram() {
  const steps = ["Opportunity", "Members", "Consortium", "Proposal", "Project"];
  return (
    <svg viewBox="0 0 900 170" className="h-auto w-full" role="img" aria-label="Process from opportunity to members, consortium, proposal and project">
      <path d="M92 86h716" stroke="#1689c7" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 12" />
      {steps.map((step, i) => {
        const x = 90 + i * 180;
        return <g key={step}><circle cx={x} cy="86" r="44" fill="#fff" stroke="#dbeafe" strokeWidth="3" /><circle cx={x} cy="86" r="22" fill={["#1689c7", "#1b9aaa", "#4f8f5b", "#e5a44f", "#0b2545"][i]} /><text x={x} y="154" textAnchor="middle" fill="#0b2545" fontSize="18" fontWeight="700">{step}</text></g>;
      })}
    </svg>
  );
}

export function NetworkDiagram() {
  const nodes = [
    [260,70,"Experts"], [445,95,"Leads"], [500,250,"Clients"], [315,340,"Projects"], [120,250,"Partners"], [95,110,"Guidance"],
  ] as const;
  return (
    <svg viewBox="0 0 620 420" className="h-auto w-full" role="img" aria-label="DWMI platform network connecting experts, leads and clients">
      <rect x="18" y="18" width="584" height="384" rx="28" fill="#f8fafc" stroke="#e2e8f0" />
      <g fill="none" stroke="#1689c7" strokeWidth="2.5" opacity=".45">
        {nodes.map(([x,y]) => <path key={`${x}-${y}`} d={`M310 210L${x} ${y}`} />)}
      </g>
      <circle cx="310" cy="210" r="62" fill="#0b2545" />
      <text x="310" y="203" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="800">DWMI</text>
      <text x="310" y="230" textAnchor="middle" fill="#bfdbfe" fontSize="13">platform</text>
      {nodes.map(([x,y,label], i) => <g key={label}><circle cx={x} cy={y} r="42" fill="#fff" stroke={["#1689c7", "#1b9aaa", "#4f8f5b", "#e5a44f", "#1689c7", "#1b9aaa"][i]} strokeWidth="3" /><text x={x} y={y+5} textAnchor="middle" fill="#0b2545" fontSize="14" fontWeight="700">{label}</text></g>)}
    </svg>
  );
}

export function ExpertiseIcon({ type }: { type: number }) {
  const paths = [
    <><path d="M5 20c7-7 14-7 22 0s15 7 22 0" /><path d="M12 12c8-5 18-5 30 0" /></>,
    <><path d="M10 38h32" /><path d="M16 38V16h20v22" /><path d="M22 22h8M22 29h8" /></>,
    <><path d="M7 34c12-16 25-16 38 0" /><path d="M9 38c10-7 21-7 34 0" /></>,
    <><path d="M12 40V15h28v25" /><path d="M8 40h36" /><path d="M18 22h4M29 22h4M18 30h4M29 30h4" /></>,
    <><path d="M27 43c-2-13 1-24 12-33 5 13 1 24-12 33Z" /><path d="M25 43C15 37 11 27 14 14c11 7 15 17 11 29Z" /></>,
    <><path d="M16 13h21v12c0 10-5 17-10.5 20C21 42 16 35 16 25V13Z" /><path d="M22 24h9M26.5 19v10" /></>,
    <><path d="M12 18l15-8 15 8v20l-15 8-15-8Z" /><path d="M27 10v36M12 18l15 9 15-9" /></>,
    <><path d="M12 36h30" /><path d="M17 36V20h20v16" /><path d="M21 20l6-8 6 8" /></>,
  ];
  return <svg viewBox="0 0 54 54" className="h-11 w-11" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">{paths[type % paths.length]}</g></svg>;
}
