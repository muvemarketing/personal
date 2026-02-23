"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const cases = [
  {
    client: "Saints Peter & Paul Schools",
    image: "/images/portfolio-spps.svg",
    categories: ["Web", "SEO"],
    challenge: "Modernize three disconnected school sites.",
    result: "Unified design system and clearer user journeys.",
  },
  {
    client: "Campos Media",
    image: "/images/portfolio-campos.svg",
    categories: ["Web", "Branding"],
    challenge: "Build a conversion-focused digital portfolio.",
    result: "Professional brand presence and stronger lead capture.",
  },
  {
    client: "MD Lands",
    image: "/images/portfolio-mdlands.svg",
    categories: ["SEO", "Web"],
    challenge: "Increase local visibility and site engagement.",
    result: "Improved search performance and qualified traffic.",
  },
  {
    client: "Black Lab Leather Goods",
    image: "/images/portfolio-bllg.svg",
    categories: ["Branding", "E-commerce"],
    challenge: "Scale online sales and brand consistency.",
    result: "Stronger product storytelling and digital reach.",
  },
  {
    client: "Service Ops Automation",
    image: "/images/profile.svg",
    categories: ["Automation"],
    challenge: "Eliminate repetitive lead-routing and follow-up tasks.",
    result: "Automated lead handoffs and faster first-response times.",
  },
  {
    client: "Multi-location Campaign Hub",
    image: "/images/profile.svg",
    categories: ["Automation", "SEO"],
    challenge: "Coordinate campaigns and tracking across locations.",
    result: "Centralized reporting and more reliable attribution.",
  },
];

const filters = ["All", "Web", "SEO", "Branding", "Automation", "E-commerce"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCases = useMemo(() => {
    if (activeFilter === "All") return cases;
    return cases.filter((item) => item.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="portfolio" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="airtable-shell">
          <div className="airtable-toolbar justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Portfolio / Case Studies</h2>
            <span className="text-xs text-slate-500">{filteredCases.length} records</span>
          </div>

          <div className="p-4 md:p-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`airtable-pill border ${activeFilter === filter ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-700 border-slate-300"}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredCases.map((item) => (
                <article key={item.client} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                  <Image src={item.image} alt={item.client} width={640} height={360} className="w-full h-40 object-cover bg-slate-100" />
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900">{item.client}</h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.categories.map((tag) => (
                        <span key={tag} className="airtable-pill bg-slate-100 text-slate-700">{tag}</span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 mt-3"><strong>Challenge:</strong> {item.challenge}</p>
                    <p className="text-sm text-slate-600 mt-1"><strong>Result:</strong> {item.result}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
