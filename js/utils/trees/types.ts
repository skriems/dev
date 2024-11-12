/** Base type for creating trees
 *
 * Each entity that you wanne build a tree for
 * needs a parent_id and an optional order property.
 * */
export type TreeNode = {
  id: string;
  order?: number;
};

/** While building trees, we put the children into a children array */
export type WithChildren<T extends TreeNode> = T & {
  children: WithChildren<T>[];
};
