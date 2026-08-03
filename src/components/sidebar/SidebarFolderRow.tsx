import ChevronIcon from "../ui/icons/ChevronIcon";
import FolderIcon from "../ui/icons/FolderIcon";
import TechnologyLogo, { hasTechnologyLogo } from "../ui/icons/TechnologyLogo";

interface SidebarFolderRowProps {
  name: string;
  path: string;
  depth: number;
  isExpanded: boolean;
  isActive: boolean;
  hasIndexNote: boolean;
  childCount: number;
  onToggleFolder: (folderPath: string) => void;
  onOpenIndexNote: () => void;
}

export default function SidebarFolderRow({
  name,
  path,
  depth,
  isExpanded,
  isActive,
  hasIndexNote,
  childCount,
  onToggleFolder,
  onOpenIndexNote,
}: SidebarFolderRowProps) {
  return (
    <div
      className={`flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-(--sidebar-hover) ${
        isActive
          ? "bg-(--sidebar-active) text-(--sidebar-active-text) ring-1 ring-inset ring-(--app-accent)/25"
          : "text-[var(--app-text)]"
      }`}
      style={{ paddingInlineStart: `calc(0.5rem + ${depth} * 0.85rem)` }}
    >
      <button
        type="button"
        className="grid h-5 w-5 place-items-center rounded-md text-(--app-text-soft) transition hover:bg-(--sidebar-hover) hover:text-(--app-text) focus:outline-none focus:ring-2 focus:ring-(--app-accent)/60"
        onClick={() => onToggleFolder(path)}
        aria-label={isExpanded ? `Contraer ${name}` : `Expandir ${name}`}
      >
        <ChevronIcon open={isExpanded} className="h-4 w-4" />
      </button>
      {hasTechnologyLogo(name) ? (
        <TechnologyLogo name={name} className="h-4 w-4 text-(--app-accent)" />
      ) : (
        <FolderIcon className="h-4 w-4 text-(--app-text-soft)" />
      )}
      {hasIndexNote ? (
        <button
          type="button"
          className="min-w-0 flex-1 truncate text-left font-medium text-(--app-accent-soft) underline-offset-4 transition hover:text-(--sidebar-active-text) hover:underline focus:outline-none focus:ring-2 focus:ring-(--app-accent)/60"
          onClick={onOpenIndexNote}
        >
          {name}
        </button>
      ) : (
        <button
          type="button"
          className="min-w-0 flex-1 truncate text-left font-medium text-(--app-text) transition hover:text-(--sidebar-active-text) focus:outline-none focus:ring-2 focus:ring-(--app-accent)/60"
          onClick={() => onToggleFolder(path)}
        >
          {name}
        </button>
      )}
      <span className="ml-auto shrink-0 text-[0.72rem] font-medium text-(--app-text-soft)/85">
        {childCount}
      </span>
    </div>
  );
}
