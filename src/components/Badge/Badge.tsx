// src/components/Badge/Badge.tsx
import React from 'react';

type BadgeColor = 'success' | 'error' | 'warning' | 'info' | 'default';

interface BadgeProps {
  text: string;
  color?: BadgeColor;
}

const Badge: React.FC<BadgeProps> = ({ text, color = 'default' }) => {
  const colorClasses = {
    success: 'bg-success-500 text-white',
    error: 'bg-error-500 text-white',
    warning: 'bg-warning-500 text-white',
    info: 'bg-info-500 text-white',
    default: 'bg-gray-100 text-gray-800',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]}`}
    >
      {text}
    </span>
  );
};

export default Badge;