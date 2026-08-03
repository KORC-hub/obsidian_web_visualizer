import { useMemo, useState } from "react";
import type { FolderNode, NoteRecord } from "../../utils/notes";
import SidebarNode from "./SidebarNode";
import { BiCollapseVertical } from "react-icons/bi";

interface SidebarProps {
  tree: FolderNode;
  activeNoteId: string | null;
  expandedFolders: ReadonlySet<string>;
  onToggleFolder: (folderPath: string) => void;
  onCollapseAll: () => void;
  onOpenNote: (note: NoteRecord) => void;
  onOpenFolderIndex: (noteId: string) => void;
  onClose: () => void;
}

export default function Sidebar({
  tree,
  activeNoteId,
  expandedFolders,
  onToggleFolder,
  onCollapseAll,
  onOpenNote,
  onOpenFolderIndex,
  onClose,
}: SidebarProps) {
  const [sortMode, setSortMode] = useState<"alpha" | "reverse">("alpha");
  const sortedTree = useMemo(() => {
    const sortFolder = (folder: FolderNode): FolderNode => {
      const children = folder.children
        .map((child) => (child.type === "folder" ? sortFolder(child) : child))
        .sort((left, right) => {
          const leftName = left.type === "folder" ? left.name : left.note.title;
          const rightName = right.type === "folder" ? right.name : right.note.title;
          const comparison = leftName.localeCompare(rightName, "es", {
            numeric: true,
            sensitivity: "base",
          });

          return sortMode === "alpha" ? comparison : comparison * -1;
        });

      return { ...folder, children };
    };

    return sortFolder(tree);
  }, [sortMode, tree]);

  return (
    <aside className="flex h-full min-w-0 shrink-0 flex-col overflow-hidden border-r border-(--app-border) bg-(--sidebar-bg)">
      <div className="flex h-10 items-center justify-between gap-2 border-b border-(--app-border) bg-(--sidebar-header-bg) px-3">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-md text-(--app-text-soft) transition hover:bg-(--sidebar-hover) hover:text-(--app-text) focus:outline-none focus:ring-2 focus:ring-(--app-accent)/60"
            onClick={onCollapseAll}
            aria-label="Colapsar todo"
          >
            <BiCollapseVertical className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="panel-scrollbar flex-1 overflow-auto p-2">
        {sortedTree.children.length ? (
          sortedTree.children.map((node) => (
            <SidebarNode
              key={node.type === "folder" ? node.path : node.note.id}
              node={node}
              depth={0}
              activeNoteId={activeNoteId}
              expandedFolders={expandedFolders}
              isFiltering={false}
              onToggleFolder={onToggleFolder}
              onOpenNote={onOpenNote}
              onOpenFolderIndex={onOpenFolderIndex}
              onCountChildren={(_, count) => count}
            />
          ))
        ) : (
          <div className="px-4 py-6 text-sm text-(--app-text-soft)">
            No hay notas Markdown en /file.
          </div>
        )}
      </div>
    </aside>
  );
}
