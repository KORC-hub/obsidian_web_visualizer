import type { ReactNode } from "react";
import {
  normalizeCalloutKind,
  type CalloutKind,
} from "../../../utils/markdown/callout/calloutKind";

interface CalloutTheme {
  background: string;
  border: string;
  accent: string;
  text: string;
}

const THEME_BY_KIND: Record<CalloutKind, CalloutTheme> = {
  generic: {
    background: "var(--callout-generic-bg)",
    border: "var(--callout-generic-border)",
    accent: "var(--callout-generic-accent)",
    text: "var(--callout-generic-text)",
  },
  note: {
    background: "var(--callout-note-bg)",
    border: "var(--callout-note-border)",
    accent: "var(--callout-note-accent)",
    text: "var(--callout-note-text)",
  },
  tip: {
    background: "var(--callout-tip-bg)",
    border: "var(--callout-tip-border)",
    accent: "var(--callout-tip-accent)",
    text: "var(--callout-tip-text)",
  },
  danger: {
    background: "var(--callout-danger-bg)",
    border: "var(--callout-danger-border)",
    accent: "var(--callout-danger-accent)",
    text: "var(--callout-danger-text)",
  },
};

const LABEL_BY_KIND: Record<CalloutKind, string> = {
  generic: "Nota",
  note: "Nota",
  tip: "Tip",
  danger: "Danger",
};

interface MarkdownCalloutProps {
  kind?: string | undefined;
  children: ReactNode;
}

export default function MarkdownCallout({ kind, children }: MarkdownCalloutProps) {
  const resolvedKind = normalizeCalloutKind(kind);
  const theme = THEME_BY_KIND[resolvedKind];

  return (
    <aside
      className="flex items-stretch gap-3 rounded-md border px-4 py-3"
      style={{
        backgroundColor: theme.background,
        borderColor: theme.border,
        color: theme.text,
        boxShadow: `inset 0 0 0 1px ${theme.accent}`,
      }}
    >
      <span className="w-1 shrink-0 rounded-full" style={{ backgroundColor: theme.accent }} />

      <div className="min-w-0 flex-1 space-y-3">
        <div
          className="text-xs font-semibold uppercase tracking-[0.22em]"
          style={{ color: theme.accent }}
        >
          {LABEL_BY_KIND[resolvedKind]}
        </div>
        <div className="space-y-3">{children}</div>
      </div>
    </aside>
  );
}
