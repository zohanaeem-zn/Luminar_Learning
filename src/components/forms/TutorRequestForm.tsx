import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Send, 
  MessageSquareText, 
  Clock, 
  MapPin, 
  BookOpen, 
  User, 
  Phone, 
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Home,
  Monitor
} from 'lucide-react';
import { BUSINESS_INFO, LOCATION_ZONES, TUTOR_CATEGORIES } from '../../data/businessData';
import { TutorRequest } from '../../types';
import { CTAButton } from '../common/CTAButton';

interface TutorRequestFormProps {
  onFormSubmitted?: (request: TutorRequest) => void;
  initialClass?: string;
  initialSubject?: string;
  initialArea?: string;
  compact?: boolean;
}

export const TutorRequestForm: React.FC<TutorRequestFormProps> = ({
  onFormSubmitted,
  initialClass = '',
  initialSubject = '',
  initialArea = '',
  compact = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsappSameAsPhone: true,
    whatsapp: '',
    classGrade: initialClass,
    subject: initialSubject,
    locationArea: initialArea,
    preferredTiming: 'Afternoon / Evening (4:00 PM - 7:00 PM)',
    mode: 'In-Home Tuition' as 'In-Home Tuition' | 'Live Online Tuition' | 'Flexible / Either',
    tutorGenderPreference: 'No Preference' as 'No Preference' | 'Female Tutor' | 'Male Tutor',
    additionalRequirements: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRequest, setSubmittedRequest] = useState<TutorRequest | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide the parent or student name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name should be at least 2 characters';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Phone number is required for advisor contact';
    } else if (cleanPhone.length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.classGrade) {
      newErrors.classGrade = 'Please select the student’s curriculum or grade level';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify the subject(s) required';
    }

    if (!formData.locationArea) {
      newErrors.locationArea = 'Please select your service zone or online preference';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const generatedId = `LUM-${Math.floor(1000 + Math.random() * 9000)}`;
    const effectiveWhatsApp = formData.whatsappSameAsPhone ? formData.phone : (formData.whatsapp || formData.phone);

    const newRequest: TutorRequest = {
      id: generatedId,
      createdAt: new Date().toISOString(),
      parentOrStudentName: formData.name.trim(),
      phone: formData.phone.trim(),
      whatsapp: effectiveWhatsApp.trim(),
      classGrade: formData.classGrade,
      subject: formData.subject.trim(),
      locationArea: formData.locationArea,
      preferredTiming: formData.preferredTiming,
      mode: (formData.mode === 'Flexible / Either' ? 'Hybrid (Both)' : formData.mode) as 'In-Home Tuition' | 'Live Online Tuition' | 'Hybrid (Both)',
      tutorGenderPreference: formData.tutorGenderPreference,
      additionalRequirements: formData.additionalRequirements.trim(),
      status: 'new'
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRequest(newRequest);
      if (onFormSubmitted) {
        onFormSubmitted(newRequest);
      }
    }, 400);
  };

  const getWhatsAppPrefillUrl = () => {
    if (!submittedRequest) return BUSINESS_INFO.whatsappUrl;
    const msg = `Hello Luminar Learning,\nI have submitted tutor request #${submittedRequest.id}:\n- Name: ${submittedRequest.parentOrStudentName}\n- Level: ${submittedRequest.classGrade}\n- Subject: ${submittedRequest.subject}\n- Zone: ${submittedRequest.locationArea}\n- Mode: ${submittedRequest.mode}\n- Timing: ${submittedRequest.preferredTiming}\n- Gender Pref: ${submittedRequest.tutorGenderPreference}\n\nPlease share suitable tutor profiles and diagnostic demo details.`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  if (submittedRequest) {
    return (
      <div className="bg-white rounded-2xl border border-emerald-200 p-6 sm:p-8 shadow-sm text-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-emerald-700">Request Registered</span>
            <h3 className="text-xl font-bold text-slate-900">
              Inquiry #{submittedRequest.id} Received
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Thank you, <strong>{submittedRequest.parentOrStudentName}</strong>. Your learning brief for <strong>{submittedRequest.classGrade} ({submittedRequest.subject})</strong> has been routed to our Senior Academic Coordinators.
        </p>

        {/* Structured Summary Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm space-y-2 mb-6">
          <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
            <span className="text-slate-500 font-medium">Learning Mode:</span>
            <span className="font-semibold text-slate-800">{submittedRequest.mode}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
            <span className="text-slate-500 font-medium">Service Zone:</span>
            <span className="font-semibold text-slate-800">{submittedRequest.locationArea}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
            <span className="text-slate-500 font-medium">Preferred Schedule:</span>
            <span className="font-semibold text-slate-800">{submittedRequest.preferredTiming}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 font-medium">Free Diagnostic Demo:</span>
            <span className="font-semibold text-emerald-600">Included (No Upfront Fee)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={getWhatsAppPrefillUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20ba59] shadow-sm transition-all"
          >
            <MessageSquareText className="w-4 h-4" />
            <span>Open in WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setSubmittedRequest(null)}
            className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-slate-800">
      
      {/* Name & Phone Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="req-name" className="block text-xs font-semibold text-slate-700 mb-1">
            Parent or Student Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="req-name"
              type="text"
              placeholder="e.g. Mrs. Eleanor Vance"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white ${
                errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
          {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="req-phone" className="block text-xs font-semibold text-slate-700 mb-1">
            Phone / Contact Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="req-phone"
              type="tel"
              placeholder="+1 (555) 019-2834"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white ${
                errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
          {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Curriculum & Subject Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="req-class" className="block text-xs font-semibold text-slate-700 mb-1">
            Academic Level & Curriculum <span className="text-red-500">*</span>
          </label>
          <select
            id="req-class"
            value={formData.classGrade}
            onChange={(e) => setFormData({ ...formData, classGrade: e.target.value })}
            className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white ${
              errors.classGrade ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
            }`}
          >
            <option value="">Select Level or Board</option>
            {TUTOR_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name} ({cat.shortTag})
              </option>
            ))}
          </select>
          {errors.classGrade && <p className="text-[11px] text-red-600 mt-1">{errors.classGrade}</p>}
        </div>

        <div>
          <label htmlFor="req-subject" className="block text-xs font-semibold text-slate-700 mb-1">
            Subject(s) Required <span className="text-red-500">*</span>
          </label>
          <input
            id="req-subject"
            type="text"
            placeholder="e.g. A-Level Physics & Further Maths"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white ${
              errors.subject ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
            }`}
          />
          {errors.subject && <p className="text-[11px] text-red-600 mt-1">{errors.subject}</p>}
        </div>
      </div>

      {/* Tuition Mode & Service Zone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Tuition Learning Mode
          </label>
          <div className="grid grid-cols-3 gap-1.5 text-xs font-medium">
            {(['In-Home Tuition', 'Live Online Tuition', 'Flexible / Either'] as const).map((modeOption) => (
              <button
                type="button"
                key={modeOption}
                onClick={() => setFormData({ ...formData, mode: modeOption })}
                className={`py-2 px-1.5 rounded-lg border text-center transition-all ${
                  formData.mode === modeOption
                    ? 'bg-blue-50 border-blue-500 text-blue-700 font-semibold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {modeOption === 'In-Home Tuition' ? 'In-Home' : modeOption === 'Live Online Tuition' ? 'Live Online' : 'Either'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="req-area" className="block text-xs font-semibold text-slate-700 mb-1">
            Service Zone or Online <span className="text-red-500">*</span>
          </label>
          <select
            id="req-area"
            value={formData.locationArea}
            onChange={(e) => setFormData({ ...formData, locationArea: e.target.value })}
            className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white ${
              errors.locationArea ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
            }`}
          >
            <option value="">Select District or Digital</option>
            {LOCATION_ZONES.map((zone) => (
              <option key={zone.id} value={zone.name}>
                {zone.name} ({zone.region})
              </option>
            ))}
          </select>
          {errors.locationArea && <p className="text-[11px] text-red-600 mt-1">{errors.locationArea}</p>}
        </div>
      </div>

      {/* Schedule & Gender Preference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="req-timing" className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Time Window
          </label>
          <select
            id="req-timing"
            value={formData.preferredTiming}
            onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
            <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
            <option value="Late Evening (7:00 PM - 9:30 PM)">Late Evening (7:00 PM - 9:30 PM)</option>
            <option value="Weekend Intensives (Sat/Sun)">Weekend Intensives (Sat / Sun)</option>
            <option value="Flexible Weekday Slots">Flexible Weekday Slots</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Tutor Gender Preference
          </label>
          <div className="grid grid-cols-3 gap-1.5 text-xs font-medium">
            {(['No Preference', 'Female Tutor', 'Male Tutor'] as const).map((genderOption) => (
              <button
                type="button"
                key={genderOption}
                onClick={() => setFormData({ ...formData, tutorGenderPreference: genderOption })}
                className={`py-2 px-1.5 rounded-lg border text-center transition-all ${
                  formData.tutorGenderPreference === genderOption
                    ? 'bg-blue-50 border-blue-500 text-blue-700 font-semibold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {genderOption}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <label htmlFor="req-notes" className="block text-xs font-semibold text-slate-700 mb-1">
          Specific Learning Goals or Weak Areas (Optional)
        </label>
        <textarea
          id="req-notes"
          rows={2}
          placeholder="e.g. Focus on past-paper questions, exam timing, or revision before upcoming mock examinations..."
          value={formData.additionalRequirements}
          onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>

      {/* Submit Button */}
      <CTAButton
        type="submit"
        id="tutor-request-form-submit"
        size="lg"
        fullWidth
        disabled={isSubmitting}
        className="font-bold shadow-md"
        icon={<ArrowRight className="w-5 h-5" />}
      >
        {isSubmitting ? 'Matching Mentors...' : 'Submit Request for Free Diagnostic Demo'}
      </CTAButton>

      <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>No commitment required</span>
        </span>
        <span className="flex items-center gap-1">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Free trial diagnostic class</span>
        </span>
      </div>

    </form>
  );
};
