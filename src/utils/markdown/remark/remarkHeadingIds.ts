import { slugifyMarkdownHeading, collectMetaText, walk, type MetaNode } from "../utils"; // ajusta esta ruta a tu proyecto

export default function remarkHeadingIds() {
  return (tree: MetaNode) => {
    const slugs = new Set<string>();

    walk(tree, (node) => {
      if (node.type !== "heading") return;

      const text = collectMetaText(node.children);
      if (!text) return;

      node.data ??= {};
      node.data.hProperties = {
        ...(node.data.hProperties ?? {}),
        id: slugifyMarkdownHeading(text, slugs),
      };
    });
  };
}
