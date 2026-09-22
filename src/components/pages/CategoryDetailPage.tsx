import React from 'react';
import { 
  ArrowLeft, 
  Check, 
  MapPin, 
  BookOpen, 
  ShieldCheck, 
  Clock, 
  MessageSquareText, 
  GraduationCap,
  Sparkles,
  Monitor,
  Home
} from 'lucide-react';
import { TUTOR_CATEGORIES, LOCATION_ZONES, BUSINESS_INFO } from '../../data/businessData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { CTAButton } from '../common/CTAButton';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { TutorRequestForm } from '../forms/TutorRequestForm';
import { TutorRequest } from '../../types';

interface CategoryDetailPageProps {
  slug: string;
  type: 'category' | 'area';
  onBack: () => void;
  onRequestTutor: () => void;
  onFormSubmitted: (req: TutorRequest) => void;
  onNavigateHome: () => void;
}

export const CategoryDetailPage: React.FC<CategoryDetailPageProps> = ({
  slug,
  type,
  onBack,
  onRequestTutor,
  onFormSubmitted,
  onNavigateHome
}) => {
  if (type === 'category') {
    const category = TUTOR_CATEGORIES.find(c => c.slug === slug) || TUTOR_CATEGORIES[0];

    return (
      <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'Home', onClick: onNavigateHome },
              { label: 'Academic Curricula', onClick: onBack },
              { label: category.name, active: true }
            ]}
            className="mb-4"
          />

          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Curricula Directory</span>
          </button>

          {/* Hero Banner for this Category */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{category.shortTag} • Specialized Curriculum Track</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {category.name} Tuition
            </h1>

            <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
              {category.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <CTAButton
                onClick={onRequestTutor}
                size="md"
                className="shadow-sm font-semibold"
              >
                Request 1-on-1 Mentor for {category.shortTag}
              </CTAButton>
              <WhatsAppButton
                size="md"
                customText="Chat with Syllabus Advisor"
                prefilledMessage={`Hello Luminar Learning, I would like to inquire about 1-on-1 tutoring for ${category.name}.`}
              />
            </div>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Left Col: Details & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Curriculum Focus & Teaching Strategy
                </h2>
                <div className="space-y-3">
                  {category.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-slate-700">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Core Subjects Available for {category.shortTag}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {category.popularSubjects.map((sub, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50/70 rounded-2xl p-6 border border-blue-100 space-y-3 text-slate-700">
                <h3 className="font-bold text-blue-900 text-base flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  Recommended Cadence: {category.hourlyGuidance || '3–4 Hours / Week per Subject'}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  Every enrollment commences with an obligation-free diagnostic session to audit foundational knowledge, identify learning gaps, and structure an individualized syllabus benchmark schedule.
                </p>
              </div>

            </div>

            {/* Right Col: Instant Placement Request Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg sticky top-24">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    Match with a {category.shortTag} Mentor
                  </h3>
                  <p className="text-xs text-slate-500">
                    Free diagnostic trial session included
                  </p>
                </div>

                <TutorRequestForm
                  onFormSubmitted={onFormSubmitted}
                  initialClass={category.name}
                  compact={true}
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // Else: Area Detail
  const zone = LOCATION_ZONES.find(a => a.slug === slug) || LOCATION_ZONES[0];

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: onNavigateHome },
            { label: 'Service Districts', onClick: onBack },
            { label: zone.name, active: true }
          ]}
          className="mb-4"
        />

        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Service Districts</span>
        </button>

        {/* Hero Banner for this Zone */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{zone.region} • {zone.homeTutorReadiness}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tutoring Coverage in {zone.name}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
            {zone.coverageHighlights}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <CTAButton
              onClick={onRequestTutor}
              size="md"
              className="shadow-sm font-semibold"
            >
              Find a Tutor in {zone.name}
            </CTAButton>
            <WhatsAppButton
              size="md"
              customText="WhatsApp Zone Advisor"
              prefilledMessage={`Hello Luminar Learning, I am looking for a qualified tutor in ${zone.name}.`}
            />
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                Districts & Key Residential Neighborhoods
              </h2>
              <div className="flex flex-wrap gap-2">
                {zone.districts.map((sec, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
                    {sec}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                Placement Logistics & Dispatch
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block mb-1 font-medium">Average Matching Speed:</span>
                  <span className="font-bold text-slate-900 text-sm">{zone.averageMatchingTime}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block mb-1 font-medium">Tutor Readiness:</span>
                  <span className="font-bold text-emerald-700 text-sm">{zone.homeTutorReadiness}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg sticky top-24">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Request Tutor in {zone.name}
                </h3>
                <p className="text-xs text-slate-500">
                  Free diagnostic demo class included
                </p>
              </div>

              <TutorRequestForm
                onFormSubmitted={onFormSubmitted}
                initialArea={zone.name}
                compact={true}
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
