import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { createMarkdownComponents } from "./markdownComponents";
import remarkCodeTitles from "../../utils/markdown/remark/remarkCodeTitles";
import remarkCallouts from "../../utils/markdown/remark/remarkCallouts";
import remarkHeadingIds from "../../utils/markdown/remark/remarkHeadingIds";
import type { ShikiHighlighter } from "./codeBlocks/CodeBlockBody";

const SHIKI_LANGUAGES = [
  "ts",
  "tsx",
  "js",
  "jsx",
  "json",
  "bash",
  "python",
  "sql",
  "yaml",
  "markdown",
] as const;

function useShikiHighlighter(): ShikiHighlighter | null {
  const [highlighter, setHighlighter] = useState<ShikiHighlighter | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const { createHighlighter } = await import("shiki");
      const instance = (await createHighlighter({
        langs: [...SHIKI_LANGUAGES],
        themes: ["vscode-dark-plus"],
      })) as unknown as ShikiHighlighter;

      if (!cancelled) setHighlighter(instance);
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  return highlighter;
}

interface MarkdownViewerProps {
  content: string;
}

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
  const highlighter = useShikiHighlighter();
  const components = createMarkdownComponents(highlighter);

  return (
    <div className="space-y-6 text-(--note-text)">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkCodeTitles, remarkCallouts, remarkHeadingIds]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
