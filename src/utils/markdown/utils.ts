export interface MarkdownHeadingItem {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	text: string;
	id: string;
}

function normalizeHeadingText(raw: string): string {
	return raw
		.replace(/\[([^[\]]+)\]\((?:[^()]+)\)/g, "$1")
		.replace(/[`*_~>]/g, "")
		.replace(/\s+/g, " ")
		.trim();
}

export function slugifyMarkdownHeading(raw: string, existingSlugs?: Set<string>): string {
	const normalized = normalizeHeadingText(raw)
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");

	const baseSlug = normalized || "heading";
	if (!existingSlugs) {
		return baseSlug;
	}

	let candidate = baseSlug;
	let index = 2;

	while (existingSlugs.has(candidate)) {
		candidate = `${baseSlug}-${index}`;
		index += 1;
	}

	existingSlugs.add(candidate);
	return candidate;
}

export function extractMarkdownHeadings(content: string): MarkdownHeadingItem[] {
	const headings: MarkdownHeadingItem[] = [];
	const slugs = new Set<string>();
	const lines = content.split(/\r?\n/);
	let insideFence = false;
	let fenceMarker = "";

	for (const rawLine of lines) {
		const line = rawLine.trimEnd();
		const fenceMatch = line.match(/^(```+|~~~+)/);

		if (fenceMatch) {
			if (!insideFence) {
				insideFence = true;
				fenceMarker = fenceMatch[1] ?? "";
			} else if (line.startsWith(fenceMarker)) {
				insideFence = false;
				fenceMarker = "";
			}

			continue;
		}

		if (insideFence) {
			continue;
		}

		const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);

		if (!headingMatch) {
			continue;
		}

		const level = headingMatch[1]!.length as 1 | 2 | 3 | 4 | 5 | 6;
		const text = normalizeHeadingText(headingMatch[2]!);

		if (!text) {
			continue;
		}

		headings.push({
			level,
			text,
			id: slugifyMarkdownHeading(text, slugs),
		});
	}

	return headings;
}

    

export type MetaNode = {
  type?: string;
  meta?: string | null;
  value?: string;
  data?: {
    hName?: string;
    hProperties?: Record<string, unknown>;
  };
  children?: MetaNode[];
};

export function collectMetaText(nodes: MetaNode[] | undefined): string {
  if (!nodes?.length) {
    return "";
  }

  return nodes
    .map((node) => (typeof node.value === "string" ? node.value : collectMetaText(node.children)))
    .join("");
}

export function walk(node: MetaNode, visit: (node: MetaNode) => void): void {
  visit(node);
  for (const child of node.children ?? []) {
    walk(child, visit);
  }
}
