import React, { useState } from 'react';
import { 
  X, 
  Check, 
  MessageSquareText, 
  Phone, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Clock, 
  Filter,
  UserCheck,
  Trash2,
  Copy,
  Layers
} from 'lucide-react';
import { TutorRequest, InquiryStatus } from '../../types';
import { BUSINESS_INFO } from '../../data/businessData';

interface InquiryManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: TutorRequest[];
  onUpdateStatus: (id: string, newStatus: InquiryStatus) => void;
  onDeleteInquiry?: (id: string) => void;
}

export const InquiryManagerModal: React.FC<InquiryManagerModalProps> = ({
  isOpen,
  onClose,
  inquiries,
  onUpdateStatus,
  onDeleteInquiry
}) => {
  const [filter, setFilter] = useState<'all' | InquiryStatus>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredInquiries = inquiries.filter((inq) => {
    if (filter === 'all') return true;
    return inq.status === filter;
  });

  const getStatusBadge = (status: InquiryStatus) => {
    switch (status) {
      case 'new':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">New Intake</span>;
      case 'contacted':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">Contacted</span>;
      case 'qualified':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Demo Scheduled</span>;
      case 'closed':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">Enrolled / Closed</span>;
    }
  };

  const copySummary = (inq: TutorRequest) => {
    const parent = inq.parentOrStudentName || 'Parent';
    const cls = inq.classGrade || 'Curriculum';
    const subj = inq.subject || 'Subject';
    const zone = inq.locationArea || 'District';
    const phone = inq.phone || inq.whatsapp || '';
    const text = `Luminar Brief #${inq.id} | ${parent} | ${cls} | ${subj} | Zone: ${zone} | Mode: ${inq.mode} | Contact: ${phone}`;
    try {
      navigator.clipboard.writeText(text);
      setCopiedId(inq.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (_) {}
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="min-h-full flex items-center justify-center p-3 sm:p-4 text-center">
        <div 
          className="relative bg-white rounded-2xl max-w-4xl w-full text-left shadow-2xl border border-slate-200 overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">
                  Academic Coordinator Intake Log
                </h3>
                <span className="px-2 py-0.5 text-[11px] font-mono bg-blue-900 text-blue-300 rounded border border-blue-700">
                  {inquiries.length} Inquiries
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Review, qualify, and dispatch tutors for in-home & live online requests
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filter Bar */}
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <span className="font-semibold text-slate-700">Filter Status:</span>
              <div className="flex flex-wrap gap-1">
                {(['all', 'new', 'contacted', 'qualified', 'closed'] as const).map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setFilter(st)}
                    className={`px-2.5 py-1 rounded-md capitalize font-medium transition-colors ${
                      filter === st
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {st === 'all' ? 'All Leads' : st}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-slate-500 text-[11px]">
              Showing {filteredInquiries.length} of {inquiries.length}
            </div>
          </div>

          {/* Body content */}
          <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4">
            {filteredInquiries.length === 0 ? (
              <div className="text-center py-12 text-slate-500">
                <BookOpen className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                <p className="font-medium text-slate-700">No inquiry requests match this filter.</p>
                <p className="text-xs text-slate-500 mt-1">Submit a tutor request through the website to test this intake dashboard.</p>
              </div>
            ) : (
              filteredInquiries.map((inq) => {
                const cleanPhone = (inq.whatsapp || inq.phone || '').replace(/\D/g, '');
                const parentName = inq.parentOrStudentName || 'Parent';
                const waMessage = `Hello ${parentName}, this is the Academic Coordination team at Luminar Learning regarding your 1-on-1 tutoring request #${inq.id} for ${inq.classGrade} (${inq.subject}). We are ready to present your matched tutor profiles and schedule the free diagnostic demo session.`;

                return (
                  <div 
                    key={inq.id}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all space-y-3"
                  >
                    {/* Top Row: Ref ID, Name & Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          {inq.id}
                        </span>
                        <span className="font-bold text-slate-900 text-sm">
                          {inq.parentOrStudentName}
                        </span>
                        <span className="text-slate-400 text-xs flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(inq.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {getStatusBadge(inq.status)}
                        <select
                          aria-label={`Change status for request ${inq.id}`}
                          value={inq.status}
                          onChange={(e) => onUpdateStatus(inq.id, e.target.value as InquiryStatus)}
                          className="text-xs bg-white border border-slate-300 rounded px-2 py-1 font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="new">Mark New</option>
                          <option value="contacted">Mark Contacted</option>
                          <option value="qualified">Mark Demo Scheduled</option>
                          <option value="closed">Mark Closed</option>
                        </select>
                      </div>
                    </div>

                    {/* Details grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-1">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span><strong>Level & Subject:</strong> {inq.classGrade} ({inq.subject})</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span><strong>Zone / District:</strong> {inq.locationArea}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span><strong>Schedule:</strong> {inq.preferredTiming}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span><strong>Mode & Pref:</strong> {inq.mode} • {inq.tutorGenderPreference}</span>
                      </div>
                    </div>

                    {inq.additionalRequirements && (
                      <div className="p-2.5 rounded bg-white border border-slate-200 text-xs text-slate-600">
                        <strong>Student Notes:</strong> {inq.additionalRequirements}
                      </div>
                    )}

                    {/* Action links */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200">
                      <div className="flex items-center gap-3">
                        {inq.phone && (
                          <a
                            href={`tel:${inq.phone}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>Call {inq.phone}</span>
                          </a>
                        )}

                        {cleanPhone && (
                          <a
                            href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(waMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                          >
                            <MessageSquareText className="w-3.5 h-3.5" />
                            <span>WhatsApp Parent</span>
                          </a>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => copySummary(inq)}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                          title="Copy summary brief for tutor dispatch"
                        >
                          {copiedId === inq.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedId === inq.id ? 'Copied Brief' : 'Copy Brief'}</span>
                        </button>

                        {onDeleteInquiry && (
                          <button
                            type="button"
                            onClick={() => onDeleteInquiry(inq.id)}
                            className="p-1 rounded text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Luminar Learning Coordinator CRM View • Leads stored locally in browser session
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
