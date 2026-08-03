import { useEffect, useMemo, useState, type PointerEvent as ReactPointerEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getFirstNoteId,
  noteTree,
  notesById,
  noteIdToRoutePath,
  routePathToNoteId,
  type NoteRecord,
  type TreeNode,
} from "./utils/notes";
import Sidebar from "./components/sidebar/Sidebar";
import TabBar from "./components/tabs/TabBar";
import MarkdownViewer from "./components/markdown/MarkdownViewer";
import OutlineSidebar from "./components/outline/OutlineSidebar";
import type { TabItemModel } from "./components/tabs/TabItem";
import { extractMarkdownHeadings } from "./utils/markdown/utils";
import PinIcon from "./components/ui/icons/PinIcon";
import {
  BacklinksIcon,
  BookmarkIcon,
  ChecklistIcon,
  SearchIcon,
  SidebarLeftIcon,
  SidebarRightIcon,
  TagIcon,
  TabsMenuIcon,
} from "./components/ui/icons/ReaderIcons";

import { BsLayoutSidebarInset, BsLayoutSidebarInsetReverse } from "react-icons/bs";

interface OpenTab extends TabItemModel {
  noteId: string;
}

function collectFolderPaths(nodes: TreeNode[]): string[] {
  const folders: string[] = [];

  for (const node of nodes) {
    if (node.type === "folder") {
      folders.push(node.path, ...collectFolderPaths(node.children));
    }
  }

  return folders;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const firstNoteId = useMemo(() => getFirstNoteId(), []);
  const activeRouteNoteId = useMemo(
    () => routePathToNoteId(location.pathname),
    [location.pathname],
  );

  const [tabs, setTabs] = useState<OpenTab[]>(() => {
    if (activeRouteNoteId && notesById.has(activeRouteNoteId)) {
      const note = notesById.get(activeRouteNoteId);

      if (note) {
        return [
          {
            id: note.id,
            noteId: note.id,
            title: note.title,
            pinned: false,
          },
        ];
      }
    }

    return [];
  });
  const [activeTabId, setActiveTabId] = useState<string | null>(activeRouteNoteId ?? firstNoteId);
  const [expandedFolders, setExpandedFolders] = useState<ReadonlySet<string>>(
    () => new Set(collectFolderPaths(noteTree.children)),
  );
  const [leftSidebarPinned, setLeftSidebarPinned] = useState(true);
  const [rightSidebarPinned, setRightSidebarPinned] = useState(true);
  const [leftSidebarVisible, setLeftSidebarVisible] = useState(true);
  const [rightSidebarVisible, setRightSidebarVisible] = useState(true);
  const [leftSidebarWidth, setLeftSidebarWidth] = useState(370);
  const [rightSidebarWidth, setRightSidebarWidth] = useState(310);

  useEffect(() => {
    if (activeRouteNoteId && notesById.has(activeRouteNoteId)) {
      setTabs((currentTabs) => {
        const existingIndex = currentTabs.findIndex((tab) => tab.noteId === activeRouteNoteId);

        if (existingIndex >= 0) {
          return currentTabs;
        }

        const previewIndex = currentTabs.findIndex((tab) => !tab.pinned);

        if (previewIndex >= 0) {
          const nextTabs = [...currentTabs];
          const previewTab = nextTabs[previewIndex]!;
          nextTabs[previewIndex] = {
            id: activeRouteNoteId,
            noteId: activeRouteNoteId,
            title: notesById.get(activeRouteNoteId)?.title ?? activeRouteNoteId,
            pinned: previewTab.pinned,
          };

          return nextTabs;
        }

        return [
          ...currentTabs,
          {
            id: activeRouteNoteId,
            noteId: activeRouteNoteId,
            title: notesById.get(activeRouteNoteId)?.title ?? activeRouteNoteId,
            pinned: false,
          },
        ];
      });

      setActiveTabId(activeRouteNoteId);
      return;
    }

    if (!activeRouteNoteId && firstNoteId) {
      navigate(noteIdToRoutePath(firstNoteId), { replace: true });
    }
  }, [activeRouteNoteId, firstNoteId, navigate]);

  useEffect(() => {
    if (!activeTabId && tabs.length > 0) {
      setActiveTabId(tabs[0]?.noteId ?? null);
    }
  }, [activeTabId, tabs]);

  const activeNote = activeTabId ? notesById.get(activeTabId) : undefined;
  const activeNoteHeadings = useMemo(
    () => (activeNote ? extractMarkdownHeadings(activeNote.content) : []),
    [activeNote],
  );

  useEffect(() => {
    if (activeNote && !leftSidebarPinned) {
      setLeftSidebarVisible(false);
    }

    if (activeNote && !rightSidebarPinned) {
      setRightSidebarVisible(false);
    }
  }, [activeTabId, activeNote, leftSidebarPinned, rightSidebarPinned]);

  const openNote = (note: NoteRecord, pinned = false) => {
    setTabs((currentTabs) => {
      const existingIndex = currentTabs.findIndex((tab) => tab.noteId === note.id);

      if (existingIndex >= 0) {
        const nextTabs = [...currentTabs];
        const existingTab = nextTabs[existingIndex]!;

        nextTabs[existingIndex] = {
          id: existingTab.id,
          noteId: existingTab.noteId,
          title: note.title,
          pinned: pinned ? true : existingTab.pinned,
        };

        return nextTabs;
      }

      if (pinned) {
        return [
          ...currentTabs,
          {
            id: note.id,
            noteId: note.id,
            title: note.title,
            pinned: true,
          },
        ];
      }

      const previewIndex = currentTabs.findIndex((tab) => !tab.pinned);

      if (previewIndex >= 0) {
        const nextTabs = [...currentTabs];
        const previewTab = nextTabs[previewIndex]!;

        nextTabs[previewIndex] = {
          id: note.id,
          noteId: note.id,
          title: note.title,
          pinned: previewTab.pinned,
        };

        return nextTabs;
      }

      return [
        ...currentTabs,
        {
          id: note.id,
          noteId: note.id,
          title: note.title,
          pinned: false,
        },
      ];
    });

    setActiveTabId(note.id);
    navigate(noteIdToRoutePath(note.id));

    if (!leftSidebarPinned) {
      setLeftSidebarVisible(false);
    }

    if (!rightSidebarPinned) {
      setRightSidebarVisible(false);
    }
  };

  const openFolderIndex = (noteId: string) => {
    const note = notesById.get(noteId);

    if (note) {
      openNote(note);
    }
  };

  const togglePin = (tabId: string) => {
    setTabs((currentTabs) =>
      currentTabs.map((tab) => (tab.noteId === tabId ? { ...tab, pinned: !tab.pinned } : tab)),
    );
  };

  const closeTab = (tabId: string) => {
    setTabs((currentTabs) => currentTabs.filter((tab) => tab.noteId !== tabId));

    if (activeTabId === tabId) {
      const remainingTabs = tabs.filter((tab) => tab.noteId !== tabId);
      const nextTab = remainingTabs[0];

      if (nextTab) {
        setActiveTabId(nextTab.noteId);
        navigate(noteIdToRoutePath(nextTab.noteId), { replace: true });
      } else if (firstNoteId) {
        setActiveTabId(firstNoteId);
        navigate(noteIdToRoutePath(firstNoteId), { replace: true });
      } else {
        setActiveTabId(null);
      }
    }
  };

  const selectTab = (tabId: string) => {
    setActiveTabId(tabId);
    navigate(noteIdToRoutePath(tabId));
  };

  const toggleFolder = (folderPath: string) => {
    setExpandedFolders((currentExpanded) => {
      const next = new Set(currentExpanded);

      if (next.has(folderPath)) {
        next.delete(folderPath);
      } else {
        next.add(folderPath);
      }

      return next;
    });
  };

  const collapseAllFolders = () => {
    setExpandedFolders(new Set<string>());
  };

  const tabItems = tabs.map(({ noteId, title, pinned }) => ({
    id: noteId,
    title,
    pinned,
  }));
  const quickAccessTabs = tabs.slice(0, 6);

  const beginResize = (side: "left" | "right", event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    const startX = event.clientX;
    const startWidth = side === "left" ? leftSidebarWidth : rightSidebarWidth;
    const minWidth = 240;
    const maxWidth = Math.floor(window.innerWidth * 0.5);

    const handleMove = (moveEvent: PointerEvent) => {
      const delta = moveEvent.clientX - startX;
      const nextWidth = side === "left" ? startWidth + delta : startWidth - delta;
      const next = clamp(nextWidth, minWidth, maxWidth);

      if (side === "left") {
        setLeftSidebarWidth(next);
      } else {
        setRightSidebarWidth(next);
      }
    };

    const handleUp = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  };

  const jumpToHeading = (headingId: string) => {
    const target = document.getElementById(headingId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-(--app-bg) text-(--app-text)">
      <header className="border-b border-(--app-border) bg-(--app-toolbar)">
        <div className="flex items-center gap-3 overflow-x-auto px-3 panel-scrollbar">
          <div className="flex items-center pr-1">
          </div>
          <div className="flex-1 flex items-center gap-1">
            <TabBar
              tabs={tabItems}
              activeTabId={activeTabId}
              onSelectTab={selectTab}
              onTogglePin={togglePin}
              onCloseTab={closeTab}
            />
          </div>
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-md text-(--app-text-soft) transition hover:bg-(--sidebar-hover) hover:text-(--app-text)"
            onClick={() => setRightSidebarVisible((current) => !current)}
            aria-label={rightSidebarVisible ? "Ocultar índice" : "Mostrar índice"}
          >
            <BsLayoutSidebarInsetReverse className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div
        className="grid min-h-0 flex-1"
        style={{
          gridTemplateColumns: `${leftSidebarVisible ? `${leftSidebarWidth}px` : "0px"} ${leftSidebarVisible ? "1px" : "0px"} minmax(0, 1fr) ${rightSidebarVisible ? "1px" : "0px"} ${rightSidebarVisible ? `${rightSidebarWidth}px` : "0px"}`,
        }}
      >
        {leftSidebarVisible ? (
          <Sidebar
            tree={noteTree}
            activeNoteId={activeTabId}
            expandedFolders={expandedFolders}
            onToggleFolder={toggleFolder}
            onCollapseAll={collapseAllFolders}
            onOpenNote={(note) => openNote(note)}
            onOpenFolderIndex={openFolderIndex}
            onClose={() => setLeftSidebarVisible(false)}
          />
        ) : null}

        {leftSidebarVisible ? (
          <div
            className="group z-10 bg-transparent transition hover:bg-(--app-border-strong)"
            onPointerDown={(event) => beginResize("left", event)}
            role="separator"
            aria-orientation="vertical"
            aria-label="Redimensionar panel izquierdo"
          />
        ) : null}

        <main className="grid min-h-0 min-w-0 grid-rows-[auto_minmax(0,1fr)] overflow-hidden bg-(--app-bg)">
          <section className="note-scrollbar min-h-0 overflow-auto px-6 py-6 lg:px-10">
            <div className="mx-auto max-w-250">
              {activeNote ? (
                <MarkdownViewer content={activeNote.content} />
              ) : (
                <div className="flex min-h-[40vh] flex-col justify-center border-0 px-8 py-10 text-center">
                  <p className="text-lg font-semibold tracking-tight text-(--note-heading)">
                    No hay una nota abierta
                  </p>
                  <p className="mt-2 text-sm leading-6 text-(--app-text-soft)">
                    Selecciona una nota en el panel lateral para verla aquí.
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>

        {rightSidebarVisible ? (
          <div
            className="group z-10 bg-transparent transition hover:bg-(--app-border-strong)"
            onPointerDown={(event) => beginResize("right", event)}
            role="separator"
            aria-orientation="vertical"
            aria-label="Redimensionar panel derecho"
          />
        ) : null}

        {rightSidebarVisible ? (
          <OutlineSidebar
            headings={activeNoteHeadings}
            activeTitle={activeNote?.title}
            visible={rightSidebarVisible}
            onShow={() => setRightSidebarVisible(true)}
            onClose={() => setRightSidebarVisible(false)}
            onJumpToHeading={jumpToHeading}
          />
        ) : null}
      </div>
    </div>
  );
}
