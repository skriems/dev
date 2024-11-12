type EdgeNodes<T> = T extends { edges?: infer E }
  ? E extends Array<{ node: infer N }>
  ? Array<N>
  : never
  : never;

/** Get a list of nodes from a pg_graphql collection of edges */
export function getNodes<T extends { edges?: Array<{ node: unknown }> }>(
  collection: T,
): EdgeNodes<T> {
  const list =
    collection && Array.isArray(collection.edges)
      ? collection.edges.map((edge) => edge.node)
      : [];
  return list as EdgeNodes<T>;
}
