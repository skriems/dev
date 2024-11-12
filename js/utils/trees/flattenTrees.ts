import { TreeNode, WithChildren } from "./types"

/** flattens a tree into a flat list of nodes */
export function flattenTrees<
  T extends TreeNode & { index?: number },
>(nodes: WithChildren<T>[]) {
  const list: WithChildren<T>[] = []

  function traverse(node: WithChildren<T>, index: number) {
    node.index = index
    list.push(node)
    node.children.forEach((node, i) => traverse(node, i))
  }

  for (const [index, node] of nodes.entries()) {
    traverse(node, index)
  }

  return list
}
