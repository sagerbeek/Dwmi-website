export function Roadmap() {
  const blocks = [
    {
      title: "Pilot 2025",
      items: [
        "Q3: recruit founding members, populate 50–100 profiles and test the opportunity format.",
        "Q4: launch event, monthly sessions and 5–10 joint submissions.",
        "Track three KPIs: posted leads per month, formed consortia and bid hit-rate.",
      ],
    },
    {
      title: "Scale-up 2026",
      items: [
        "Regional hubs and theme channels.",
        "Integrations for document handling and light CRM workflows.",
        "Further development of templates, member guidance and knowledge sessions.",
      ],
    },
  ];
  return <div className="grid gap-6 md:grid-cols-2">{blocks.map(block => <article key={block.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-2xl font-semibold text-[#0b2545]">{block.title}</h3><ul className="mt-5 space-y-4">{block.items.map(item => <li key={item} className="flex gap-3 leading-7 text-slate-600"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#e5a44f]" />{item}</li>)}</ul></article>)}</div>;
}
