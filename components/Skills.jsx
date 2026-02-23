const skills = [
  { tool: "Airtable", category: "Automation", level: "Advanced", statusColor: "bg-emerald-100 text-emerald-700" },
  { tool: "Zapier", category: "Automation", level: "Advanced", statusColor: "bg-emerald-100 text-emerald-700" },
  { tool: "WordPress", category: "Web", level: "Advanced", statusColor: "bg-blue-100 text-blue-700" },
  { tool: "Shopify", category: "Web", level: "Intermediate", statusColor: "bg-blue-100 text-blue-700" },
  { tool: "HubSpot", category: "CRM/Marketing", level: "Advanced", statusColor: "bg-violet-100 text-violet-700" },
  { tool: "GA4 + GTM", category: "Analytics", level: "Advanced", statusColor: "bg-amber-100 text-amber-700" },
  { tool: "Google Ads", category: "Marketing", level: "Advanced", statusColor: "bg-amber-100 text-amber-700" },
  { tool: "ChatGPT", category: "AI", level: "Intermediate", statusColor: "bg-slate-200 text-slate-700" },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="airtable-shell">
          <div className="airtable-toolbar">
            <h2 className="text-lg font-semibold text-slate-900">Skills table</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="airtable-table min-w-[680px]">
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Category</th>
                  <th>Proficiency</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill) => (
                  <tr key={skill.tool}>
                    <td className="font-medium text-slate-900">{skill.tool}</td>
                    <td>{skill.category}</td>
                    <td><span className={`airtable-pill ${skill.statusColor}`}>{skill.level}</span></td>
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
