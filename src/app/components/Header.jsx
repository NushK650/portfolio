
import React from 'react';

const options = [
  { Name: 'Home', href: '#home' },
  { Name: 'About', href: '#about' },
  { Name: 'Projects', href: '#project' },
  { Name: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-panel mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-3xl px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-white/20 bg-white/5"></div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Portfolio</p>
            <p className="text-lg font-semibold text-white">Tanush R. Kumar</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {options.map((option) => (
            <a
              key={option.href}
              href={option.href}
              className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
            >
              {option.Name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-ghost hidden md:inline-flex">
          Let&apos;s Talk
        </a>
      </div>
      <div className="glass-panel mx-6 rounded-3xl px-6 py-3 md:hidden">
        <nav className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          {options.map((option) => (
            <a key={option.href} href={option.href} className="hover:text-white">
              {option.Name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
