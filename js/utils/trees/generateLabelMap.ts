import { TreeNode } from "./types";

type GetNestedFieldMapOptions<T, Field extends keyof T> = {
  /** only parent -> child labels or the full path (default: true) */
  deep?: boolean;
  /** used to separate the entries. (default: " | ") */
  separator?: string;
  /** mask for the parent (default: undefined) */
  parentPlaceholder?: string;
  /** callback fn to mangle with the final label */
  callback?: (val: string | T[Field]) => string;
};

const defaultOptions = {
  deep: true,
  separator: " | ",
};

/** Generates a Map where the key is the ID of a TreeNode and
 * the value is the concatenated _string_ value of a desired field.
 *
 * @param nodes - TreeNodes nodes to traverse
 * @param field - field to concatenate
 * @param childrenField - field to recurse into
 * @param options - see GetNestedFieldMapOptions
 * */
export function generateLabelMap<
  T extends TreeNode,
  Field extends keyof T,
  ChildrenField extends keyof T,
>(
  nodes: T[],
  field: Field,
  childrenField: ChildrenField,
  options: GetNestedFieldMapOptions<T, Field> = defaultOptions,
) {
  const opts = Object.assign({}, defaultOptions, options);
  const map = {} as Record<string, string | T[Field]>;
  if (!nodes) return map;

  function traverse(node: T, paths: (string | T[Field])[] = []) {
    const parent = paths.at(-1);
    const segments = opts.deep ? paths : parent ? [parent] : [];
    const prefix = segments
      .map((p) => opts.parentPlaceholder ?? p)
      .join(opts.separator);

    const value = prefix
      ? `${prefix}${opts.separator}${node[field]}`
      : node[field];
    map[node.id] = opts.callback ? opts.callback(value) : value;

    const children = node[childrenField];
    if (Array.isArray(children) && children.length) {
      children.forEach((child) => traverse(child, [...paths, node[field]]));
    }
  }

  nodes.forEach((node) => traverse(node));
  return map;
}
