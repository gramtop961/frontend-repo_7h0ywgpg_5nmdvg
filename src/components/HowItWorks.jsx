import React from 'react';
import { Steps } from 'lucide-react';

const steps = [
  {
    title: 'Tell us your goals',
    detail: 'Share your target role, experience, and interests.'
  },
  {
    title: 'Upload or paste your resume',
    detail: 'We analyze your skills, achievements, and gaps.'
  },
  {
    title: 'Get tailored outputs',
    detail: 'Receive a custom resume, a learning plan, and next-step guidance.'
  },
  {
    title: 'Iterate and track progress',
    detail: 'Refine results and monitor growth with measurable milestones.'
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600">
            <Steps className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
        </div>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <li key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm font-semibold">
                {idx + 1}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
