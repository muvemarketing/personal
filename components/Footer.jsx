export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© 2026 Matthew Willey · Airtable-style resume site.</p>
        <nav className="flex items-center gap-4">
          <a className="text-link" href="#">LinkedIn</a>
          <a className="text-link" href="mailto:hello@example.com">Email</a>
        </nav>
      </div>
    </footer>
  );
}
