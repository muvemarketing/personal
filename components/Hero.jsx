import Link from "next/link";

export default function Hero() {
  return (
    <section className="section pt-10 md:pt-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="airtable-shell">
          <div className="airtable-toolbar justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="airtable-pill bg-emerald-100 text-emerald-700">Open to work</span>
              <span className="airtable-pill bg-blue-100 text-blue-700">Web + Automation</span>
              <span className="airtable-pill bg-violet-100 text-violet-700">Marketing Systems</span>
            </div>
            <span className="text-xs text-slate-500">Airtable style profile view</span>
          </div>
          <div className="p-6 md:p-8 grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Building practical tech systems that help small businesses grow.
              </h1>
              <p className="mt-4 text-slate-600 max-w-2xl">
                I design, automate, and optimize digital operations—from websites to CRM workflows—so business owners can focus on customers instead of manual busywork.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Link href="#contact" className="btn-airtable">Book a conversation</Link>
                <Link href="#experience" className="text-link font-medium">View experience</Link>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-semibold text-slate-900">At-a-glance fields</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4"><dt className="text-slate-500">Role</dt><dd className="font-medium">Owner, Muve Marketing</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">Location</dt><dd className="font-medium">Bethany Beach, DE</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">Experience</dt><dd className="font-medium">10+ years</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">Focus</dt><dd className="font-medium">Web, Automation, SEO</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
