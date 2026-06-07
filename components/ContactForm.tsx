const reasons = [
  "I want to join DWMI",
  "I want to discuss a project opportunity",
  "I represent a partner organisation",
  "Other",
];

export function ContactForm() {
  return (
    <form action="mailto:info@dwmi.nl" method="post" encType="text/plain" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8" aria-label="Contact DWMI form">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-semibold text-[#0b2545]">Name<input aria-label="Name" name="name" className="focus-ring mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-slate-900" /></label>
        <label className="text-sm font-semibold text-[#0b2545]">Organisation<input aria-label="Organisation" name="organisation" className="focus-ring mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-slate-900" /></label>
        <label className="text-sm font-semibold text-[#0b2545]">Email<input aria-label="Email" type="email" name="email" className="focus-ring mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-slate-900" /></label>
        <label className="text-sm font-semibold text-[#0b2545]">Reason<select aria-label="Contact reason" name="reason" className="focus-ring mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-slate-900">{reasons.map(reason => <option key={reason}>{reason}</option>)}</select></label>
        <label className="text-sm font-semibold text-[#0b2545] md:col-span-2">Message<textarea aria-label="Message" name="message" rows={6} className="focus-ring mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-slate-900" /></label>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="focus-ring rounded-full bg-[#0b2545] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#123761]">Send via email</button>
        {/* Placeholder email address. Replace once the confirmed DWMI contact mailbox is available. */}
        <a className="focus-ring rounded-md text-sm font-semibold text-[#1689c7] hover:text-[#0b2545]" href="mailto:info@dwmi.nl">info@dwmi.nl</a>
      </div>
    </form>
  );
}
