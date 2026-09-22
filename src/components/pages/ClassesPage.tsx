import React, { useState } from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  Check, 
  Filter, 
  Sparkles, 
  MessageSquareText, 
  GraduationCap,
  ShieldCheck
} from 'lucide-react';
import { TUTOR_CATEGORIES, BUSINESS_INFO } from '../../data/businessData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { CTAButton } from '../common/CTAButton';

interface ClassesPageProps {
  onSelectCategory: (categorySlug: string) => void;
  onRequestForClass: (className: string) => void;
  onNavigateHome: () => void;
}

export const ClassesPage: React.FC<ClassesPageProps> = ({
  onSelectCategory,
  onRequestForClass,
  onNavigateHome
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'International (GCSE / IB / AP)' | 'Secondary & Senior High' | 'Primary & Foundation' | 'University & Admissions'>('All');

  const filteredCategories = TUTOR_CATEGORIES.filter((cat) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'International (GCSE / IB / AP)') {
      return cat.id === 'gcse-igcse' || cat.id === 'ib-diploma' || cat.id === 'a-level' || cat.id === 'ap-program';
    }
    if (activeFilter === 'Secondary & Senior High') {
      return cat.id === 'secondary-high' || cat.id === 'a-level' || cat.id === 'gcse-igcse';
    }
    if (activeFilter === 'Primary & Foundation') {
      return cat.id === 'primary-foundation';
    }
    if (activeFilter === 'University & Admissions') {
      return cat.id === 'test-prep-admissions' || cat.id === 'university-undergrad';
    }
    return true;
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: onNavigateHome },
            { label: 'Academic Levels & Curricula', active: true }
          ]}
          className="mb-4"
        />

        {/* Page Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Comprehensive Pedagogical Coverage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tuition by Academic Level & Curriculum
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
            From early foundational literacy and numeracy to rigorous Cambridge CAIE, International Baccalaureate (IB), Advanced Placement (AP), and university admission test preparation, Luminar Learning pairs learners with syllabus-certified educators.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Curriculum Group:
            </span>
            {(['All', 'International (GCSE / IB / AP)', 'Secondary & Senior High', 'Primary & Foundation', 'University & Admissions'] as const).map((filterOpt) => (
              <button
                key={filterOpt}
                type="button"
                onClick={() => setActiveFilter(filterOpt)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === filterOpt
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filterOpt}
              </button>
            ))}
          </div>
        </div>

        {/* Classes List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {cat.shortTag}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    In-Home & Live Online
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {cat.name}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {cat.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 block mb-2">
                    Core Subjects Tutored:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.popularSubjects.map((sub, i) => (
                      <span key={i} className="text-xs bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                  <span className="font-semibold text-slate-700 block">Highlights:</span>
                  {cat.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-600">
                  <span className="font-medium text-slate-700">Recommended Cadence:</span> {cat.hourlyGuidance || '3–4 Hours / Week'}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onSelectCategory(cat.slug)}
                  className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                >
                  <span>Detailed Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onRequestForClass(cat.name)}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  Request Tutor
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Need a Specialized Curriculum or Custom Syllabus?</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Our academic directors can curate tailored revision programs for international school curricula, homeschoolers, and competitive tests.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onRequestForClass('')}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 shadow-md whitespace-nowrap"
          >
            Request Custom Placement
          </button>
        </div>

      </div>
    </div>
  );
};
