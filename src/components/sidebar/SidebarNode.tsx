import type { NoteRecord, TreeNode } from "../../utils/notes";
import SidebarFolderRow from "./SidebarFolderRow";
import SidebarNoteRow from "./SidebarNoteRow";

interface SidebarNodeProps {
  node: TreeNode;
  depth: number;
  activeNoteId: string | null;
  expandedFolders: ReadonlySet<string>;
  isFiltering: boolean;
  onToggleFolder: (folderPath: string) => void;
  onOpenNote: (note: NoteRecord) => void;
  onOpenFolderIndex: (noteId: string) => void;
  onCountChildren: (folderPath: string, visibleChildren: number) => number;
}

export default function SidebarNode({
  node,
  depth,
  activeNoteId,
  expandedFolders,
  isFiltering,
  onToggleFolder,
  onOpenNote,
  onOpenFolderIndex,
  onCountChildren,
}: SidebarNodeProps) {
  if (node.type === "note") {
    return (
      <SidebarNoteRow
        note={node.note}
        depth={depth}
        isActive={node.note.id === activeNoteId}
        onOpenNote={onOpenNote}
      />
    );
  }

  const isExpanded = isFiltering || expandedFolders.has(node.path);
  const hasIndexNote = Boolean(node.indexNoteId);
  const isIndexActive = hasIndexNote && node.indexNoteId === activeNoteId;
  const visibleChildren = node.children.filter(
    (child) => child.type === "folder" || child.note.id !== node.indexNoteId,
  );
  const childCount = onCountChildren(node.path, visibleChildren.length);

  return (
    <div className="space-y-1">
      <SidebarFolderRow
        name={node.name}
        path={node.path}
        depth={depth}
        isExpanded={isExpanded}
        isActive={isIndexActive}
        hasIndexNote={hasIndexNote}
        childCount={childCount}
        onToggleFolder={onToggleFolder}
        onOpenIndexNote={() => onOpenFolderIndex(node.indexNoteId ?? node.path)}
      />

      {isExpanded ? (
        <div className="ml-2 space-y-1 pl-2">
          {visibleChildren.map((child) => (
            <SidebarNode
              key={child.type === "folder" ? child.path : child.note.id}
              node={child}
              depth={depth + 1}
              activeNoteId={activeNoteId}
              expandedFolders={expandedFolders}
              isFiltering={isFiltering}
              onToggleFolder={onToggleFolder}
              onOpenNote={onOpenNote}
              onOpenFolderIndex={onOpenFolderIndex}
              onCountChildren={onCountChildren}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
