const cases = [
  { client: "Saints Peter & Paul Schools", challenge: "Modernize three disconnected school sites", impact: "Unified design system + improved navigation" },
  { client: "Campos Media", challenge: "Launch a conversion-focused media portfolio", impact: "Stronger lead generation and brand trust" },
  { client: "MD Lands", challenge: "Improve SEO and local visibility", impact: "Increased qualified traffic and engagement" },
  { client: "Black Lab Leather Goods", challenge: "Scale e-commerce presence", impact: "Stronger brand consistency and reach" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="airtable-shell">
          <div className="airtable-toolbar">
            <h2 className="text-lg font-semibold text-slate-900">Project records</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="airtable-table min-w-[760px]">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Challenge</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {cases.map((item) => (
                  <tr key={item.client}>
                    <td className="font-medium text-slate-900">{item.client}</td>
                    <td>{item.challenge}</td>
                    <td>{item.impact}</td>
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
