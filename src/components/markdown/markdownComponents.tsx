import type { Components } from "react-markdown";
import MarkdownHeading from "./parts/MarkdownHeading";
import {
  MarkdownParagraph,
  MarkdownList,
  MarkdownListItem,
  MarkdownLink,
  MarkdownStrong,
  MarkdownEm,
  MarkdownBlockquote,
  MarkdownHr,
} from "./parts/MarkdownProse";
import {
  MarkdownTableWrapper,
  MarkdownThead,
  MarkdownTbody,
  MarkdownTr,
  MarkdownTh,
  MarkdownTd,
} from "./parts/MarkdownTable";
import MarkdownCallout from "./parts/MarkdownCallout";
import CodeBlock from "./codeBlocks/CodeBlock";
import type { ShikiHighlighter } from "./codeBlocks/CodeBlockBody";

export function createMarkdownComponents(highlighter: ShikiHighlighter | null): Components {
  return {
    code({ children, className }) {
      if (className?.startsWith("language-")) {
        return <code className={className}>{children}</code>;
      }
      return (
        <code className="rounded-md border border-(--code-inline-border) bg-(--code-inline-bg) px-1.5 py-0.5 font-mono text-[0.92em] text-(--code-inline-text)">
          {children}
        </code>
      );
    },
    pre({ children }) {
      const codeElement = children as {
        props?: { className?: string; children?: unknown; [key: string]: unknown };
      };
      const codeProps = codeElement.props;
      if (!codeProps) return <pre>{children}</pre>;

      const title =
        typeof codeProps["data-title"] === "string" ? codeProps["data-title"] : undefined;

      return (
        <CodeBlock className={codeProps.className} title={title} highlighter={highlighter}>
          {codeProps.children as React.ReactNode}
        </CodeBlock>
      );
    },
    h1: ({ children, id }) => (
      <MarkdownHeading level={1} id={id}>
        {children}
      </MarkdownHeading>
    ),
    h2: ({ children, id }) => (
      <MarkdownHeading level={2} id={id}>
        {children}
      </MarkdownHeading>
    ),
    h3: ({ children, id }) => (
      <MarkdownHeading level={3} id={id}>
        {children}
      </MarkdownHeading>
    ),
    h4: ({ children, id }) => (
      <MarkdownHeading level={4} id={id}>
        {children}
      </MarkdownHeading>
    ),
    h5: ({ children, id }) => (
      <MarkdownHeading level={5} id={id}>
        {children}
      </MarkdownHeading>
    ),
    h6: ({ children, id }) => (
      <MarkdownHeading level={6} id={id}>
        {children}
      </MarkdownHeading>
    ),
    p: ({ children }) => <MarkdownParagraph>{children}</MarkdownParagraph>,
    ul: ({ children }) => <MarkdownList>{children}</MarkdownList>,
    ol: ({ children }) => <MarkdownList ordered>{children}</MarkdownList>,
    li: ({ children }) => <MarkdownListItem>{children}</MarkdownListItem>,
    a: ({ children, href }) => <MarkdownLink href={href}>{children}</MarkdownLink>,
    strong: ({ children }) => <MarkdownStrong>{children}</MarkdownStrong>,
    em: ({ children }) => <MarkdownEm>{children}</MarkdownEm>,
    hr: () => <MarkdownHr />,
    table: ({ children }) => <MarkdownTableWrapper>{children}</MarkdownTableWrapper>,
    thead: ({ children }) => <MarkdownThead>{children}</MarkdownThead>,
    tbody: ({ children }) => <MarkdownTbody>{children}</MarkdownTbody>,
    tr: ({ children }) => <MarkdownTr>{children}</MarkdownTr>,
    th: ({ children }) => <MarkdownTh>{children}</MarkdownTh>,
    td: ({ children }) => <MarkdownTd>{children}</MarkdownTd>,
    // "callout" es un nodo custom generado únicamente por remarkCallouts (ver remark/remarkCallouts.ts).
    // No hay una segunda detección de callouts aquí: blockquote() de abajo ya nunca recibe uno.
    callout: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => {
      const kind = typeof props["data-kind"] === "string" ? props["data-kind"] : undefined;
      return <MarkdownCallout kind={kind}>{children}</MarkdownCallout>;
    },
    blockquote: ({ children }) => <MarkdownBlockquote>{children}</MarkdownBlockquote>,
    span: ({ children, className }) => <span className={className}>{children}</span>,
  } as Components;
}
