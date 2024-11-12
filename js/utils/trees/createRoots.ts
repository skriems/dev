import { TreeNode, WithChildren } from "./types"

/** Builds roots of trees from a flat list of nodes.
 *
 * @example
 * ```javascript
 * const elements = [...] // with parent_id
 * const roots = createRoots(elements) // [firstTree, secondTree, anotherTreee, ...]
 * ````
 * @param nodes the nodes to build possibly several _roots_ from
 * */
export function createRoots<T extends TreeNode, K extends keyof T>(
  nodes: T[],
  parentKey: K,
  sort = true,
) {
  const map  = {} as Record<K, WithChildren<T>>
  const roots: WithChildren<T>[] = []

  // First pass: create a map of nodes and initialize children
  for (const node of nodes as WithChildren<T>[]) { // casting b/c every node gets a children arr here
    node.children = []
    map[node.id as K] = node
  }

  // Second pass: populate children and roots
  for (const node of nodes as WithChildren<T>[]) {
    const parentId = node[parentKey]
    const parent = map[parentId as K]

    if (parent) {
      parent.children.push(node)
    } else if (!parentId || (parentId && !parent)) {
      roots.push(node)
    }
  }

  // Sort the roots and all descendant nodes by the order property
  function sortTree(node: WithChildren<T>) {
    node.children.sort((a, b) => (a.order || 0) - (b.order || 0))
    node.children.forEach(sortTree)
  }

  if (sort) {
    roots.sort((a, b) => (a.order || 0) - (b.order || 0))
    roots.forEach(sortTree)
  }

  return roots
}
