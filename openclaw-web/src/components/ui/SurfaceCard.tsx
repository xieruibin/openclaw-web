import type { PropsWithChildren } from 'react';

interface SurfaceCardProps extends PropsWithChildren {
  className?: string;
}

export default function SurfaceCard({ children, className = '' }: SurfaceCardProps) {
  return (
    <div className={`rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)] ${className}`.trim()}>
      {children}
    </div>
  );
}
