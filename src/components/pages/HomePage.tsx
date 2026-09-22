import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  BookOpen, 
  Search, 
  ShieldCheck, 
  Sparkles,
  Users,
  Home,
  Monitor,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { Hero } from '../home/Hero';
import { TrustPoints } from '../home/TrustPoints';
import { HowItWorks } from '../home/HowItWorks';
import { CategoryCard } from '../home/CategoryCard';
import { SubjectCard } from '../home/SubjectCard';
import { AreaCard } from '../home/AreaCard';
import { WhyChooseUs } from '../home/WhyChooseUs';
import { FAQAccordion } from '../home/FAQAccordion';
import { FinalCTA } from '../home/FinalCTA';
import { TutorRequestForm } from '../forms/TutorRequestForm';
import { 
  TUTOR_CATEGORIES, 
  SUBJECTS_DATA, 
  LOCATION_ZONES, 
  TUTOR_PROFILES,
  BUSINESS_INFO 
} from '../../data/businessData';
import { TutorRequest } from '../../types';

interface HomePageProps {
  onRequestTutor: () => void;
  onSelectCategory: (categorySlug: string) => void;
  onSelectSubject: (subjectSlug: string) => void;
  onSelectArea: (areaSlug: string) => void;
  onNavigate: (navId: string) => void;
  onFormSubmitted: (req: TutorRequest) => void;
  onOpenCaseStudy?: () => void;
  prefillClass?: string;
  prefillSubject?: string;
  prefillArea?: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onRequestTutor,
  onSelectCategory,
  onSelectSubject,
  onSelectArea,
  onNavigate,
  onFormSubmitted,
  onOpenCaseStudy,
  prefillClass = '',
  prefillSubject = '',
  prefillArea = ''
}) => {

  const handleQuickSearch = (cls: string, sub: string, area: string) => {
    const formElement = document.getElementById('tutor-request-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <Hero
        onRequestTutor={onRequestTutor}
        onQuickSearch={handleQuickSearch}
        onOpenCaseStudy={onOpenCaseStudy}
      />

      {/* 2. DUAL MODE SHOWCASE (In-Home vs. Online) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200" id="modes-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Flexible Pedagogical Delivery
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Two Tailored Modalities, One High Standard
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Whether your child thrives with focused, in-person domestic visits or flexible, interactive digital classrooms, Luminar Learning delivers curriculum specialists matched to their exact learning style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mode 1: In-Home Tuition */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-xs">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">In-Home Domestic Tutoring</h3>
                  <p className="text-xs font-semibold text-blue-700 mt-0.5">Scheduled weekly in-person visits</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A certified academic mentor visits your home on scheduled days. Ideal for younger learners requiring tactile pacing, students needing structured study discipline, and families who prefer face-to-face accountability.
                </p>
                <ul className="text-xs text-slate-700 space-y-2 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Comfort of familiar, distraction-free home study environment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Background-vetted, identity-verified local educators</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Tactile handwriting, problem set marking, and direct feedback</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Service across major districts</span>
                <button
                  type="button"
                  onClick={onRequestTutor}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-xs"
                >
                  Request In-Home Tutor →
                </button>
              </div>
            </div>

            {/* Mode 2: Live Online Classrooms */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Live Interactive Online Tuition</h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">High-definition digital classrooms worldwide</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Connect 1-on-1 with senior curriculum specialists globally. Utilizing collaborative digital whiteboards, real-time tablet stylus annotations, and recorded revision archives for maximum flexibility.
                </p>
                <ul className="text-xs text-slate-700 space-y-2 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Access top-tier international examiners and STEM faculty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Interactive screen-sharing, graphing utilities, and whiteboard notes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Recorded lesson playback for independent pre-exam review</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Immediate worldwide availability</span>
                <button
                  type="button"
                  onClick={onRequestTutor}
                  className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  Request Online Tutor →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST & REASSURANCE SECTION */}
      <TrustPoints />

      {/* 4. HOW IT WORKS */}
      <HowItWorks onRequestTutor={onRequestTutor} />

      {/* 5. ACADEMIC LEVELS & CURRICULA */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200" id="categories-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
                Syllabi & Levels
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Tuition by Academic Milestone
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Dedicated subject coaches tailored to international curricula, national boards, and competitive entry examinations.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('classes')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors self-start md:self-end"
            >
              <span>View All Levels & Exam Boards</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TUTOR_CATEGORIES.slice(0, 6).map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onSelect={onSelectCategory}
                onRequestForCategory={(catName) => {
                  onRequestTutor();
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUBJECT DISCOVERY */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="subjects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
                Subject Specialists
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                1-on-1 Tuition by Subject
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Target challenging topics with verified educators who specialize in step-by-step conceptual mastery and mark-scheme precision.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('subjects')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors self-start md:self-end"
            >
              <span>Explore All Subjects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUBJECTS_DATA.slice(0, 6).map((sub) => (
              <SubjectCard
                key={sub.id}
                subject={sub}
                onRequestSubject={(subjectName) => {
                  onRequestTutor();
                }}
                onViewSubject={onSelectSubject}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <WhyChooseUs onRequestTutor={onRequestTutor} />

      {/* 8. SERVICE DISTRICTS & COVERAGE */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="areas-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
                Geographic Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                In-Home Service Districts & Digital Classrooms
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Our educator network covers prime residential sectors for punctual in-home domestic visits alongside global digital coverage.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('areas')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors self-start md:self-end"
            >
              <span>View All Service Zones</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATION_ZONES.slice(0, 6).map((zone) => (
              <AreaCard
                key={zone.id}
                area={{
                  id: zone.id,
                  slug: zone.slug,
                  name: zone.name,
                  zone: zone.region as any,
                  sectors: zone.districts,
                  coverageHighlights: zone.coverageHighlights,
                  prominentNearby: zone.averageMatchingTime,
                  homeTutorReadiness: zone.homeTutorReadiness
                }}
                onRequestArea={(areaName) => {
                  onRequestTutor();
                }}
                onSelectArea={onSelectArea}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 9. SAMPLE VETTED FACULTY HIGHLIGHTS */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200" id="tutors-sample-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
                Verified Faculty
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Representative Academic Mentors
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Examples of educators in our network. Each tutor undergoes background verification, credential audits, and practical teaching auditions.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('tutors')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors self-start md:self-end"
            >
              <span>Browse All Tutor Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TUTOR_PROFILES.map((tutor) => (
              <div 
                key={tutor.id}
                className="bg-slate-50/70 rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {tutor.gender} Mentor
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {tutor.name}
                  </h3>
                  <p className="text-xs text-blue-700 font-semibold mt-0.5">
                    {tutor.title}
                  </p>

                  <div className="mt-3 space-y-1 text-xs text-slate-600">
                    <p className="text-slate-500 font-medium">{tutor.institution}</p>
                    <p><strong>Experience:</strong> {tutor.experienceYears} Years</p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-200/70">
                    <span className="text-[10px] font-semibold text-slate-500 block mb-1">
                      Key Curricula:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {tutor.curricula.map((curr, i) => (
                        <span key={i} className="text-[10px] bg-white border border-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                          {curr}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-600 font-semibold">Free Demo</span>
                  <button
                    type="button"
                    onClick={onRequestTutor}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    Match Tutor
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. TUTOR REQUEST INTAKE FORM SECTION */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white" id="tutor-request-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-900/60 px-3 py-1 rounded-full border border-blue-700">
              Personalized Matching
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Request Your 1-on-1 Tutor & Free Diagnostic Class
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Tell us your learning requirements. Our Senior Academic Coordinators will assess curriculum fit and pair you with a top 3% vetted mentor.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-800">
            <TutorRequestForm
              onFormSubmitted={onFormSubmitted}
              initialClass={prefillClass}
              initialSubject={prefillSubject}
              initialArea={prefillArea}
            />
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <FAQAccordion />

      {/* 12. FINAL CTA */}
      <FinalCTA onRequestTutor={onRequestTutor} />

    </div>
  );
};
