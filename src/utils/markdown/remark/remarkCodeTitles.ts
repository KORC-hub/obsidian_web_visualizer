import { walk, type MetaNode } from "../utils";

function parseCodeTitle(meta: string | null | undefined): string | undefined {
  if (!meta) {
    return undefined;
  }

  const match = meta.match(/title=(?:"([^"]+)"|'([^']+)'|([^\s]+))/i);
  return match?.[1] ?? match?.[2] ?? match?.[3];
}

export default function remarkCodeTitles() {
  return (tree: MetaNode) => {
    walk(tree, (node) => {
      if (node.type !== "code") return;

      const title = parseCodeTitle(node.meta);
      if (!title) return;

      node.data ??= {};
      node.data.hProperties = { ...(node.data.hProperties ?? {}), "data-title": title };
    });
  };
}
