import React from 'react';

interface InsuranceLogoProps {
  id: string;
  className?: string;
  size?: number;
}

export const InsuranceLogo: React.FC<InsuranceLogoProps> = ({ id, className = '', size = 36 }) => {
  switch (id) {
    case 'dana':
      // Dana Insurance: Gold sunburst with royal blue geometric diamond
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
          <path
            d="M24 10L27.5 19L36 16.5L30.5 24L36 31.5L27.5 29L24 38L20.5 29L12 31.5L17.5 24L12 16.5L20.5 19L24 10Z"
            fill="#f59e0b"
          />
          <circle cx="24" cy="24" r="7.5" fill="#2563eb" />
          <circle cx="24" cy="24" r="3.5" fill="#ffffff" />
        </svg>
      );

    case 'salamat':
      // Iran Health Insurance: Teal curved cross and leaf
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#f0fdfa" stroke="#99f6e4" strokeWidth="1.5" />
          <path
            d="M21 12H27V21H36V27H27V36H21V27H12V21H21V12Z"
            fill="#0d9488"
            rx="2"
          />
          <path
            d="M24 14C24 14 31 16 32 23C32 30 25 33 24 33"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="24" cy="24" r="3" fill="#ffffff" />
        </svg>
      );

    case 'tamin':
      // Social Security Organization: Gear wheel and wheat wreath
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Outer gear notches */}
          <circle
            cx="24"
            cy="24"
            r="14"
            stroke="#1e3a8a"
            strokeWidth="3.5"
            strokeDasharray="4 2.5"
          />
          {/* Inner disc */}
          <circle cx="24" cy="24" r="8" fill="#1e3a8a" />
          {/* Center golden wheat motif */}
          <path
            d="M24 18V30M24 20L21 22M24 24L21 26M24 22L27 24M24 26L27 28"
            stroke="#eab308"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'sina':
      // Sina Insurance: Dual curved ribbon forming medical crest
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
          <path
            d="M17 14C21 14 26 17 26 21C26 25 20 26 20 30C20 34 25 35 29 34"
            stroke="#2563eb"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M31 16C29 19 28 22 28 25"
            stroke="#ef4444"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="31" cy="15" r="2" fill="#ef4444" />
        </svg>
      );

    case 'kosar':
      // Kosar Insurance: Navy octagonal star crest
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1.5" />
          <rect x="15" y="15" width="18" height="18" rx="2" fill="#0369a1" />
          <rect
            x="15"
            y="15"
            width="18"
            height="18"
            rx="2"
            fill="#0284c7"
            transform="rotate(45 24 24)"
            opacity="0.85"
          />
          <circle cx="24" cy="24" r="4.5" fill="#ffffff" />
          <path d="M24 16V32M16 24H32" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'ma':
      // Ma Insurance: Stylized blue flower bloom
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
          <circle cx="24" cy="17" r="5" fill="#3b82f6" opacity="0.8" />
          <circle cx="31" cy="24" r="5" fill="#2563eb" opacity="0.8" />
          <circle cx="24" cy="31" r="5" fill="#1d4ed8" opacity="0.8" />
          <circle cx="17" cy="24" r="5" fill="#60a5fa" opacity="0.8" />
          <circle cx="24" cy="24" r="4" fill="#ffffff" />
        </svg>
      );

    case 'moalem':
      // Moalem Insurance: Blue geometric flame & book
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          <path
            d="M16 32C16 30 19 28 24 28C29 28 32 30 32 32M24 13C24 13 28 17 28 21C28 24 25.5 25 24 25C22.5 25 20 24 20 21C20 17 24 13 24 13Z"
            stroke="#2563eb"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M15 34H33" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'mellat':
      // Mellat Insurance: Dual intersecting red/blue rings
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1.5" />
          <circle cx="21" cy="24" r="9" stroke="#e11d48" strokeWidth="3" />
          <circle cx="27" cy="24" r="9" stroke="#2563eb" strokeWidth="3" opacity="0.8" />
          <circle cx="24" cy="24" r="2" fill="#1e293b" />
        </svg>
      );

    case 'iran':
      // Iran Insurance Company: Crown laurel crest
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#fffbeb" stroke="#fef3c7" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="14" stroke="#d97706" strokeWidth="2" strokeDasharray="3 2" />
          <path
            d="M19 28L24 15L29 28M20.5 25H27.5"
            stroke="#b45309"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="13" r="2" fill="#d97706" />
        </svg>
      );

    case 'alborz':
      // Alborz Insurance: Mountain peaks shield
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
          <path
            d="M14 32L24 14L34 32H14Z"
            fill="#1e40af"
          />
          <path
            d="M24 14L19 23H29L24 14Z"
            fill="#ffffff"
          />
          <path
            d="M22 28L27 20L32 28H22Z"
            fill="#3b82f6"
            opacity="0.9"
          />
        </svg>
      );

    case 'asia':
      // Asia Insurance: Royal blue diamond
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
          <path
            d="M24 12L35 24L24 36L13 24L24 12Z"
            fill="#1d4ed8"
          />
          <path
            d="M24 17L30 24L24 31L18 24L24 17Z"
            fill="#ffffff"
          />
          <circle cx="24" cy="24" r="3" fill="#1d4ed8" />
        </svg>
      );

    case 'saman':
      // Saman Insurance: Blue wings chevron
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1.5" />
          <path
            d="M15 20L24 28L33 20M15 26L24 34L33 26"
            stroke="#0284c7"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="15" r="3" fill="#0284c7" />
        </svg>
      );

    case 'pasargad':
      // Pasargad Insurance: Classic Persian column motif
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#fafaf9" stroke="#e7e5e4" strokeWidth="1.5" />
          <path
            d="M17 16H31M19 16V32M29 16V32M16 32H32M20 20H28M20 24H28M20 28H28"
            stroke="#78716c"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M24 12L21 16H27L24 12Z" fill="#d97706" />
        </svg>
      );

    case 'atiyeh':
      // Atiyeh Sazan Hafez: Caduceus & leaf
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.5" />
          <path
            d="M24 12V34M24 14C27 17 29 20 27 23C25 26 21 25 21 28C21 31 23 33 24 34"
            stroke="#16a34a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="24" cy="12" r="2.5" fill="#16a34a" />
          <path d="M20 18C18 16 16 16 15 17" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
          <path d="M28 18C30 16 32 16 33 17" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'mosallah':
      // Armed Forces Insurance: Shield with laurel
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
          <path
            d="M24 12L34 16V25C34 31 29 35 24 37C19 35 14 31 14 25V16L24 12Z"
            fill="#334155"
          />
          <path d="M24 16V33M18 24H30" stroke="#f8fafc" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="24" cy="24" r="3" fill="#fbbf24" />
        </svg>
      );

    default:
      // Elegant fallback medical shield
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="24" cy="24" r="22" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
          <path
            d="M24 13L33 17V24C33 30 29 34 24 36C19 34 15 30 15 24V17L24 13Z"
            stroke="#2563eb"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M24 19V29M19 24H29" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
  }
};
