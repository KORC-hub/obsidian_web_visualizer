import { normalizeCalloutKind, matchCalloutMarker } from "../callout/calloutKind";
import { walk, type MetaNode } from "../utils";

export default function remarkCallouts() {
  return (tree: MetaNode) => {
    walk(tree, (node) => {
      if (node.type !== "blockquote" || !node.children?.length) return;

      const firstParagraph = node.children[0];
      const firstTextNode = firstParagraph?.children?.[0];

      if (firstParagraph?.type !== "paragraph" || firstTextNode?.type !== "text") return;
      if (typeof firstTextNode.value !== "string") return;

      const match = matchCalloutMarker(firstTextNode.value);
      if (!match) return;

      firstTextNode.value = firstTextNode.value.replace(match[0], "");

      node.data ??= {};
      node.data.hName = "callout";
      node.data.hProperties = {
        ...(node.data.hProperties ?? {}),
        "data-kind": normalizeCalloutKind(match[1]),
      };
    });
  };
}
