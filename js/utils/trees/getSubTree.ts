import { TreeNode, WithChildren } from "./types";

/** Given several roots of trees return a new list of roots with the subtree of the given id as new root. */
export function getSubTree<T extends TreeNode>(
  roots: WithChildren<T>[],
  searchId: string,
) {

  function traverse(node: WithChildren<T>): WithChildren<T> {
    if (node.id === searchId) {
      return node;
    }
    // @ts-ignore
    return node.children.map(traverse).flat();
  }

  const newRoots: WithChildren<T>[] = [];
  roots.forEach((root) => {
    const found = traverse(root);
    if (found) {
      if (Array.isArray(found)) {
        newRoots.push(...found);
      } else {
        newRoots.push(found);
      }
    }
  });

  return newRoots;
}
