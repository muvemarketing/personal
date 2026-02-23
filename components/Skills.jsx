const skills = [
  "Airtable", "Zapier", "Make (Integromat)", "HubSpot", "Salesforce", "Google Analytics 4", "Google Tag Manager",
  "Google Ads", "Meta Ads Manager", "LinkedIn Ads", "SEO Strategy", "Technical SEO", "Local SEO", "Conversion Rate Optimization",
  "Copywriting", "Email Marketing", "Marketing Automation", "CRM Architecture", "Lead Scoring", "Pipeline Design",
  "WordPress", "Shopify", "WooCommerce", "HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS",
  "Webflow", "Wix", "Squarespace", "Cloudflare", "Google Workspace", "Asana", "Monday.com", "Trello", "Notion",
  "Slack Integrations", "Hotjar", "Ahrefs", "SEMrush", "Looker Studio", "Canva", "Adobe Photoshop", "Adobe Illustrator"
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="airtable-shell">
          <div className="airtable-toolbar">
            <h2 className="text-lg font-semibold text-slate-900">Skills ({skills.length})</h2>
          </div>
          <div className="p-4 md:p-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {skills.map((skill) => (
                <li key={skill} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
