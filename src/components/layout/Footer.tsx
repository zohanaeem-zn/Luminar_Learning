import React from 'react';
import { 
  Phone, 
  MessageSquareText, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck,
  Sparkles,
  FileText
} from 'lucide-react';
import { BUSINESS_INFO, TUTOR_CATEGORIES, SUBJECTS_DATA, LOCATION_ZONES } from '../../data/businessData';

interface FooterProps {
  onNavigate: (navId: string) => void;
  onSelectCategory?: (slug: string) => void;
  onSelectArea?: (slug: string) => void;
  onSelectSubject?: (slug: string) => void;
  onRequestTutor: () => void;
  onOpenCaseStudy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectCategory,
  onSelectArea,
  onSelectSubject,
  onRequestTutor,
  onOpenCaseStudy
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top summary row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold shadow-md">
                <span>L</span>
              </div>
              <div>
                <span className="font-extrabold text-white text-xl tracking-tight block">
                  Luminar Learning
                </span>
                <span className="text-xs text-blue-400 font-medium">
                  In-Home & Live Online Tuition Platform
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Connecting families with verified, curriculum-matched academic mentors for Primary, GCSE, Cambridge O/A Levels, IB Diploma, AP, and University Test Prep.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Background & Credential Verified Faculty</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Free Diagnostic Demo Session with Every Placement</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white font-medium">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Academic Levels */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Academic Levels
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {TUTOR_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectCategory) onSelectCategory(cat.slug);
                      else onNavigate('classes');
                    }}
                    className="hover:text-white transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('classes')}
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  View All Levels →
                </button>
              </li>
            </ul>
          </div>

          {/* Key Subjects */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Core Subjects
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SUBJECTS_DATA.slice(0, 6).map((sub) => (
                <li key={sub.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate('subjects')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {sub.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('subjects')}
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Explore Subjects Directory →
                </button>
              </li>
            </ul>
          </div>

          {/* Service Zones & Trust */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Tuition Service
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('tutors')}
                  className="hover:text-white transition-colors text-left"
                >
                  In-Home Tuition Model
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('tutors')}
                  className="hover:text-white transition-colors text-left"
                >
                  Live Interactive Online Classrooms
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('areas')}
                  className="hover:text-white transition-colors text-left"
                >
                  Metropolitan In-Home Service Districts
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  Teacher Vetting & Safety Standard
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              {onOpenCaseStudy && (
                <li className="pt-1">
                  <button
                    type="button"
                    onClick={onOpenCaseStudy}
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Portfolio UX/UI Case Study</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Luminar Learning Platform. A generalized portfolio UX/UI product case study.</p>
          <div className="flex items-center gap-6">
            <button type="button" onClick={() => onNavigate('about')} className="hover:text-slate-400">About</button>
            <button type="button" onClick={() => onNavigate('faq')} className="hover:text-slate-400">Help & FAQs</button>
            <button type="button" onClick={onRequestTutor} className="text-blue-400 hover:text-blue-300 font-semibold">Request a Tutor</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
