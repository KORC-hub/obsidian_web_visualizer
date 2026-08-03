export type CalloutKind = "generic" | "note" | "tip" | "danger";

const CALLOUT_MARKER = /^\s*\[!(note|tip|danger|warning|info|hint|caution)\]\s*/i;

export function matchCalloutMarker(text: string): RegExpMatchArray | null {
  return text.match(CALLOUT_MARKER);
}

export function normalizeCalloutKind(value: string | undefined): CalloutKind {
  switch (value?.toLowerCase()) {
    case "note":
    case "info":
      return "note";
    case "tip":
    case "hint":
      return "tip";
    case "danger":
    case "warning":
    case "caution":
      return "danger";
    default:
      return "generic";
  }
}
