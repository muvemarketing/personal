import Link from "next/link";

const roles = [
  { role: "Owner", company: "Muve Marketing", location: "Bethany Beach, DE", timeline: "2023 – Present", type: "Leadership" },
  { role: "President", company: "Spider Web Connections", location: "Remote", timeline: "2018 – 2023", type: "Leadership" },
  { role: "CEO & Creative Director", company: "Archaea, LLC", location: "Remote", timeline: "2016 – Present", type: "Creative" },
  { role: "SharePoint Consultant", company: "Trellist Marketing Technology", location: "Philadelphia, PA", timeline: "2015 – 2016", type: "Consulting" },
  { role: "Business Analyst", company: "Bridgeforce, Inc", location: "Philadelphia, PA", timeline: "2013 – 2015", type: "Operations" },
];

const tagStyle = {
  Leadership: "bg-emerald-100 text-emerald-700",
  Creative: "bg-violet-100 text-violet-700",
  Consulting: "bg-blue-100 text-blue-700",
  Operations: "bg-amber-100 text-amber-700",
};

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="airtable-shell">
          <div className="airtable-toolbar justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Experience grid</h2>
            <Link href="/resume.pdf" download className="text-link text-sm font-medium">Download PDF resume</Link>
          </div>

          <div className="overflow-x-auto">
            <table className="airtable-table min-w-[720px]">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Timeline</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((job) => (
                  <tr key={`${job.role}-${job.company}`}>
                    <td className="font-medium text-slate-900">{job.role}</td>
                    <td>{job.company}</td>
                    <td>{job.location}</td>
                    <td>{job.timeline}</td>
                    <td>
                      <span className={`airtable-pill ${tagStyle[job.type]}`}>{job.type}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
