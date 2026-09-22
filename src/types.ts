export type AcademicLevel = 
  | 'primary'
  | 'middle'
  | 'gcse-olevel'
  | 'alevel-ib'
  | 'ap-senior'
  | 'university-prep'
  | 'languages-skills';

export type TuitionMode = 'home' | 'online' | 'both';

export type TutorGenderPreference = 'any' | 'female' | 'male';

export type InquiryStatus = 'new' | 'contacted' | 'qualified' | 'closed';

export interface TutorCategory {
  id: string;
  slug: string;
  name: string;
  shortTag: string;
  subtitle: string;
  description: string;
  popularSubjects: string[];
  keyHighlights: string[];
  suitableFor: string;
  availableModes: TuitionMode;
  hourlyGuidance?: string;
}

export interface SubjectItem {
  id: string;
  slug: string;
  name: string;
  category: 'Sciences' | 'Mathematics' | 'Languages' | 'Commerce & Economics' | 'Technology' | 'Humanities' | 'Test Prep' | string;
  curricula: string[];
  description: string;
  keyTopics: string[];
  learningOutcomes?: string[];
  tutorAvailability: 'High' | 'Immediate' | 'Regular';
}

export interface LocationZone {
  id: string;
  slug: string;
  name: string;
  region: string;
  districts: string[];
  coverageHighlights: string;
  averageMatchingTime: string;
  homeTutorReadiness: string;
}

export interface TutorProfile {
  id: string;
  name: string;
  title: string;
  qualification: string;
  institution: string;
  experienceYears: number;
  gender: 'Male' | 'Female';
  specializations: string[];
  locationsCovered: string[];
  teachingModes: ('In-Home Tuition' | 'Live Online Tuition')[];
  curricula: string[];
  verified: boolean;
  bio?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Tutors & Vetting' | 'Curricula & Modes' | 'Scheduling & Fees' | 'Safety & Quality' | string;
}

export interface TutorRequest {
  id: string;
  createdAt: string;
  parentOrStudentName: string;
  phone: string;
  whatsapp: string;
  classGrade: string;
  subject: string;
  locationArea: string;
  preferredTiming: string;
  mode: 'In-Home Tuition' | 'Live Online Tuition' | 'Hybrid (Both)';
  tutorGenderPreference: 'Female Tutor' | 'Male Tutor' | 'No Preference';
  additionalRequirements?: string;
  status: InquiryStatus;
}
