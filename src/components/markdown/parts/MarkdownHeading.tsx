import type { ReactNode } from "react";

type Level = 1 | 2 | 3 | 4 | 5 | 6;

const SIZE_BY_LEVEL: Record<Level, string> = {
  1: "mt-10 text-3xl font-semibold",
  2: "mt-9 text-2xl font-semibold",
  3: "mt-8 text-xl font-semibold",
  4: "mt-7 text-lg font-semibold",
  5: "mt-6 text-base font-semibold",
  6: "mt-5 text-sm font-semibold",
};

interface MarkdownHeadingProps {
  level: Level;
  id?: string | undefined;
  children: ReactNode;
}

export default function MarkdownHeading({ level, id, children }: MarkdownHeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      id={id}
      className={`${SIZE_BY_LEVEL[level]} tracking-tight text-(--note-heading) scroll-mt-28 first:mt-0`}
    >
      {children}
    </Tag>
  );
}
