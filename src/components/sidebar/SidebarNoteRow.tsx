import type { NoteRecord } from "../../utils/notes";
import FileIcon from "../ui/icons/FileIcon";

interface SidebarNoteRowProps {
  note: NoteRecord;
  depth: number;
  isActive: boolean;
  onOpenNote: (note: NoteRecord) => void;
}

export default function SidebarNoteRow({ note, depth, isActive, onOpenNote }: SidebarNoteRowProps) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm transition-colors hover:bg-(--sidebar-hover) ${
        isActive ? "bg-(--sidebar-active) text-(--sidebar-active-text)" : "text-(--app-text)"
      }`}
      style={{ paddingInlineStart: `calc(0.5rem + ${depth} * 0.85rem)` }}
      onClick={() => onOpenNote(note)}
    >
      <FileIcon className="h-4 w-4 shrink-0 text-(--app-text-soft)" />
      <span className="min-w-0 flex-1 truncate font-medium">{note.title}</span>
    </button>
  );
}
