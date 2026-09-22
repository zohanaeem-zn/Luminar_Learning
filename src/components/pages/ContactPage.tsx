import React from 'react';
import { 
  Phone, 
  MessageSquareText, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Navigation,
  CheckCircle2,
  Globe,
  Home,
  Monitor
} from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { TutorRequestForm } from '../forms/TutorRequestForm';
import { TutorRequest } from '../../types';

interface ContactPageProps {
  onFormSubmitted: (req: TutorRequest) => void;
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onFormSubmitted, onNavigateHome }) => {
  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: onNavigateHome },
            { label: 'Contact Academic Advisors', active: true }
          ]}
          className="mb-4"
        />

        {/* Page Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Advisory & Placement Desk</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Luminar Learning Advisors
          </h1>

          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
            Our Senior Academic Placement Team is available 7 days a week to assess learning needs, discuss curriculum requirements, and coordinate in-home or online diagnostic demonstration sessions.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Action Card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 shadow-md space-y-5">
              <h2 className="text-lg font-bold">
                Direct Placement Hotlines
              </h2>
              
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Telephone Inquiries:</span>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`} 
                    className="text-lg font-bold text-white hover:text-blue-300 flex items-center gap-2 mt-1"
                  >
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>{BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block font-medium">WhatsApp Academic Coordinator:</span>
                  <a 
                    href={BUSINESS_INFO.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-1 px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20ba59] transition-colors"
                  >
                    <MessageSquareText className="w-4 h-4" />
                    <span>Chat on WhatsApp ({BUSINESS_INFO.phoneDisplay})</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block font-medium">Admissions & General Email:</span>
                  <a 
                    href={`mailto:${BUSINESS_INFO.email}`} 
                    className="text-slate-200 hover:text-white flex items-center gap-2 mt-1"
                  >
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>{BUSINESS_INFO.email}</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Coordination Office Hours: {BUSINESS_INFO.timings}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Interactive Online Tuition: Available Across All Global Timezones</span>
                </div>
              </div>
            </div>

            {/* In-Home vs Online Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3 text-xs text-slate-700">
              <h3 className="text-sm font-bold text-slate-900">
                Service Delivery Options
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Home className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Domestic In-Home Visits:</strong> Vetted educators visit your home within designated metropolitan service sectors.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Monitor className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Live Interactive Online:</strong> High-definition classrooms with stylus whiteboard notes, instant screen share, and session archives.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">
                  Submit Learning Inquiry & Free Demo Brief
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out student requirements. An academic coordinator will review your syllabus goals and recommend matching mentor profiles.
                </p>
              </div>

              <TutorRequestForm onFormSubmitted={onFormSubmitted} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
