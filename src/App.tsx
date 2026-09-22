import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { HomeTutorsPage } from './components/pages/HomeTutorsPage';
import { ClassesPage } from './components/pages/ClassesPage';
import { SubjectsPage } from './components/pages/SubjectsPage';
import { AreasPage } from './components/pages/AreasPage';
import { AboutPage } from './components/pages/AboutPage';
import { FAQPage } from './components/pages/FAQPage';
import { ContactPage } from './components/pages/ContactPage';
import { CategoryDetailPage } from './components/pages/CategoryDetailPage';
import { TutorRequestModal } from './components/forms/TutorRequestModal';
import { InquiryManagerModal } from './components/forms/InquiryManagerModal';
import { CaseStudyModal } from './components/common/CaseStudyModal';
import { TutorRequest, TutorProfile, InquiryStatus } from './types';
import { TUTOR_CATEGORIES, LOCATION_ZONES } from './data/businessData';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [activeNav, setActiveNav] = useState<string>('home');
  const [detailSlug, setDetailSlug] = useState<string>('');
  const [detailType, setDetailType] = useState<'category' | 'area'>('category');
  const [isRequestModalOpen, setIsRequestModalOpen] = useState<boolean>(false);
  const [isInquiryManagerOpen, setIsInquiryManagerOpen] = useState<boolean>(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState<boolean>(false);

  // Form prefill values
  const [prefillClass, setPrefillClass] = useState<string>('');
  const [prefillSubject, setPrefillSubject] = useState<string>('');
  const [prefillArea, setPrefillArea] = useState<string>('');

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Inquiries local storage
  const [inquiries, setInquiries] = useState<TutorRequest[]>(() => {
    try {
      const saved = localStorage.getItem('luminar_inquiries');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item: any, idx: number) => ({
            id: item.id || `LUM-${1000 + idx}`,
            createdAt: item.createdAt || new Date().toISOString(),
            parentOrStudentName: item.parentOrStudentName || item.parentName || 'Eleanor Vance',
            phone: item.phone || '+1 (555) 019-2834',
            whatsapp: item.whatsapp || item.phone || '+1 (555) 019-2834',
            classGrade: item.classGrade || 'GCSE / IGCSE (Cambridge & Edexcel)',
            subject: item.subject || 'Physics & Mathematics',
            locationArea: item.locationArea || item.areaInLahore || 'Central Metropolitan Core',
            preferredTiming: item.preferredTiming || 'Evening (5:00 PM - 7:00 PM)',
            mode: item.mode || 'In-Home Tuition',
            tutorGenderPreference: item.tutorGenderPreference || 'No Preference',
            additionalRequirements: item.additionalRequirements || '',
            status: (['new', 'contacted', 'qualified', 'closed'].includes(item.status) ? item.status : 'new') as InquiryStatus
          }));
        }
      }
    } catch (e) {
      console.error(e);
    }
    // Default seed inquiries
    return [
      {
        id: 'LUM-1042',
        parentOrStudentName: 'Dr. Marcus Holloway',
        phone: '+1 (555) 392-1049',
        whatsapp: '+1 (555) 392-1049',
        classGrade: 'Cambridge International A-Level (CAIE)',
        subject: 'Pure Mathematics & Mechanics',
        locationArea: 'North Parklands & Academic Belt',
        preferredTiming: 'Afternoon / Evening (4:00 PM - 6:30 PM)',
        mode: 'In-Home Tuition',
        tutorGenderPreference: 'No Preference',
        additionalRequirements: 'Focus on CAIE Paper 3 and past-paper mechanics problem sets.',
        status: 'qualified',
        createdAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'LUM-1043',
        parentOrStudentName: 'Sophia Sterling',
        phone: '+44 20 7946 0912',
        whatsapp: '+44 20 7946 0912',
        classGrade: 'IB Diploma Programme (HL & SL)',
        subject: 'IB Chemistry HL',
        locationArea: 'Live Interactive Online Classrooms (Worldwide)',
        preferredTiming: 'Flexible Weekday Slots',
        mode: 'Live Online Tuition',
        tutorGenderPreference: 'Female Tutor',
        additionalRequirements: 'Preparation for Internal Assessment (IA) and upcoming mock exams.',
        status: 'new',
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString()
      }
    ];
  });

  // Sync inquiries to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('luminar_inquiries', JSON.stringify(inquiries));
    } catch (e) {
      console.error(e);
    }
  }, [inquiries]);

  // URL Hash routing listener for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash || hash === 'home') {
        setActiveNav('home');
      } else if (['tutors', 'classes', 'subjects', 'areas', 'about', 'faq', 'contact'].includes(hash)) {
        setActiveNav(hash);
      } else if (hash.startsWith('category-')) {
        const cleanSlug = hash.replace('category-', '');
        const matched = TUTOR_CATEGORIES.find(c => c.slug === cleanSlug);
        if (matched) {
          setDetailSlug(matched.slug);
          setDetailType('category');
          setActiveNav('detail');
        }
      } else if (hash.startsWith('zone-') || hash.startsWith('area-')) {
        const cleanSlug = hash.replace('zone-', '').replace('area-', '');
        const matched = LOCATION_ZONES.find(a => a.slug === cleanSlug);
        if (matched) {
          setDetailSlug(matched.slug);
          setDetailType('area');
          setActiveNav('detail');
        }
      } else if (hash === 'case-study') {
        setIsCaseStudyOpen(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (navId: string) => {
    setActiveNav(navId);
    try {
      window.location.hash = navId;
    } catch (_) {}
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (_) {}
  };

  const handleSelectCategory = (categorySlug: string) => {
    setDetailSlug(categorySlug);
    setDetailType('category');
    setActiveNav('detail');
    try {
      window.location.hash = `category-${categorySlug}`;
    } catch (_) {}
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (_) {}
  };

  const handleSelectArea = (areaSlug: string) => {
    setDetailSlug(areaSlug);
    setDetailType('area');
    setActiveNav('detail');
    try {
      window.location.hash = `zone-${areaSlug}`;
    } catch (_) {}
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (_) {}
  };

  const handleOpenRequestModal = (c: string = '', s: string = '', a: string = '') => {
    setPrefillClass(c);
    setPrefillSubject(s);
    setPrefillArea(a);
    setIsRequestModalOpen(true);
  };

  const handleRequestTutorWithProfile = (tutor: TutorProfile) => {
    setPrefillClass(tutor.curricula[0] || '');
    setPrefillSubject(tutor.specializations[0] || '');
    setPrefillArea(tutor.locationsCovered[0] || '');
    setIsRequestModalOpen(true);
  };

  const handleFormSubmitted = (newRequest: TutorRequest) => {
    setInquiries(prev => [newRequest, ...prev]);
    setToastMessage(`Tutor Request #${newRequest.id} registered! Diagnostic demo initiated.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  const handleUpdateInquiryStatus = (id: string, newStatus: InquiryStatus) => {
    setInquiries(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
  };

  const handleDeleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Global Toast Alert */}
      {toastMessage && (
        <div 
          role="alert" 
          aria-live="polite" 
          className="fixed top-4 right-4 z-50 max-w-md bg-slate-900 text-white p-4 rounded-xl shadow-2xl border border-slate-700 flex items-center justify-between gap-3 animate-fade-in"
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <p className="text-xs sm:text-sm font-medium">{toastMessage}</p>
          </div>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main App Header */}
      <Header
        activeNav={activeNav}
        onNavigate={navigateTo}
        onRequestTutor={() => handleOpenRequestModal()}
        inquiryCount={inquiries.length}
        onOpenInquiries={() => setIsInquiryManagerOpen(true)}
        onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1" id="main-content">
        {activeNav === 'home' && (
          <HomePage
            onRequestTutor={() => handleOpenRequestModal()}
            onSelectCategory={handleSelectCategory}
            onSelectSubject={(subjectSlug) => {
              handleOpenRequestModal('', subjectSlug);
            }}
            onSelectArea={handleSelectArea}
            onNavigate={navigateTo}
            onFormSubmitted={handleFormSubmitted}
            onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
            prefillClass={prefillClass}
            prefillSubject={prefillSubject}
            prefillArea={prefillArea}
          />
        )}

        {activeNav === 'tutors' && (
          <HomeTutorsPage
            onRequestTutorWithProfile={handleRequestTutorWithProfile}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {activeNav === 'classes' && (
          <ClassesPage
            onSelectCategory={handleSelectCategory}
            onRequestForClass={(className) => handleOpenRequestModal(className)}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {activeNav === 'subjects' && (
          <SubjectsPage
            onRequestSubject={(subjectName) => handleOpenRequestModal('', subjectName)}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {activeNav === 'areas' && (
          <AreasPage
            onRequestArea={(areaName) => handleOpenRequestModal('', '', areaName)}
            onSelectAreaDetail={handleSelectArea}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {activeNav === 'about' && (
          <AboutPage
            onRequestTutor={() => handleOpenRequestModal()}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {activeNav === 'faq' && (
          <FAQPage
            onRequestTutor={() => handleOpenRequestModal()}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {activeNav === 'contact' && (
          <ContactPage
            onFormSubmitted={handleFormSubmitted}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {activeNav === 'detail' && (
          <CategoryDetailPage
            slug={detailSlug}
            type={detailType}
            onBack={() => {
              if (detailType === 'category') navigateTo('classes');
              else navigateTo('areas');
            }}
            onRequestTutor={() => handleOpenRequestModal()}
            onFormSubmitted={handleFormSubmitted}
            onNavigateHome={() => navigateTo('home')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onSelectCategory={handleSelectCategory}
        onSelectArea={handleSelectArea}
        onRequestTutor={() => handleOpenRequestModal()}
        onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onRequestTutor={() => handleOpenRequestModal()} />

      {/* Tutor Request Modal */}
      <TutorRequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        onFormSubmitted={handleFormSubmitted}
        initialClass={prefillClass}
        initialSubject={prefillSubject}
        initialArea={prefillArea}
      />

      {/* Inquiry Management Modal */}
      <InquiryManagerModal
        isOpen={isInquiryManagerOpen}
        onClose={() => setIsInquiryManagerOpen(false)}
        inquiries={inquiries}
        onUpdateStatus={handleUpdateInquiryStatus}
        onDeleteInquiry={handleDeleteInquiry}
      />

      {/* UX/UI Case Study Modal */}
      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        onRequestTutor={() => handleOpenRequestModal()}
      />

    </div>
  );
}
