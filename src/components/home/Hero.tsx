import React, { useState } from 'react';
import { 
  Check, 
  Search, 
  MapPin, 
  Sparkles,
  ArrowRight,
  Home,
  Monitor,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { BUSINESS_INFO, TUTOR_CATEGORIES, LOCATION_ZONES, SUBJECTS_DATA } from '../../data/businessData';
import { CTAButton } from '../common/CTAButton';
import { WhatsAppButton } from '../common/WhatsAppButton';

interface HeroProps {
  onRequestTutor: () => void;
  onQuickSearch: (selectedClass: string, selectedSubject: string, selectedArea: string) => void;
  onOpenCaseStudy?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestTutor, onQuickSearch, onOpenCaseStudy }) => {
  const [selectedMode, setSelectedMode] = useState<'In-Home Tuition' | 'Live Online Tuition'>('In-Home Tuition');
  const [quickLevel, setQuickLevel] = useState('');
  const [quickSubject, setQuickSubject] = useState('');
  const [quickZone, setQuickZone] = useState('');

  const handleQuickMatch = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickSearch(quickLevel, quickSubject, quickZone);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-slate-800">
      
      {/* Decorative ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-600/40 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-indigo-600/30 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Personalized 1-on-1 Tuition • In-Home & Live Online</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12]">
              Illuminating Potential Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 relative inline-block">
                Guided 1-on-1 Tuition
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Expert in-home visits and live interactive online classrooms for Primary, GCSE, Cambridge O/A Levels, IB, and University Entrance. Vetted top 3% educators, custom study plans, and an obligation-free diagnostic session.
            </p>

            {/* Mode Indicator Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200">
                <Home className="w-3.5 h-3.5 text-blue-400" />
                <span>In-Home Domestic Visits</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200">
                <Monitor className="w-3.5 h-3.5 text-emerald-400" />
                <span>Global Interactive Classrooms</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>100% Background Verified</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
              <CTAButton
                id="hero-primary-find-tutor"
                onClick={onRequestTutor}
                size="lg"
                className="w-full sm:w-auto shadow-lg shadow-blue-600/30 font-semibold"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Request a 1-on-1 Tutor
              </CTAButton>

              <WhatsAppButton
                id="hero-whatsapp-button"
                size="lg"
                className="w-full sm:w-auto shadow-sm font-semibold"
                customText="Advisor WhatsApp Chat"
                prefilledMessage="Hello Luminar Learning, I would like to inquire about matching with a qualified 1-on-1 tutor. Please guide me through available options."
              />

              {onOpenCaseStudy && (
                <button
                  type="button"
                  onClick={onOpenCaseStudy}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-sm font-medium transition-colors"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Case Study</span>
                </button>
              )}
            </div>

            {/* Trust points list */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-medium text-slate-300">Top 3% Vetted</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-medium text-slate-300">Free Diagnostic Demo</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-medium text-slate-300">Flexible Scheduling</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-medium text-slate-300">Zero Contract Lock-in</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Matcher Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-7 relative">
              
              {/* Card Header */}
              <div className="pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                      Interactive Tutor Matcher
                    </h3>
                    <p className="text-xs text-slate-500">
                      Specify learning requirements for immediate match assessment
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Search className="w-4 h-4" />
                  </div>
                </div>

                {/* Mode Selector Pill Switcher */}
                <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl mt-3 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setSelectedMode('In-Home Tuition')}
                    className={`py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                      selectedMode === 'In-Home Tuition'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Home className="w-3.5 h-3.5 text-blue-600" />
                    <span>In-Home Visit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMode('Live Online Tuition')}
                    className={`py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                      selectedMode === 'Live Online Tuition'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Live Online</span>
                  </button>
                </div>
              </div>

              <form onSubmit={handleQuickMatch} className="space-y-3.5">
                {/* 1. Academic Level */}
                <div>
                  <label htmlFor="quick-level" className="block text-xs font-semibold text-slate-700 mb-1">
                    1. Academic Level & Curriculum
                  </label>
                  <select
                    id="quick-level"
                    value={quickLevel}
                    onChange={(e) => setQuickLevel(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 text-slate-800"
                  >
                    <option value="">Select Curriculum / Level</option>
                    {TUTOR_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name} ({cat.shortTag})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Subject */}
                <div>
                  <label htmlFor="quick-subject" className="block text-xs font-semibold text-slate-700 mb-1">
                    2. Primary Subject
                  </label>
                  <select
                    id="quick-subject"
                    value={quickSubject}
                    onChange={(e) => setQuickSubject(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 text-slate-800"
                  >
                    <option value="">Select Core Subject</option>
                    {SUBJECTS_DATA.map((sub) => (
                      <option key={sub.id} value={sub.name}>
                        {sub.name} • {sub.category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Location / Service Zone */}
                <div>
                  <label htmlFor="quick-zone" className="block text-xs font-semibold text-slate-700 mb-1">
                    3. Location Zone or Online
                  </label>
                  <select
                    id="quick-zone"
                    value={quickZone}
                    onChange={(e) => setQuickZone(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 text-slate-800"
                  >
                    <option value="">Select Service District</option>
                    {LOCATION_ZONES.map((zone) => (
                      <option key={zone.id} value={zone.name}>
                        {zone.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit button */}
                <CTAButton
                  type="submit"
                  id="hero-quick-match-submit"
                  size="md"
                  fullWidth
                  className="mt-2 font-semibold shadow-md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Find Matching Mentors
                </CTAButton>
              </form>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free Diagnostic Demo</span>
                </span>
                <span>Response in under 24 hrs</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
