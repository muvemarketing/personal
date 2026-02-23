const software = [
  { name: "WordPress", type: "CMS" },
  { name: "Shopify", type: "E-commerce" },
  { name: "WooCommerce", type: "E-commerce" },
  { name: "HubSpot", type: "CRM" },
  { name: "Salesforce", type: "CRM" },
  { name: "Airtable", type: "Database / Ops" },
  { name: "Zapier", type: "Automation" },
  { name: "Make", type: "Automation" },
  { name: "Google Workspace", type: "Productivity" },
  { name: "Asana", type: "Project Management" },
  { name: "Monday.com", type: "Project Management" },
  { name: "Trello", type: "Project Management" },
  { name: "Notion", type: "Knowledge Base" },
  { name: "GA4", type: "Analytics" },
  { name: "Google Tag Manager", type: "Analytics" },
  { name: "Looker Studio", type: "Reporting" },
  { name: "Cloudflare", type: "Infrastructure" },
  { name: "Hotjar", type: "UX Research" },
];

export default function SoftwarePlatforms() {
  return (
    <section id="software" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="airtable-shell">
          <div className="airtable-toolbar">
            <h2 className="text-lg font-semibold text-slate-900">Software & Platforms</h2>
          </div>

          <div className="overflow-x-auto hidden md:block">
            <table className="airtable-table min-w-[640px]">
              <thead>
                <tr><th>Platform</th><th>Category</th></tr>
              </thead>
              <tbody>
                {software.map((item) => (
                  <tr key={item.name}>
                    <td className="font-medium text-slate-900">{item.name}</td>
                    <td>{item.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden p-4 grid gap-3">
            {software.map((item) => (
              <article key={item.name} className="rounded-lg border border-slate-200 p-3 bg-slate-50">
                <h3 className="font-medium text-slate-900">{item.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{item.type}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
