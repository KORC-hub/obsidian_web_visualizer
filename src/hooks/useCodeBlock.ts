import { useMemo, useState } from "react";

const LANGUAGE_BADGES: Record<string, string> = {
  ts: "TS",
  tsx: "TSX",
  js: "JS",
  jsx: "JSX",
  json: "{}",
  bash: "$",
  python: "PY",
  sql: "SQL",
  yaml: "YML",
  markdown: "MD",
};

export function normalizeLanguage(className: string | undefined): string {
  const raw = className?.replace(/^language-/, "").trim();

  if (!raw) return "text";
  if (raw === "shell" || raw === "shellscript" || raw === "sh") return "bash";
  return raw;
}

export function getLanguageBadge(language: string): string {
  return LANGUAGE_BADGES[language] ?? language.slice(0, 3).toUpperCase();
}

export function useCodeBlock(rawChildren: unknown, className: string | undefined) {
  const [collapsed, setCollapsed] = useState(false);

  const rawCode = useMemo(() => String(rawChildren).replace(/\n$/, ""), [rawChildren]);
  const language = useMemo(() => normalizeLanguage(className), [className]);
  const lines = useMemo(() => rawCode.split("\n"), [rawCode]);

  const copy = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    await navigator.clipboard.writeText(rawCode);
  };

  return {
    collapsed,
    toggleCollapse: () => setCollapsed((current) => !current),
    rawCode,
    language,
    lines,
    copy,
  };
}
