import React from 'react';
import { 
  X, 
  Layers, 
  CheckCircle2, 
  Target, 
  Users, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Award,
  BarChart3,
  ExternalLink
} from 'lucide-react';
import { CTAButton } from './CTAButton';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestTutor: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, onRequestTutor }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">Portfolio UX/UI Case Study</span>
                <span className="bg-blue-900/60 text-blue-300 text-[10px] font-mono px-2 py-0.5 rounded-full border border-blue-700">EdTech CRO</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Luminar Learning: 1-on-1 Tuition Discovery Platform
              </h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          {/* Executive Summary Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6">
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-xs uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>Project Abstract</span>
            </div>
            <p className="text-slate-800 font-medium sm:text-lg mb-2">
              How do you transform a content-dense, text-heavy tutoring directory into a modern, conversion-driven discovery engine that builds instant parental trust?
            </p>
            <p className="text-slate-600 text-xs sm:text-sm">
              This conceptual design system and product experience replaces confusing text walls with a 3-step Quick Matcher, dual In-Home & Online modalities, transparent vetting signals, and zero-friction communication channels.
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div>
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-600" />
              <span>Problem Statement & Design Response</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-red-100 bg-red-50/50 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">Traditional Tutoring Sites (The Flaw)</span>
                <ul className="text-xs space-y-1.5 text-slate-600 list-disc list-inside">
                  <li>Unstructured text paragraphs forcing parents to read essays just to check syllabus coverage.</li>
                  <li>Generic 10-field contact forms that create anxiety and high bounce rates.</li>
                  <li>Vague claims like "best teachers" without verifiable vetting criteria.</li>
                  <li>Clunky mobile layouts failing on smaller smartphone screens.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Luminar Learning UX (The Solution)</span>
                <ul className="text-xs space-y-1.5 text-slate-700 list-disc list-inside">
                  <li><strong>3-Step Quick Matcher:</strong> Filter Mode, Level, and Subject directly in under 15 seconds.</li>
                  <li><strong>Contextual WhatsApp & 1-Tap Calling:</strong> Pre-filled inquiries reduce mobile friction.</li>
                  <li><strong>Engineered Trust Badges:</strong> Transparent 4-stage screening and free trial guarantees.</li>
                  <li><strong>Coordinator Management Flow:</strong> Built-in intake log to review, qualify, and dispatch leads.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* UX Architecture / User Personas */}
          <div>
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Target Personas & User Journeys</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs">
                <div className="font-bold text-slate-900 text-sm mb-1">Sarah M. (Exam-Year Parent)</div>
                <div className="text-blue-600 font-semibold mb-2">Needs: High School / O & A Level Chemistry Tutor</div>
                <p className="text-slate-600 mb-2">
                  Stressed about upcoming board exams. Needs syllabus-specific expertise and a free trial to evaluate teacher rapport before committing.
                </p>
                <div className="bg-slate-50 p-2 rounded text-slate-500 font-mono text-[11px]">
                  Journey: Hero Selector → Subject Card → Checks Vetting → Books Diagnostic Demo
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs">
                <div className="font-bold text-slate-900 text-sm mb-1">David K. (Busy Working Professional)</div>
                <div className="text-blue-600 font-semibold mb-2">Needs: Foundational Math & Reading for 8-Year-Old</div>
                <p className="text-slate-600 mb-2">
                  Browsing on his phone during commute. Wants immediate reassurance on safety, background checks, and preferred in-home scheduling.
                </p>
                <div className="bg-slate-50 p-2 rounded text-slate-500 font-mono text-[11px]">
                  Journey: Mobile Sticky Bar → 1-Tap WhatsApp → Coordinator shortlists local educator
                </div>
              </div>
            </div>
          </div>

          {/* Key Design System Highlights */}
          <div>
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Design System & Craft Principles</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="font-mono text-slate-900 font-bold mb-0.5">#0A192F</div>
                <div className="text-slate-500">Oxford Navy (Trust Anchor)</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                <div className="font-mono text-blue-700 font-bold mb-0.5">#2563EB</div>
                <div className="text-slate-500">Electric Cobalt (Active UI)</div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="font-mono text-emerald-700 font-bold mb-0.5">#059669</div>
                <div className="text-slate-500">Verified Mint (Safety & WA)</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="font-mono text-slate-900 font-bold mb-0.5">Plus Jakarta</div>
                <div className="text-slate-500">Geometric Sans Scale</div>
              </div>
            </div>
          </div>

          {/* Value Realization */}
          <div className="p-4 bg-blue-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-bold text-sm sm:text-base">Ready to review the interactive prototype?</div>
              <div className="text-blue-200 text-xs">Test the tutor request flow, category navigation, and coordinator manager live.</div>
            </div>
            <CTAButton 
              variant="secondary" 
              onClick={() => {
                onClose();
                onRequestTutor();
              }}
              className="whitespace-nowrap"
            >
              Test Tutor Request Flow
            </CTAButton>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">Luminar Learning • Conceptual UX/UI Case Study</span>
          <button 
            onClick={onClose}
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
