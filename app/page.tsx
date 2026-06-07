import { BoardCard, ChallengeCard, ExpertiseCard, GovernanceCard, MembershipCard } from "@/components/Cards";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroIllustration, NetworkDiagram } from "@/components/InlineSVGIllustrations";
import { PlatformWorkflow } from "@/components/PlatformWorkflow";
import { Roadmap } from "@/components/Roadmap";
import { SectionHeading } from "@/components/SectionHeading";

const expertiseAreas = [
  "Water and soil-led planning", "Stress tests and risk analysis", "Coastal and morphodynamics", "Urban water management", "Nature-based solutions", "WASH", "Governance and institutional strengthening", "Asset management and O&M", "Data, GIS and modelling", "Flood risk management", "Urban resilience", "Food security and water supply", "Early warning and hydro-informatics", "Climate adaptation", "Capacity building and training",
];

const opportunityFields = ["Client and country", "Link and deadline", "Required expertise", "Lead owner", "Document status", "NDA yes/no", "Desired roles", "Go/no-go date"];
const highlights = ["Non-profit foundation", "Member-based platform", "Clear opportunity workflow", "Consortium building", "Knowledge sharing", "Cost recovery model"];
const memberBenefits = ["Direct access to relevant international leads.", "Clear member profiles and references to increase visibility.", "Fast consortium building across disciplines and borders.", "Practical learning by pairing juniors with seniors.", "Lower acquisition effort through shared dealflow.", "A professional collective identity without losing independence."];
const principles = ["Transparency on lead ownership and team roles.", "Confidentiality per opportunity, with NDA where needed.", "Clear agreements on IP, references and client communication.", "No price-fixing or market allocation.", "Teaming and knowledge sharing only.", "Fair split of proposal costs and success fees per team agreement."];
const documents = ["Statutes", "Internal Regulations", "Code of Conduct", "Privacy and Data Processing Agreement", "NDA template", "Partnership and subcontract templates", "Tender logbook"];
const joinSteps = ["Register your interest and receive an invitation to the platform.", "Complete your profile and upload a few reference cases.", "Join the launch event.", "Post your first opportunity or join an existing tender team.", "Attend monthly sessions and help grow the shared dealflow."];

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <section className="wave-lines overflow-hidden bg-[#f7fbfa]">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1fr_1.05fr] lg:px-8">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#1689c7]">Dutch water experts, connected for international impact.</p>
              <h1 className="text-4xl font-semibold tracking-tight text-[#0b2545] sm:text-5xl lg:text-6xl">Dutch Water Management International</h1>
              <p className="mt-5 text-2xl font-medium text-[#1689c7]">Collective Dutch Expertise, Global Water Impact.</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">DWMI is a non-profit foundation and practical platform for independent Dutch water professionals and small specialist firms. We help members share international opportunities, form strong consortia and deliver integrated water projects worldwide.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#join" className="focus-ring rounded-full bg-[#0b2545] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#123761]">Join the network</a>
                <a href="#platform" className="focus-ring rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-[#0b2545] transition hover:border-[#1689c7] hover:text-[#1689c7]">Explore how it works</a>
              </div>
            </div>
            <HeroIllustration />
          </div>
        </section>

        <section id="why" className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title="The challenge"><p>Independent specialists and small firms in the water domain often have strong niche expertise, senior experience and valuable international networks. But they also face limited visibility, limited acquisition capacity and limited reach in larger international markets.</p><p className="mt-4">Complex tenders require speed, breadth and credible teams. Many opportunities therefore go to large consultancies, while a focused consortium of independent experts could often provide a better, more flexible and more senior solution.</p></SectionHeading>
            <div className="grid gap-6 md:grid-cols-3">
              <ChallengeCard title="Fragmented expertise">Specialists are available, but not always visible or connected at the right moment.</ChallengeCard>
              <ChallengeCard title="Limited tender capacity">Deadlines are short and international opportunities require fast team formation.</ChallengeCard>
              <ChallengeCard title="Missed collective value">Strong individual expertise does not automatically translate into shared international dealflow.</ChallengeCard>
            </div>
          </div>
        </section>

        <section className="wave-lines bg-[#f7fbfa] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title="The DWMI answer"><p>DWMI operates a simple, focused online platform where members share opportunities, form consortia and coordinate international assignments in the integrated water sector.</p><p className="mt-4">The goal is practical collaboration: clear leads, clear ownership, clear roles and strong proposals. DWMI is not designed as a talk shop, but as a professional structure for shared dealflow and delivery.</p></SectionHeading>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{highlights.map(item => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-[#0b2545] shadow-sm"><span className="mr-3 text-[#e5a44f]">●</span>{item}</div>)}</div>
          </div>
        </section>

        <section id="platform" className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title="A shared opportunity board"><p>The core of DWMI is a shared opportunity board with clear ownership, confidentiality options and credit rules. Members can post leads, indicate required expertise, assemble teams and coordinate bids.</p></SectionHeading>
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><h3 className="text-xl font-semibold text-[#0b2545]">Standard opportunity fields</h3><div className="mt-5 grid gap-3 sm:grid-cols-2">{opportunityFields.map(field => <div key={field} className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">{field}</div>)}</div></div>
              <NetworkDiagram />
            </div>
            <PlatformWorkflow />
          </div>
        </section>

        <section id="expertise" className="bg-[#f7fbfa] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl"><SectionHeading title="Core expertise areas"><p>DWMI brings together expertise across the integrated water sector. Members may work individually or combine disciplines in tailored project teams.</p></SectionHeading><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{expertiseAreas.map((area, index) => <ExpertiseCard key={area} title={area} index={index} />)}</div></div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl"><SectionHeading title="Value for members" /><div className="grid gap-5 md:grid-cols-2">{memberBenefits.map(benefit => <div key={benefit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="flex gap-3 leading-7 text-slate-700"><span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f5fb] text-sm font-bold text-[#1689c7]">✓</span>{benefit}</p></div>)}</div></div>
        </section>

        <section id="membership" className="wave-lines bg-[#f7fbfa] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl"><SectionHeading title="Simple membership model"><p>DWMI uses a lean financial model. The purpose is cost recovery and reinvestment into the platform, guidance and shared resources.</p></SectionHeading><div className="grid gap-6 md:grid-cols-3"><MembershipCard label="Annual membership" value="€100">Per member, kept deliberately modest to support participation by independent professionals and small specialist firms.</MembershipCard><MembershipCard label="Success fee" value="1–2%">To DWMI when a team formed via the platform wins and executes a project.</MembershipCard><MembershipCard label="Financial principle" value="Cost recovery only">Any surplus is reinvested into the platform, guidance, templates and community support.</MembershipCard></div></div>
        </section>

        <section id="governance" className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl"><SectionHeading title="Governance and rules"><p>DWMI is structured as a non-profit foundation. It is governed by a small board and supported by a light advisory circle of members. The platform depends on trust, transparency and professional conduct.</p></SectionHeading><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{principles.map(title => <GovernanceCard key={title} title={title} />)}</div><div className="mt-10 rounded-3xl bg-[#0b2545] p-7 text-white md:p-8"><h3 className="text-2xl font-semibold">Baseline documents</h3><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{documents.map(document => <div key={document} className="rounded-xl bg-white/10 px-4 py-3 text-sm font-medium">{document}</div>)}</div></div></div>
        </section>

        <section id="board" className="bg-[#f7fbfa] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl"><SectionHeading title="Board"><p>DWMI is guided by a small board that safeguards the mission, professional quality and collaborative character of the platform.</p></SectionHeading><div className="grid gap-6 md:grid-cols-3">
            {/* Placeholder biographies: replace with approved final board text before publication. */}
            <BoardCard name="Rob Steijn">Rob contributes experience in international water management, integrated water resources management and strategic project development.</BoardCard>
            {/* Placeholder biographies: replace with approved final board text before publication. */}
            <BoardCard name="Bas Agerbeek">Bas contributes expertise in flood risk management, hydrological and hydraulic modelling, spatial planning, climate adaptation and international water assignments.</BoardCard>
            {/* Placeholder biographies: replace with approved final board text before publication. */}
            <BoardCard name="Lukas Oosterbaan">Lukas contributes experience in professional networks, organisational development and international collaboration in the water sector.</BoardCard>
          </div></div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading title="Roadmap" /><Roadmap /></div></section>

        <section id="join" className="wave-lines bg-[#f7fbfa] px-4 py-16 sm:px-6 md:py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1689c7]">A practical platform for international water collaboration.</p><h2 className="text-3xl font-semibold tracking-tight text-[#0b2545] md:text-4xl">How to join</h2><a href="#contact" className="focus-ring mt-7 inline-flex rounded-full bg-[#0b2545] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#123761]">Register interest</a></div><ol className="grid gap-4">{joinSteps.map((step, index) => <li key={step} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1689c7] font-semibold text-white">{index + 1}</span><span className="leading-7 text-slate-700">{step}</span></li>)}</ol></div></section>

        <section id="contact" className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><h2 className="text-3xl font-semibold tracking-tight text-[#0b2545] md:text-4xl">Contact DWMI</h2><p className="mt-5 text-lg leading-8 text-slate-600">Interested in joining DWMI, exploring a partnership or discussing an international water opportunity? Get in touch.</p><p className="mt-8 rounded-2xl bg-[#e8f5fb] p-5 text-slate-700">Independent specialists. Integrated water solutions.</p></div><ContactForm /></div></section>
      </main>
      <Footer />
    </>
  );
}
