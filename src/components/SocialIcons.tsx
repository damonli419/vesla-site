interface IconProps {
  className?: string;
}

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function TiktokIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.5 3c.5 2.1 1.9 3.8 4 4.3v2.6c-1.6 0-3.1-.5-4.4-1.3v6.2a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.6a3.1 3.1 0 1 0 2.2 3V3h3z" />
    </svg>
  );
}

export function PinterestIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M11 7c2.5 0 4.5 1.7 4.5 4.2 0 2.5-1.7 4.3-3.9 4.3-.8 0-1.4-.3-1.7-.8l-.6 2.5-.7 1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 4.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM4 9.5h4V20H4V9.5zM10 9.5h3.8v1.4h.1c.5-.9 1.8-1.7 3.4-1.7 3.6 0 4.3 2.4 4.3 5.4V20h-4v-4.7c0-1.1 0-2.5-1.6-2.5s-1.8 1.2-1.8 2.4V20H10V9.5z" />
    </svg>
  );
}
