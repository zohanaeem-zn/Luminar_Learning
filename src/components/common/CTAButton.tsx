import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  icon?: React.ReactNode;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  icon,
  id,
  type = 'button',
  disabled = false
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none active:scale-[0.99] whitespace-nowrap";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2",
    lg: "px-6 py-3.5 text-base sm:text-lg font-semibold gap-2.5 shadow-sm"
  }[size];

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md focus:ring-blue-500",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-sm focus:ring-slate-700",
    outline: "bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-slate-400 focus:ring-blue-500",
    whatsapp: "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm focus:ring-emerald-500"
  }[variant];

  const widthClass = fullWidth ? "w-full" : "";

  if (href) {
    return (
      <a
        id={id}
        href={href}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${className}`}
        onClick={onClick}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
