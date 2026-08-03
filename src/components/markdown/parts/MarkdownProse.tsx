import type { ReactNode } from "react";

export function MarkdownParagraph({ children }: { children: ReactNode }) {
  return (
    <p className="my-4 text-[0.98rem] leading-7 text-(--note-text) first:mt-0 last:mb-0">
      {children}
    </p>
  );
}

export function MarkdownList({ ordered, children }: { ordered?: boolean; children: ReactNode }) {
  const Tag = ordered ? "ol" : "ul";
  const markerClass = ordered ? "list-decimal" : "list-disc";

  return (
    <Tag className={`my-4 ${markerClass} space-y-2 pl-6 text-(--note-text) marker:text-(--app-accent)`}>
      {children}
    </Tag>
  );
}

export function MarkdownListItem({ children }: { children: ReactNode }) {
  return (
    <li className="leading-7 [&>p]:my-0 [&>ul]:mt-2 [&>ol]:mt-2 [&>blockquote]:my-3">{children}</li>
  );
}

export function MarkdownLink({ children, href }: { children: ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="font-medium text-(--app-accent) underline decoration-(--app-accent)/40 underline-offset-4 transition hover:text-white"
    >
      {children}
    </a>
  );
}

export function MarkdownStrong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-(--note-heading)">{children}</strong>;
}

export function MarkdownEm({ children }: { children: ReactNode }) {
  return <em className="italic text-(--note-heading)">{children}</em>;
}

export function MarkdownBlockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="rounded-2xl border-l-4 border-(--app-accent) bg-(--note-bg-soft) px-4 py-3 text-(--note-text)">
      {children}
    </blockquote>
  );
}

export function MarkdownHr() {
  return <hr className="my-8 border-(--note-border)" />;
}
