import PinIcon from "../ui/icons/PinIcon";
import CloseIcon from "../ui/icons/CloseIcon";
import FileIcon from "../ui/icons/FileIcon";

export interface TabItemModel {
  id: string;
  title: string;
  pinned: boolean;
}

interface TabItemProps {
  tab: TabItemModel;
  isActive: boolean;
  onSelectTab: (tabId: string) => void;
  onTogglePin: (tabId: string) => void;
  onCloseTab: (tabId: string) => void;
}

const actionButtonClass =
  "grid h-full w-9 place-items-center text-(--tab-text) transition hover:bg-(--tab-hover) hover:text-(--tab-active-text) focus:outline-none focus:ring-2 focus:ring-inset focus:ring-(--tab-active-ring)";

export default function TabItem({
  tab,
  isActive,
  onSelectTab,
  onTogglePin,
  onCloseTab,
}: TabItemProps) {
  const iconColorClass = tab.pinned ? "text-(--app-accent)" : "text-current";
  const nameClass = isActive ? "text-white underline" : "";

  return (
    <div
      className="group my-2 flex min-w-40 max-w-72 items-stretch overflow-hidden border-0 border-l-3 border-(--tab-border) bg-(--tab-bg) text-(--tab-text) transition-colors hover:bg-(--tab-hover)"
      role="tab"
      aria-selected={isActive}
      onContextMenu={(event) => {
        event.preventDefault();
        onTogglePin(tab.id);
      }}
    >
      <button
        type="button"
        className="flex min-w-0 flex-1 items-center gap-2 px-4 py-2.5 text-left text-sm font-medium leading-5 transition focus:outline-none focus:ring-2 focus:ring-(--tab-active-ring)"
        onClick={() => onSelectTab(tab.id)}
      >
        <FileIcon className={`h-4 w-4 shrink-0 opacity-75`} />
        <span className={`truncate ${nameClass}`}>{tab.title}</span>
      </button>

      <button
        type="button"
        className={actionButtonClass}
        onClick={() => onTogglePin(tab.id)}
        aria-label={tab.pinned ? `Despinear ${tab.title}` : `Pinear ${tab.title}`}
        title={tab.pinned ? "Despinear pestaña" : "Pinear pestaña"}
      >
        <PinIcon pinned={tab.pinned} className={`h-4 w-4 shrink-0 opacity-75 ${iconColorClass}`} />
      </button>
      <button
        type="button"
        className={actionButtonClass}
        onClick={() => onCloseTab(tab.id)}
        aria-label={`Cerrar ${tab.title}`}
        title="Cerrar pestaña"
      >
        <CloseIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
