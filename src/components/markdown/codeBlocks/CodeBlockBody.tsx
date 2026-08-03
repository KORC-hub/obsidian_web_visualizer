export type ShikiHighlighter = {
  codeToTokens: (
    code: string,
    options: { lang: string; theme: string },
  ) => {
    tokens: Array<Array<{ content: string; color?: string }>>;
    fg?: string;
    bg?: string;
  };
};

const SHIKI_THEME = "vscode-dark-plus";

const gutterClass =
  "select-none border-r border-(--code-border) bg-(--code-gutter-bg) px-3 py-4 text-right font-mono text-xs leading-6 text-(--code-line-number) tabular-nums";
const codeClass =
  "min-w-0 overflow-x-auto bg-(--code-panel-strong) px-4 py-4 font-mono text-[0.92rem] leading-6 text-(--note-heading)";

function LineNumbers({ count, language }: { count: number; language: string }) {
  return (
    <div className={gutterClass} aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <span key={`${language}-ln-${index}`} className="block pr-1.5">
          {index + 1}
        </span>
      ))}
    </div>
  );
}

function HighlightedBody({
  rawCode,
  language,
  highlighter,
}: {
  rawCode: string;
  language: string;
  highlighter: ShikiHighlighter;
}) {
  const { tokens, fg, bg } = highlighter.codeToTokens(rawCode, { lang: language, theme: SHIKI_THEME });

  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] overflow-x-auto">
      <LineNumbers count={tokens.length} language={language} />
      <div className={codeClass} style={{ backgroundColor: bg ?? "var(--code-panel-strong)" }}>
        {tokens.map((line, lineIndex) => (
          <div key={`${language}-line-${lineIndex}`} className="whitespace-pre">
            {line.length ? (
              line.map((token, tokenIndex) => (
                <span
                  key={`${language}-tok-${lineIndex}-${tokenIndex}`}
                  style={{ color: token.color ?? fg ?? "inherit" }}
                >
                  {token.content || "\u00A0"}
                </span>
              ))
            ) : (
              <span>&nbsp;</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PlainBody({ lines, language }: { lines: string[]; language: string }) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] overflow-x-auto">
      <LineNumbers count={lines.length} language={language} />
      <div className={codeClass}>
        {lines.map((line, index) => (
          <div key={`${language}-line-${index}`} className="whitespace-pre">
            {line || "\u00A0"}
          </div>
        ))}
      </div>
    </div>
  );
}

interface CodeBlockBodyProps {
  rawCode: string;
  lines: string[];
  language: string;
  highlighter: ShikiHighlighter | null;
}

export default function CodeBlockBody({ rawCode, lines, language, highlighter }: CodeBlockBodyProps) {
  if (highlighter && language !== "text") {
    return <HighlightedBody rawCode={rawCode} language={language} highlighter={highlighter} />;
  }

  return <PlainBody lines={lines} language={language} />;
}
