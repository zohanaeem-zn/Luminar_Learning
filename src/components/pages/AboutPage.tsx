import React from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Users, 
  Target, 
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Home,
  Monitor
} from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { CTAButton } from '../common/CTAButton';
import { WhatsAppButton } from '../common/WhatsAppButton';

interface AboutPageProps {
  onRequestTutor: () => void;
  onNavigateHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRequestTutor, onNavigateHome }) => {
  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: onNavigateHome },
            { label: 'About Luminar Learning', active: true }
          ]}
          className="mb-4"
        />

        {/* Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Curriculum-Centric 1-on-1 Academic Platform</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Luminar Learning
          </h1>

          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Luminar Learning was built to bridge the critical gap between crowded classroom paces and individual student mastery. We pair learners with vetted, curriculum-specialized educators for dedicated in-home domestic visits and interactive digital classrooms worldwide.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <CTAButton
              onClick={onRequestTutor}
              size="md"
              className="shadow-sm font-semibold"
            >
              Request a 1-on-1 Tutor
            </CTAButton>
            <WhatsAppButton
              size="md"
              customText="Speak with an Advisor"
              prefilledMessage="Hello Luminar Learning, I would like to learn more about your tutoring placement process and diagnostic demo sessions."
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Our Academic Mission</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To empower every student with conceptual confidence, disciplined inquiry, and exam-board mastery through personalized mentorship that honors each student’s unique pace of comprehension.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">The Student-First Promise</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We never impose upfront binding lock-ins. Every relationship begins with an obligation-free diagnostic demonstration session to confirm rapport and communication alignment before families confirm an ongoing cadence.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Vetting */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <span>Our 4-Stage Faculty Selection Rigor (Top 3% Accepted)</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                <span>Identity & Security Screening</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                National ID checks, residency confirmation, and official criminal background clearance for student safety and family peace of mind.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                <span>Academic Transcript Audits</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct verification of degree certificates, subject honors, and institutional transcripts from accredited colleges and universities.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                <span>Syllabus & Past-Paper Auditions</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Candidates present live sample lectures to evaluate pedagogical articulation, mark-scheme familiarity, and patience.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">4</span>
                <span>Continuous Parent Feedback Audits</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Regular check-ins after the 2nd and 4th weeks ensure consistent attendance, homework reviews, and steady academic improvement.
              </p>
            </div>
          </div>
        </div>

        {/* Contact info bar */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">Have Specific Questions or Curriculum Inquiries?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with an Academic Placement Coordinator today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-4 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
            >
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={onRequestTutor}
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 shadow-md transition-colors"
            >
              Book Free Demo
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
