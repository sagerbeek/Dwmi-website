import { ProcessDiagram } from "./InlineSVGIllustrations";

const workflow = [
  ["1", "Post", "A member posts an opportunity."],
  ["2", "Respond", "Interested members respond with role, effort and availability."],
  ["3", "Assemble", "The lead owner assembles the team and coordinates the bid."],
  ["4", "Support", "Templates, guidance and monthly knowledge sessions support efficient proposal development."],
];

export function PlatformWorkflow() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <ProcessDiagram />
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {workflow.map(([number, title, text]) => <article key={number} className="rounded-2xl bg-slate-50 p-5"><div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#1689c7] font-semibold text-white">{number}</div><h3 className="font-semibold text-[#0b2545]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}
      </div>
    </div>
  );
}
