import Link from "next/link";

const NavLink = ({ href, children }) => (
  <Link className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href={href}>
    {children}
  </Link>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-5">
        <Link href="#" className="font-semibold text-slate-900 tracking-tight">
          Matthew Willey <span className="text-slate-500 font-normal">• Resume Base</span>
        </Link>
        <nav className="flex items-center gap-5 overflow-x-auto whitespace-nowrap">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#portfolio">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
