/** filter function to order a collection on nodes by their order key */
export function byNodeOrder<T extends { node: { order: number | null } }>(
  a: T,
  b: T,
) {
  if (a.node.order === null) return 1
  if (b.node.order === null) return -1
  return a.node.order - b.node.order
}
