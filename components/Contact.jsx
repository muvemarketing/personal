"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="airtable-shell">
          <div className="airtable-toolbar">
            <h2 className="text-lg font-semibold text-slate-900">Contact form</h2>
          </div>
          <form onSubmit={onSubmit} className="p-6 md:p-8 grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-slate-600 mb-2">Name</label>
              <input name="name" required placeholder="Your name" className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-2">Email</label>
              <input name="email" type="email" required placeholder="you@example.com" className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-slate-600 mb-2">Message</label>
              <textarea name="message" required rows={4} placeholder="What are you building?" className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div className="md:col-span-2 flex flex-wrap items-center gap-4">
              <button className="btn-airtable" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Submit"}</button>
              <a className="text-link text-sm font-medium" href="mailto:hello@example.com">or email directly</a>
            </div>
            {status === "sent" && <p className="md:col-span-2 text-sm text-emerald-700">Message submitted successfully.</p>}
            {status === "error" && <p className="md:col-span-2 text-sm text-rose-700">Submission failed. Please retry.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
