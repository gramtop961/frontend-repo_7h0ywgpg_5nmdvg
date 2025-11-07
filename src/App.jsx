import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter text-white">
      {/* Simple top nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            CareerAI
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#" className="hover:text-white">Pricing</a>
          </nav>
          <a
            href="#"
            className="rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15"
          >
            Sign in
          </a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          <p>
            © {new Date().getFullYear()} CareerAI. Built with love to help you grow.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
