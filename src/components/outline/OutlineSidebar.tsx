import type { MarkdownHeadingItem } from "../../utils/markdown/utils";
import { ClosePanelIcon, LayoutIcon, SearchIcon } from "../ui/icons/ReaderIcons";

interface OutlineSidebarProps {
  headings: MarkdownHeadingItem[];
  activeTitle?: string | undefined;
  visible: boolean;
  onShow: () => void;
  onClose: () => void;
  onJumpToHeading: (headingId: string) => void;
}

function OutlineItem({
  heading,
  onJumpToHeading,
}: {
  heading: MarkdownHeadingItem;
  onJumpToHeading: (headingId: string) => void;
}) {
  const indentClass =
    heading.level === 1
      ? "pl-0"
      : heading.level === 2
        ? "pl-2"
        : heading.level === 3
          ? "pl-4"
          : "pl-6";

  return (
    <button
      type="button"
      className={`block w-full rounded-md px-2 py-1.5 text-left text-sm text-(--app-text-soft) transition hover:bg-white/5 hover:text-(--app-text) ${indentClass}`}
      onClick={() => onJumpToHeading(heading.id)}
    >
      <span className="line-clamp-2">{heading.text}</span>
    </button>
  );
}

export default function OutlineSidebar({
  headings,
  activeTitle,
  visible,
  onShow,
  onClose,
  onJumpToHeading,
}: OutlineSidebarProps) {
  if (!visible) {
    return (
      <div className="flex h-full w-0 shrink-0 items-start justify-center overflow-hidden border-l border-(--app-border) bg-(--sidebar-bg)">
        <button
          type="button"
          className="mt-4 rounded-full border border-(--app-border-strong) bg-(--sidebar-header-bg) px-3 py-2 text-xs font-medium text-(--app-text) shadow-lg shadow-black/20 transition hover:bg-(--sidebar-hover)"
          onClick={onShow}
          aria-label="Mostrar índice de encabezados"
        >
          Índice
        </button>
      </div>
    );
  }

  return (
    <aside className="flex h-full min-w-0 shrink-0 flex-col overflow-hidden border-l border-(--app-border) bg-(--sidebar-bg)">
      <div className="panel-scrollbar flex-1 overflow-auto p-3">
        {headings.length ? (
          <div className="space-y-1">
            {headings.map((heading) => (
              <OutlineItem key={heading.id} heading={heading} onJumpToHeading={onJumpToHeading} />
            ))}
          </div>
        ) : (
          <p className="px-3 py-4 text-sm text-(--app-text-soft)">
            No hay encabezados en esta nota.
          </p>
        )}
      </div>
    </aside>
  );
}
