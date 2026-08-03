const noteModules = import.meta.glob("/files/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const pathCollator = new Intl.Collator("es", { numeric: true, sensitivity: "base" });

const rootPrefix = "/files/";

// Rutas exactas (relativas a /file/) que se excluyen del sidebar, aunque contengan .md.
// Ejemplo: "archivo/adjuntos-viejos"
const IGNORED_FOLDER_PATHS = new Set<string>([]);

// Nombres de carpeta que se ignoran sin importar en qué profundidad aparezcan.
// Ejemplo: "pdfs" ignora cualquier carpeta llamada "pdfs" en cualquier nivel.
const IGNORED_FOLDER_NAMES = new Set<string>([".obsidian"]);

export interface NoteRecord {
  id: string;
  title: string;
  content: string;
  routePath: string;
  folderPath: string;
  folderSegments: string[];
  isFolderIndex: boolean;
}

export interface NoteFileNode {
  type: "note";
  note: NoteRecord;
}

export interface FolderNode {
  type: "folder";
  name: string;
  path: string;
  indexNoteId?: string;
  children: TreeNode[];
}

export type TreeNode = NoteFileNode | FolderNode;

function normalizeModulePath(modulePath: string): string {
  return modulePath.startsWith(rootPrefix) ? modulePath.slice(rootPrefix.length) : modulePath;
}

function getTitleFromPath(relativePath: string): string {
  const fileName = relativePath.split("/").at(-1) ?? relativePath;
  return fileName.replace(/\.md$/i, "");
}

export function noteIdToRoutePath(noteId: string): string {
  return `/${noteId.split("/").map(encodeURIComponent).join("/")}`;
}

export function routePathToNoteId(routePath: string): string | null {
  const trimmed = routePath.replace(/^\/+/, "");
  if (!trimmed) return null;

  return trimmed.split("/").map(decodeURIComponent).join("/");
}

/** true si algún segmento de la ruta cae dentro de una carpeta ignorada. */
function isIgnoredFolder(folderSegments: string[]): boolean {
  let currentPath = "";

  for (const segment of folderSegments) {
    currentPath = currentPath ? `${currentPath}/${segment}` : segment;

    if (IGNORED_FOLDER_NAMES.has(segment) || IGNORED_FOLDER_PATHS.has(currentPath)) {
      return true;
    }
  }

  return false;
}

function createNoteRecord(modulePath: string, content: string): NoteRecord {
  const id = normalizeModulePath(modulePath);
  const folderSegments = id.split("/").slice(0, -1);
  const title = getTitleFromPath(id);

  return {
    id,
    title,
    content,
    routePath: noteIdToRoutePath(id),
    folderPath: folderSegments.join("/"),
    folderSegments,
    isFolderIndex: folderSegments.length > 0 && folderSegments.at(-1) === title,
  };
}

function ensureFolder(root: FolderNode, segments: string[]): FolderNode {
  let current = root;
  let currentPath = "";

  for (const segment of segments) {
    currentPath = currentPath ? `${currentPath}/${segment}` : segment;
    const existing = current.children.find(
      (child): child is FolderNode => child.type === "folder" && child.name === segment,
    );

    if (existing) {
      current = existing;
      continue;
    }

    const nextFolder: FolderNode = {
      type: "folder",
      name: segment,
      path: currentPath,
      children: [],
    };
    current.children.push(nextFolder);
    current = nextFolder;
  }

  return current;
}

function sortChildren(node: FolderNode): void {
  node.children.sort((left, right) => {
    if (left.type !== right.type) {
      return left.type === "folder" ? -1 : 1;
    }

    const leftName = left.type === "folder" ? left.name : left.note.title;
    const rightName = right.type === "folder" ? right.name : right.note.title;

    return pathCollator.compare(leftName, rightName);
  });

  for (const child of node.children) {
    if (child.type === "folder") sortChildren(child);
  }
}

function buildTree(notes: NoteRecord[]): FolderNode {
  const root: FolderNode = { type: "folder", name: "", path: "", children: [] };

  for (const note of notes) {
    const folder = ensureFolder(root, note.folderSegments);

    if (note.isFolderIndex) {
      folder.indexNoteId = note.id;
    }

    folder.children.push({ type: "note", note });
  }

  sortChildren(root);
  return root;
}

const allNotes = Object.entries(noteModules)
  .map(([modulePath, content]) => createNoteRecord(modulePath, content))
  .filter((note) => !isIgnoredFolder(note.folderSegments))
  .sort((left, right) => pathCollator.compare(left.id, right.id));

export const notes = allNotes;
export const notesById = new Map(allNotes.map((note) => [note.id, note]));
export const noteTree = buildTree(allNotes);

export function getFirstNoteId(): string | null {
  return notes[0]?.id ?? null;
}
