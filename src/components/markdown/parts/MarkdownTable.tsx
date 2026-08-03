import type { ReactNode } from "react";

export function MarkdownTableWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-(--note-border) bg-(--note-bg-soft) shadow-lg shadow-black/15">
      <table className="min-w-full border-collapse text-left text-sm">{children}</table>
    </div>
  );
}

export function MarkdownThead({ children }: { children: ReactNode }) {
  return <thead className="bg-(--note-bg) text-(--note-heading)">{children}</thead>;
}

export function MarkdownTbody({ children }: { children: ReactNode }) {
  return <tbody className="divide-y divide-(--note-border)">{children}</tbody>;
}

export function MarkdownTr({ children }: { children: ReactNode }) {
  return <tr className="border-b border-(--note-border) last:border-0">{children}</tr>;
}

export function MarkdownTh({ children }: { children: ReactNode }) {
  return <th className="px-4 py-3 font-semibold text-(--note-heading)">{children}</th>;
}

export function MarkdownTd({ children }: { children: ReactNode }) {
  return <td className="px-4 py-3 align-top text-(--note-text)">{children}</td>;
}
