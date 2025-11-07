import React from 'react';
import { ArrowRight, Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      {/* Decorative background shapes (no external assets) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center sm:pt-36">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-violet-300" />
          <span className="text-slate-200">Your AI co-pilot for career growth</span>
        </div>

        <h1 className="text-balance bg-gradient-to-br from-white via-violet-100 to-fuchsia-100 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Build your resume, map your path, and upskill with AI
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
          An intelligent career assistant that crafts tailored resumes, recommends high-impact courses, and suggests the next best steps based on your goals.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/20 transition hover:from-violet-500 hover:to-fuchsia-500"
          >
            <Rocket className="h-4 w-4" />
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            How it works
          </a>
        </div>

        <div className="pointer-events-none mt-14 grid w-full max-w-2xl grid-cols-2 gap-3 opacity-95 sm:max-w-3xl md:grid-cols-4">
          {[
            { label: 'Custom Resumes', stat: 'AI-tailored' },
            { label: 'Career Paths', stat: 'Data-driven' },
            { label: 'Courses', stat: 'Curated' },
            { label: 'Insights', stat: 'Actionable' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-left">
              <div className="text-xs text-slate-300">{item.label}</div>
              <div className="text-sm font-semibold text-white">{item.stat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
