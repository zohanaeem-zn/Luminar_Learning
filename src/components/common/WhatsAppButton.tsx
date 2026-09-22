import React from 'react';
import { MessageSquareText } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

interface WhatsAppButtonProps {
  customText?: string;
  prefilledMessage?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  id?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customText = 'Chat on WhatsApp',
  prefilledMessage,
  size = 'md',
  fullWidth = false,
  className = '',
  id
}) => {
  const messageParam = prefilledMessage
    ? `?text=${encodeURIComponent(prefilledMessage)}`
    : `?text=${encodeURIComponent('Hello Oxford Home Tutors, I am inquiring about home tuition in Lahore.')}`;

  const href = `https://wa.me/${BUSINESS_INFO.whatsappNumber}${messageParam}`;

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs sm:text-sm gap-1.5",
    md: "px-4 py-2.5 text-sm sm:text-base gap-2",
    lg: "px-6 py-3.5 text-base sm:text-lg font-semibold gap-2.5"
  }[size];

  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${customText} (Opens WhatsApp chat with Oxford Home Tutors)`}
      className={`inline-flex items-center justify-center font-medium rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 active:scale-[0.99] whitespace-nowrap ${sizeClasses} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <MessageSquareText className="w-5 h-5 shrink-0" />
      <span>{customText}</span>
    </a>
  );
};
