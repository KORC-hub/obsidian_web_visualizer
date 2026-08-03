import type { ReactNode } from "react";
import { useCodeBlock } from "../../../hooks/useCodeBlock";
import CodeBlockHeader from "./CodeBlockHeader";
import CodeBlockBody, { type ShikiHighlighter } from "./CodeBlockBody";

interface CodeBlockProps {
  className: string | undefined;
  title: string | undefined;
  children: ReactNode;
  highlighter: ShikiHighlighter | null;
}

export default function CodeBlock({ className, title, children, highlighter }: CodeBlockProps) {
  const { collapsed, toggleCollapse, rawCode, language, lines, copy } = useCodeBlock(children, className);

  return (
    <section className="overflow-hidden border border-(--code-border) bg-(--code-bg) shadow-[0_14px_40px_rgba(0,0,0,0.24)]">
      <CodeBlockHeader
        language={language}
        title={title}
        collapsed={collapsed}
        onCopy={() => void copy()}
        onToggleCollapse={toggleCollapse}
      />
      {collapsed ? null : (
        <CodeBlockBody rawCode={rawCode} lines={lines} language={language} highlighter={highlighter} />
      )}
    </section>
  );
}
