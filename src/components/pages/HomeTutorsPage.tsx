import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  MapPin, 
  BookOpen, 
  Clock, 
  GraduationCap, 
  Filter, 
  ArrowRight,
  MessageSquareText,
  CheckCircle2,
  Sparkles,
  Home,
  Monitor
} from 'lucide-react';
import { TUTOR_PROFILES, BUSINESS_INFO, LOCATION_ZONES } from '../../data/businessData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { TutorProfile } from '../../types';

interface HomeTutorsPageProps {
  onRequestTutorWithProfile: (tutor: TutorProfile) => void;
  onNavigateHome: () => void;
}

export const HomeTutorsPage: React.FC<HomeTutorsPageProps> = ({
  onRequestTutorWithProfile,
  onNavigateHome
}) => {
  const [genderFilter, setGenderFilter] = useState<'All' | 'Male' | 'Female'>('All');
  const [curriculumFilter, setCurriculumFilter] = useState<string>('All');

  const filteredTutors = TUTOR_PROFILES.filter((tut) => {
    const matchesGender = genderFilter === 'All' || tut.gender === genderFilter;
    const matchesCurr = curriculumFilter === 'All' || 
      tut.curricula.some(c => c.toLowerCase().includes(curriculumFilter.toLowerCase())) ||
      tut.specializations.some(s => s.toLowerCase().includes(curriculumFilter.toLowerCase()));
    return matchesGender && matchesCurr;
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: onNavigateHome },
            { label: 'Verified Academic Faculty', active: true }
          ]}
          className="mb-4"
        />

        {/* Page Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Top 3% Vetted Faculty</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Curriculum-Matched 1-on-1 Academic Mentors
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
            Every tutor represented by Luminar Learning undergoes strict identity authentication, credential verification, and pedagogical mock sessions. Explore verified profiles below or let our coordinators match your exact criteria.
          </p>

          {/* Vetting Checklist */}
          <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Identity & Criminal Record Background Checks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>University Degrees & Transcript Audits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Observed Live Diagnostic Teaching Auditions</span>
            </div>
          </div>

          {/* Filter Toolbar */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            
            {/* Gender Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Mentor:
              </span>
              {(['All', 'Female', 'Male'] as const).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGenderFilter(g)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    genderFilter === g
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {g === 'All' ? 'All Mentors' : `${g} Mentors`}
                </button>
              ))}
            </div>

            {/* Curriculum Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Curriculum:</span>
              <select
                aria-label="Filter tutors by curriculum"
                value={curriculumFilter}
                onChange={(e) => setCurriculumFilter(e.target.value)}
                className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Curricula</option>
                <option value="GCSE">GCSE / IGCSE</option>
                <option value="A-Level">A-Level (CAIE)</option>
                <option value="IB">IB Diploma (HL/SL)</option>
                <option value="AP">Advanced Placement (AP)</option>
                <option value="SAT">University Test Prep (SAT/ACT)</option>
              </select>
            </div>

          </div>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredTutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {tutor.gender} Mentor
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {tutor.name}
                </h2>
                <p className="text-xs text-blue-700 font-semibold mt-0.5">
                  {tutor.title}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {tutor.bio || `Specialist educator with ${tutor.experienceYears}+ years of teaching excellence across ${tutor.curricula.join(', ')} frameworks.`}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>Degree:</strong> {tutor.qualification} ({tutor.institution})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>Experience:</strong> {tutor.experienceYears} Years Academic Tutoring</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>Districts:</strong> {tutor.locationsCovered.join(', ')}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">
                    Curricula & Specialties:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {tutor.specializations.map((spec, i) => (
                      <span key={i} className="text-xs bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-xs text-emerald-600 font-semibold">Free Demo Class</span>
                <button
                  type="button"
                  onClick={() => onRequestTutorWithProfile(tutor)}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  Request This Mentor
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Can’t find the specific specialist you need?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              We maintain a broader roster of over 250+ certified educators across multiple STEM and Humanities disciplines.
            </p>
          </div>
          <button
            type="button"
            onClick={onNavigateHome}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 shadow-md whitespace-nowrap"
          >
            Custom Tutor Matching
          </button>
        </div>

      </div>
    </div>
  );
};
