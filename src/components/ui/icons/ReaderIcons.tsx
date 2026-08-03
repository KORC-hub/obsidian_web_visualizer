import type { ReactNode } from "react";

interface IconProps {
  className?: string;
}

function IconShell({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 16 16" fill="none">
      {children}
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <circle cx="7.1" cy="7.1" r="3.9" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="m10.1 10.1 2.65 2.65"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </IconShell>
  );
}

export function BookmarkIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M4.25 2.25h7.5v11.1l-3.5-2.15-3.5 2.15z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </IconShell>
  );
}

export function SortIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M3.5 4h5M3.5 8h7M3.5 12h9"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M11.6 3.5v9l1.85-1.9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconShell>
  );
}

export function CollapseAllIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M3.5 4.5h3v3h-3zM9.5 4.5h3v3h-3zM3.5 10.5h3v1.5h-3zM9.5 10.5h3v1.5h-3z"
        fill="currentColor"
      />
    </IconShell>
  );
}

export function ClosePanelIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path d="M4.25 3.25h7.5v9.5h-7.5z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 6l4 4M10 6l-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </IconShell>
  );
}

export function CopyIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <rect
        x="5.25"
        y="4.25"
        width="6.25"
        height="8"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M4.5 11.75H4a1 1 0 0 1-1-1v-6.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6 3.25h5.25a1 1 0 0 1 1 1V5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </IconShell>
  );
}

export function BacklinksIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M6.25 5.25h3.1a2.1 2.1 0 1 1 0 4.2H7.7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M9.75 10.75h-3.1a2.1 2.1 0 1 1 0-4.2H8.3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </IconShell>
  );
}

export function TagIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M3.75 6.1V3.75h2.35l5.9 5.9-2.35 2.35z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="6.1" cy="5.9" r=".7" fill="currentColor" />
    </IconShell>
  );
}

export function SidebarLeftIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <rect x="3" y="3" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6.25 3v10" stroke="currentColor" strokeWidth="1.2" />
    </IconShell>
  );
}

export function SidebarRightIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <rect x="3" y="3" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9.75 3v10" stroke="currentColor" strokeWidth="1.2" />
    </IconShell>
  );
}

export function LayoutIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <rect x="2.5" y="3" width="4" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
      <rect x="9.5" y="3" width="4" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
    </IconShell>
  );
}

export function ChecklistIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M4 4.5h2M7.25 4.5h4.25M4 8h2M7.25 8h4.25M4 11.5h2M7.25 11.5h4.25"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="m3.9 4.45.6.6.95-1"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m3.9 7.95.6.6.95-1"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m3.9 11.45.6.6.95-1"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconShell>
  );
}

export function TabsMenuIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M4 6.25h8M4 9.25h8M4 12.25h5.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </IconShell>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconShell>
  );
}
