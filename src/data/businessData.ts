import { TutorCategory, SubjectItem, LocationZone, TutorProfile, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Luminar Learning',
  tagline: 'Illuminating Potential Through Guided 1-on-1 Tuition',
  shortDescription: 'Premium in-home and live online academic tutoring platform connecting students with vetted educators.',
  phone: '+1 (800) 586-4627',
  phoneDisplay: '+1 (800) LUMINAR',
  whatsappNumber: '18005864627',
  whatsappUrl: 'https://wa.me/18005864627?text=Hello%20Luminar%20Learning%2C%20I%20would%20like%20to%20inquire%20about%20a%201-on-1%20tutor.',
  email: 'advisors@luminarlearning.com',
  address: 'Global Academic Concierge & Local In-Home Tutoring Centers',
  coverageZones: 'Metropolitan In-Home Service Districts & Global Interactive Digital Classrooms',
  operatingHours: 'Academic Coordinators Available 7 Days a Week: 8:00 AM – 9:00 PM EST',
  timings: 'Monday – Sunday: 8:00 AM – 9:00 PM EST',
  satisfactionGuarantee: '100% Free First Diagnostic Demo & Tutor Chemistry Guarantee',
  vettingRate: 'Top 3% of Applicants Selected & Background Verified',
};

export const TUTOR_CATEGORIES: TutorCategory[] = [
  {
    id: 'gcse-igcse',
    slug: 'gcse-igcse-tutors',
    name: 'GCSE & Cambridge O Level',
    shortTag: 'Year 9–11 / O Levels',
    subtitle: 'CAIE, Edexcel & AQA syllabus specialists focusing on past-paper mastery and exam technique',
    description: 'Expert 1-on-1 tutoring for Cambridge Assessment International Education (CAIE), Pearson Edexcel, and AQA syllabi. Our mentors specialize in marking scheme familiarity, past paper breakdown, and foundational conceptual confidence.',
    popularSubjects: ['Mathematics (Higher & Core)', 'Physics', 'Chemistry', 'Biology', 'English Language & Lit', 'Economics', 'Computer Science'],
    keyHighlights: ['Marking scheme breakdown', 'Topical & yearly past paper drill', 'Exam timing & stress management', 'In-home & live online options'],
    suitableFor: 'Students preparing for Summer and Autumn examination series across all major examination boards',
    availableModes: 'both'
  },
  {
    id: 'a-level-ib',
    slug: 'a-level-ib-tutors',
    name: 'A-Level & IB Diploma',
    shortTag: 'Year 12–13 / Pre-University',
    subtitle: 'Senior specialists with proven track records in high-tier STEM, Commerce & Humanities',
    description: 'Advanced 1-on-1 tuition for International Baccalaureate (HL & SL) and Cambridge/Edexcel/AQA A-Levels. Tailored guidance for synoptic questions, Internal Assessments (IAs), Extended Essays, and university admissions.',
    popularSubjects: ['Pure Mathematics, Mechanics & Statistics', 'Physics (Theory & Practical)', 'Chemistry', 'Biology', 'Economics & Business', 'History & English Lit'],
    keyHighlights: ['Senior subject specialists', 'Practical paper & IA coaching', 'UCAS / University admissions insight', 'Flexible evening & weekend slots'],
    suitableFor: 'Sixth-form and IB Diploma candidates targeting competitive university admissions worldwide',
    availableModes: 'both'
  },
  {
    id: 'primary-middle',
    slug: 'primary-middle-tutors',
    name: 'Primary & Middle School Foundation',
    shortTag: 'Grades 1–8 / Key Stages 1–3',
    subtitle: 'Nurturing curiosity, numeracy, and strong reading comprehension with patient mentors',
    description: 'Foundational learning designed to bridge early gaps in numeracy, literacy, and scientific curiosity. Our patient tutors establish confident study habits and positive academic mindsets from an early age.',
    popularSubjects: ['Foundational Numeracy & Math', 'English Phonics & Reading', 'Science Exploration', 'Social Studies & Geography', 'Second Languages'],
    keyHighlights: ['Patient, encouraging teaching styles', 'Interactive worksheets & diagnostic milestones', 'Weekly parent progress reports', 'Comfortable home or online visits'],
    suitableFor: 'Young learners who benefit from individualized encouragement, routine, and structured homework guidance',
    availableModes: 'both'
  },
  {
    id: 'ap-senior-high',
    slug: 'ap-senior-high-tutors',
    name: 'Advanced Placement (AP) & High School',
    shortTag: 'Grades 9–12 / College Board',
    subtitle: 'Rigorous prep for AP Calculus, Physics, Chemistry, and College Board exams',
    description: 'Comprehensive preparation for high school honors and College Board Advanced Placement (AP) courses. We focus on free-response question (FRQ) mastery, multiple-choice strategy, and deep analytical problem-solving.',
    popularSubjects: ['AP Calculus AB/BC', 'AP Physics 1, 2 & C', 'AP Chemistry', 'AP Biology', 'AP Micro/Macroeconomics', 'AP Computer Science A'],
    keyHighlights: ['College Board rubric alignment', 'FRQ writing & problem-solving strategy', 'Full-length timed mock tests', 'Dedicated test prep plans'],
    suitableFor: 'Students striving for 5s on AP exams to secure early university credits and competitive transcript standing',
    availableModes: 'both'
  },
  {
    id: 'university-entry',
    slug: 'university-entry-tutors',
    name: 'University Admissions & Standardized Tests',
    shortTag: 'SAT, ACT, UCAT & Entry Tests',
    subtitle: 'Strategic test prep for competitive undergraduate admissions and aptitude exams',
    description: 'Targeted coaching for competitive international entrance exams. We cover section-by-section strategy, pacing techniques, diagnostic scoring analysis, and interview preparation.',
    popularSubjects: ['Digital SAT (Math & Reading/Writing)', 'ACT Prep', 'UCAT & Medical Aptitude', 'Step / MAT Mathematics', 'Academic Interview Practice'],
    keyHighlights: ['Diagnostic score tracking', 'Targeted pacing and time-allocation drills', 'Error log analysis & weak point remediation', 'High-scoring mentor pairing'],
    suitableFor: 'High school seniors and gap-year candidates preparing for competitive university entry tests',
    availableModes: 'both'
  },
  {
    id: 'languages-stem',
    slug: 'languages-stem-tutors',
    name: 'Coding, Languages & Academic Skills',
    shortTag: 'Specialized Skills',
    subtitle: 'Hands-on programming, modern foreign languages, and academic essay mentorship',
    description: 'Specialized 1-on-1 mentorship in Python, Java, web development, foreign languages (French, Spanish, German, Mandarin, Arabic), and advanced academic writing.',
    popularSubjects: ['Python & Algorithm Basics', 'Web Development (HTML/CSS/JS)', 'Spanish & French Language', 'Mandarin Conversation', 'Academic Essay Writing'],
    keyHighlights: ['Project-based portfolio guidance', 'Native & fluent language instructors', 'Structured communicative approach', 'Lifelong skill acquisition'],
    suitableFor: 'Learners seeking future-proof computational skills or global bilingual fluency',
    availableModes: 'both'
  }
];

export const SUBJECTS_DATA: SubjectItem[] = [
  {
    id: 'sub-math',
    slug: 'mathematics',
    name: 'Mathematics',
    category: 'Mathematics',
    curricula: ['GCSE / IGCSE', 'A-Levels', 'IB Diploma', 'AP Calculus', 'Primary & Middle'],
    description: 'From primary arithmetic to A-Level further mathematics and AP Calculus. We focus on step-by-step logic, algebraic fluency, and past-paper problem sets.',
    keyTopics: ['Algebra & Functions', 'Calculus (Differentiation & Integration)', 'Coordinate Geometry', 'Trigonometry', 'Statistics & Probability', 'Vectors & Mechanics'],
    tutorAvailability: 'Immediate'
  },
  {
    id: 'sub-phys',
    slug: 'physics',
    name: 'Physics',
    category: 'Sciences',
    curricula: ['GCSE / IGCSE', 'A-Levels', 'IB Physics HL/SL', 'AP Physics 1/2/C'],
    description: 'Developing mathematical modeling and physical intuition. We make mechanics, electricity, fields, and quantum physics intuitive and exam-ready.',
    keyTopics: ['Kinematics & Dynamics', 'Waves & Superposition', 'Electricity & Magnetism', 'Thermal Physics', 'Nuclear & Quantum Phenomena', 'Practical Lab Skills'],
    tutorAvailability: 'Immediate'
  },
  {
    id: 'sub-chem',
    slug: 'chemistry',
    name: 'Chemistry',
    category: 'Sciences',
    curricula: ['GCSE / IGCSE', 'A-Levels', 'IB Chemistry', 'AP Chemistry'],
    description: 'Bridging physical, inorganic, and organic chemistry. Tutors emphasize reaction mechanisms, stoichiometric calculations, and experimental design.',
    keyTopics: ['Atomic Structure & Bonding', 'Energetics & Kinetics', 'Equilibria (Kc, Kp, pH)', 'Organic Mechanisms & Synthesis', 'Transition Metals', 'Spectroscopy'],
    tutorAvailability: 'High'
  },
  {
    id: 'sub-bio',
    slug: 'biology',
    name: 'Biology',
    category: 'Sciences',
    curricula: ['GCSE / IGCSE', 'A-Levels', 'IB Biology', 'AP Biology', 'Pre-Med'],
    description: 'Mastering biological systems and analytical data interpretation. We ensure students can construct precise answers matching strict mark schemes.',
    keyTopics: ['Cellular Biology & Enzymes', 'Genetics & Inheritance', 'Molecular Biology & DNA', 'Physiology & Homeostasis', 'Ecology & Evolution', 'Experimental Analysis'],
    tutorAvailability: 'Immediate'
  },
  {
    id: 'sub-cs',
    slug: 'computer-science',
    name: 'Computer Science & Coding',
    category: 'Technology',
    curricula: ['GCSE / IGCSE', 'A-Levels', 'AP Computer Science', 'Python Bootcamp'],
    description: 'Algorithmic thinking, data structures, and practical software creation. Mentors guide students through Python, Java, pseudocode, and computer theory.',
    keyTopics: ['Programming Fundamentals (Python / Java)', 'Data Structures & Algorithms', 'Boolean Logic & Computer Architecture', 'Databases & SQL', 'Cybersecurity Basics'],
    tutorAvailability: 'High'
  },
  {
    id: 'sub-econ',
    slug: 'economics-business',
    name: 'Economics & Business Studies',
    category: 'Commerce & Economics',
    curricula: ['GCSE / IGCSE', 'A-Levels', 'IB Economics', 'AP Micro/Macro'],
    description: 'Analyzing market dynamics, fiscal/monetary policies, and corporate strategy. Tutors instruct students on essay evaluation, diagram construction, and data response.',
    keyTopics: ['Microeconomics (Supply & Demand, Elasticity)', 'Macroeconomic Objectives & Policy', 'Market Failure & Government Intervention', 'International Trade & Exchange Rates'],
    tutorAvailability: 'High'
  },
  {
    id: 'sub-eng',
    slug: 'english-language-literature',
    name: 'English Language & Literature',
    category: 'Languages',
    curricula: ['GCSE / IGCSE', 'A-Levels', 'IB English A', 'Middle School'],
    description: 'Sharpening analytical writing, textual scrutiny, rhetorical technique, and essay structure for both language comprehension and literary commentary.',
    keyTopics: ['Critical Text Analysis', 'Comparative Essay Writing', 'Poetry & Drama Exploration', 'Creative & Persuasive Composition', 'Grammar & Rhetorical Devices'],
    tutorAvailability: 'Immediate'
  },
  {
    id: 'sub-for-lang',
    slug: 'foreign-languages',
    name: 'World Languages (French, Spanish, German, Mandarin)',
    category: 'Languages',
    curricula: ['GCSE / IGCSE', 'IB B / Ab Initio', 'Conversational Fluency'],
    description: 'Structured speaking, listening, reading, and grammar instruction led by certified bilingual tutors with immersive pedagogical methods.',
    keyTopics: ['Oral Fluency & Pronunciation', 'Grammar & Conjugation Mastery', 'Reading Comprehension & Translation', 'Listening Practice & Cultural Context'],
    tutorAvailability: 'Regular'
  }
];

export const LOCATION_ZONES: LocationZone[] = [
  {
    id: 'zone-metro-central',
    slug: 'central-metropolitan-district',
    name: 'Central Metropolitan & Urban District',
    region: 'District 1',
    districts: ['Downtown Academic Corridor', 'Midtown Residential Hub', 'West End Cultural Quarter', 'University Enclave'],
    coverageHighlights: 'High-density tutor availability with rapid same-day tutor matching and weekend home visit slots.',
    averageMatchingTime: 'Under 18 Hours',
    homeTutorReadiness: 'High Priority Coverage'
  },
  {
    id: 'zone-suburban-east',
    slug: 'eastern-suburbs-residential',
    name: 'Eastern Suburbs & Family Enclaves',
    region: 'District 2',
    districts: ['Greenwood Heights', 'Lakeside Estates', 'Cedar Park', 'Parkview Meadows'],
    coverageHighlights: 'Vast network of STEM and primary reading specialists catering to family-oriented communities.',
    averageMatchingTime: 'Under 24 Hours',
    homeTutorReadiness: 'High Priority Coverage'
  },
  {
    id: 'zone-suburban-west',
    slug: 'western-hills-academic-zone',
    name: 'Western Hills & Science Corridor',
    region: 'District 3',
    districts: ['Highland Valley', 'Science Ridge', 'Sunset Crest', 'Brookfield Colony'],
    coverageHighlights: 'Specialized advanced high school, AP Calculus, and university preparatory faculty.',
    averageMatchingTime: 'Under 24 Hours',
    homeTutorReadiness: 'High Priority Coverage'
  },
  {
    id: 'zone-north-cantonment',
    slug: 'northern-gardens-corridor',
    name: 'Northern Gardens & Suburban Estates',
    region: 'District 4',
    districts: ['Riverdale Estate', 'Botanical Gardens Quarter', 'Heritage Crest', 'Northgate Reserve'],
    coverageHighlights: 'Full coverage for both male and female in-home tutors across all major school curricula.',
    averageMatchingTime: 'Under 24 Hours',
    homeTutorReadiness: 'Active Service Area'
  },
  {
    id: 'zone-southern-pines',
    slug: 'southern-residences-gateway',
    name: 'Southern Gateway & Executive Residences',
    region: 'District 5',
    districts: ['Pinecrest Sector', 'Sundance Village', 'South Pointe Plaza', 'Fairview Terrace'],
    coverageHighlights: 'Extensive coverage for GCSE, Cambridge O/A Levels, and primary homework assistance.',
    averageMatchingTime: 'Under 24 Hours',
    homeTutorReadiness: 'Active Service Area'
  },
  {
    id: 'zone-global-online',
    slug: 'global-digital-classrooms',
    name: 'Global Live Online Tutoring (Worldwide)',
    region: 'Worldwide',
    districts: ['North America (EST/PST)', 'United Kingdom & Europe (GMT/CET)', 'Middle East (GST)', 'Asia-Pacific (SGT)'],
    coverageHighlights: 'Interactive digital whiteboard sessions, recorded lessons, and top-tier global curriculum mentors.',
    averageMatchingTime: 'Under 12 Hours',
    homeTutorReadiness: 'Immediate Online Availability'
  }
];

export const TUTOR_PROFILES: TutorProfile[] = [
  {
    id: 'tut-1',
    name: 'Dr. Sarah Jenkins',
    title: 'Senior Mathematics & Physics Specialist',
    qualification: 'Ph.D. in Applied Mathematics, M.Sc. Theoretical Physics',
    institution: 'University of Cambridge (Alumna)',
    experienceYears: 11,
    gender: 'Female',
    specializations: ['A-Level Further Mathematics', 'AP Calculus BC', 'IB Physics HL', 'STEP Prep'],
    locationsCovered: ['Central Metropolitan', 'Western Hills', 'Global Live Online'],
    teachingModes: ['In-Home Tuition', 'Live Online Tuition'],
    curricula: ['Cambridge CAIE', 'Edexcel', 'IB Diploma', 'College Board AP'],
    verified: true
  },
  {
    id: 'tut-2',
    name: 'Marcus Vance, M.Ed.',
    title: 'Head Chemistry & Natural Sciences Instructor',
    qualification: 'M.Ed. Science Curriculum, B.Sc. Chemistry & Biochemistry',
    institution: 'Imperial College London',
    experienceYears: 8,
    gender: 'Male',
    specializations: ['GCSE Chemistry', 'A-Level Chemistry (Paper 1–5)', 'IB Chemistry IA Coaching'],
    locationsCovered: ['Eastern Suburbs', 'Central Metropolitan', 'Global Live Online'],
    teachingModes: ['In-Home Tuition', 'Live Online Tuition'],
    curricula: ['AQA', 'Edexcel', 'CAIE', 'IB Diploma'],
    verified: true
  },
  {
    id: 'tut-3',
    name: 'Elena Rostova',
    title: 'Senior English Literature & Humanities Mentor',
    qualification: 'B.A. (Hons) English Literature, Postgraduate Certificate in Education (PGCE)',
    institution: 'Oxford University / King’s College London',
    experienceYears: 9,
    gender: 'Female',
    specializations: ['IGCSE English Literature', 'A-Level Essay Rhetoric', 'Extended Essay Mentorship'],
    locationsCovered: ['Central Metropolitan', 'Northern Gardens', 'Global Live Online'],
    teachingModes: ['In-Home Tuition', 'Live Online Tuition'],
    curricula: ['Cambridge CAIE', 'Edexcel', 'IB English A'],
    verified: true
  },
  {
    id: 'tut-4',
    name: 'David Chen',
    title: 'Lead Computer Science & Algorithmic Coach',
    qualification: 'B.Sc. Computer Engineering, Former Senior Software Engineer',
    institution: 'National University of Singapore / UC Berkeley',
    experienceYears: 7,
    gender: 'Male',
    specializations: ['AP Computer Science A', 'Python & Algorithms', 'A-Level Computer Science'],
    locationsCovered: ['Western Hills', 'Southern Gateway', 'Global Live Online'],
    teachingModes: ['In-Home Tuition', 'Live Online Tuition'],
    curricula: ['College Board AP', 'CAIE', 'Edexcel'],
    verified: true
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-vetting',
    question: 'How does Luminar Learning vet and select academic tutors?',
    answer: 'Every candidate undergoes a rigorous 4-stage screening process: (1) Identity and national background check, (2) Academic degree and transcript verification, (3) A practical pedagogical audition evaluated by senior educators, and (4) Ongoing student satisfaction audits. Only the top 3% of applicants are invited to join our tutoring network.',
    category: 'Tutors & Vetting'
  },
  {
    id: 'faq-trial',
    question: 'How does the free diagnostic demo session work?',
    answer: 'We provide an obligation-free first diagnostic session (in-person or online). This allows your student to evaluate the tutor’s rapport, pacing, and teaching style, while the tutor assesses the student’s conceptual baseline. If you feel it is not a 100% match, we promptly pair you with another educator at zero cost.',
    category: 'General'
  },
  {
    id: 'faq-modes',
    question: 'What is the difference between In-Home Tuition and Live Online Tuition?',
    answer: 'In-Home Tuition provides an educator who visits your residence on a scheduled weekly basis for focused, face-to-face mentorship in your child’s comfortable home environment. Live Online Tuition connects students with international curriculum specialists via high-definition video, interactive shared digital whiteboards, and recorded revision archives for maximum flexibility.',
    category: 'Curricula & Modes'
  },
  {
    id: 'faq-curricula',
    question: 'Which curricula and examination boards are supported?',
    answer: 'We support all major global and national academic frameworks including Cambridge International (CAIE IGCSE, O/A Levels), Pearson Edexcel, Oxford AQA, International Baccalaureate (IB PYP, MYP, and DP), College Board AP, National Curricula (Grades 1–12), and University Entrance exams (SAT, ACT, UCAT).',
    category: 'Curricula & Modes'
  },
  {
    id: 'faq-replacement',
    question: 'What happens if we need to reschedule a class or replace a tutor?',
    answer: 'Flexibility is paramount. You can reschedule any lesson with 24 hours advance notice directly through your dedicated Academic Coordinator. If at any point during your learning journey your student’s requirements evolve, we facilitate a seamless tutor transition without administrative fees.',
    category: 'Scheduling & Fees'
  },
  {
    id: 'faq-safety',
    question: 'What safety and in-home reassurance measures are in place?',
    answer: 'For in-home visits, all educators carry verified digital credentials and government identification. We mandate that in-home sessions take place in common household study spaces (living room or designated open study area), and our coordinators conduct regular check-ins with parents to verify safety and educational progress.',
    category: 'Safety & Quality'
  }
];

export const TRUST_PILLARS = [
  {
    title: 'Top 3% Vetted Educators',
    subtitle: 'Degree verified, background checked, and evaluated via rigorous pedagogical auditions.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Free Diagnostic Demo',
    subtitle: 'Zero upfront commitment. Assess tutor chemistry and learning baseline before enrollment.',
    icon: 'Sparkles'
  },
  {
    title: 'Hybrid In-Home & Online',
    subtitle: 'Tailored to your family lifestyle: in-person domestic visits or interactive digital classrooms.',
    icon: 'GraduationCap'
  },
  {
    title: 'Dedicated Academic Coordinator',
    subtitle: 'Personalized support tracking syllabus milestones, monthly feedback, and schedule changes.',
    icon: 'UserCheck'
  }
];

export const CASE_STUDY_METRICS = {
  projectTitle: 'Luminar Learning Digital Experience',
  discipline: 'UX Strategy, UI Design, Design Systems & CRO',
  coreFocus: 'Transforming Content-Dense Education Websites into High-Converting Discovery Platforms',
  targetAudience: 'Parents, adult learners, and students seeking verified 1-on-1 academic mentorship',
  techStack: 'React 18, TypeScript, Tailwind CSS, Lucide Icons, Headless UX Flows',
};

// Component compatibility aliases
export const FAQS_LIST = FAQ_DATA;

export const TRUST_POINTS = [
  {
    title: 'Top 3% Vetted Tutors',
    description: 'Degree verified, identity checked, and assessed via observed live teaching auditions.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Free Diagnostic Demo',
    description: 'Zero financial obligation. Evaluate tutor chemistry and baseline knowledge first.',
    icon: 'Users'
  },
  {
    title: 'Hybrid In-Home & Online',
    description: 'Flexible options: in-person visits to your home or global interactive virtual classrooms.',
    icon: 'ClockCheck'
  },
  {
    title: 'Academic Coordinator',
    description: 'Dedicated point of contact managing lesson schedules, progress, and tutor chemistry.',
    icon: 'MapPin'
  }
];

export const WHY_CHOOSE_US_BENEFITS = [
  {
    title: '1-on-1 Individualized Mastery',
    description: 'Pacing adapted specifically to your child’s learning style, identifying and repairing foundational gaps.',
    tag: 'Individualized Learning'
  },
  {
    title: 'Curriculum & Exam Board Specialization',
    description: 'Mentors specialized in CAIE, Edexcel, AQA, IB, AP, and SAT past papers, rubrics, and timing techniques.',
    tag: 'Syllabus Precision'
  },
  {
    title: 'In-Home Comfort & Safety',
    description: 'Safe in-home sessions conducted in family study areas with fully background-verified tutors.',
    tag: 'Safe Domestic Study'
  },
  {
    title: 'Live Interactive Classrooms',
    description: 'Interactive digital whiteboard, screen annotation, and recorded video archives for worldwide accessibility.',
    tag: 'Global Digital Access'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Submit Student Goals',
    description: 'Share your child’s academic level, target examination board, subject focus, and preferred schedule.',
    icon: 'ClipboardList'
  },
  {
    step: '02',
    title: 'Coordinator Profiling & Match',
    description: 'An academic coordinator reviews requirements and matches you with 2–3 verified subject specialists.',
    icon: 'UserCheck'
  },
  {
    step: '03',
    title: 'Free Diagnostic Demo Session',
    description: 'Experience an obligation-free demonstration class to test tutor rapport and teaching methodology.',
    icon: 'Compass'
  },
  {
    step: '04',
    title: 'Structured Lesson Cadence',
    description: 'Confirm regular weekly slots with ongoing monthly syllabus progress reports from your coordinator.',
    icon: 'GraduationCap'
  }
];

