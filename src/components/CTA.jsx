import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl backdrop-blur sm:p-12">
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
          Ready to accelerate your career with AI?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Start free, generate a role-specific resume, and get a personalized learning path in minutes.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/20 transition hover:from-violet-500 hover:to-fuchsia-500"
          >
            Create my resume
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <div className="inline-flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="h-4 w-4 text-emerald-300" /> No credit card required
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
