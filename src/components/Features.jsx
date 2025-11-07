import React from 'react';
import { FileText, GraduationCap, Map, Brain } from 'lucide-react';

const features = [
  {
    title: 'Custom Resume Builder',
    description:
      'Generate tailored resumes for each role using skill extraction, impact phrasing, and ATS-friendly formatting.',
    icon: FileText,
  },
  {
    title: 'Career Path Suggestions',
    description:
      'Discover data-backed role progressions and the skills gap to close for your target job.',
    icon: Map,
  },
  {
    title: 'Course Recommendations',
    description:
      'Get curated learning plans from top platforms aligned with your goals and current experience.',
    icon: GraduationCap,
  },
  {
    title: 'Interview & Skill Insights',
    description:
      'Practice interview questions and receive skill insights tailored to your resume and target roles.',
    icon: Brain,
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Everything you need to level up</h2>
          <p className="mt-3 text-slate-300">
            A focused toolkit designed to help you present your best self and plan your next step with clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 shadow-xl transition hover:from-white/20 hover:to-white/[0.06]"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
