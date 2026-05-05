import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const DisplayXL: React.FC<TypographyProps> = ({ children, className = '', style }) => (
  <div
    className={`flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold text-[96px] ${className}`}
    style={{ fontVariationSettings: "'opsz' 14", ...style }}
  >
    {children}
  </div>
);

export const DisplayL: React.FC<TypographyProps> = ({ children, className = '', style }) => (
  <div
    className={`flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold text-[64px] ${className}`}
    style={{ fontVariationSettings: "'opsz' 14", ...style }}
  >
    {children}
  </div>
);

export const DisplayM: React.FC<TypographyProps> = ({ children, className = '', style }) => (
  <div
    className={`font-['DM_Sans:Medium',sans-serif] font-medium text-[48px] ${className}`}
    style={{ fontVariationSettings: "'opsz' 14", ...style }}
  >
    {children}
  </div>
);

export const DisplayS: React.FC<TypographyProps> = ({ children, className = '', style }) => (
  <div
    className={`font-['DM_Sans:Medium',sans-serif] font-medium text-[32px] ${className}`}
    style={{ fontVariationSettings: "'opsz' 14", ...style }}
  >
    {children}
  </div>
);

export const BodyL: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <div className={`flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[20px] ${className}`}>
    {children}
  </div>
);

export const BodyLBold: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] ${className}`}>
    {children}
  </p>
);

export const Body: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <div className={`flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[16px] ${className}`}>
    {children}
  </div>
);

export const BodyBold: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <span className={`font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] ${className}`}>
    {children}
  </span>
);

export const Label: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <div className={`flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal text-[16px] uppercase ${className}`}>
    {children}
  </div>
);

export const LabelBold: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`font-['JetBrains_Mono:Bold',sans-serif] font-bold text-[16px] uppercase ${className}`}>
    {children}
  </p>
);

export const Button: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <div className={`flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[20px] text-center whitespace-nowrap ${className}`}>
    {children}
  </div>
);
