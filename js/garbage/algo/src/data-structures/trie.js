/** Class representing a Node in a Trie
 *
 * @class
 * @constructor
 * @public
 */
class TrieNode {
  constructor(value) {
    /**
     * the value of the particular node
     * @type {string}
     * @public
     */
    this.value = value

    /**
     * a map of child nodes
     * @type {Record<string, TrieNode>}
     * @public
     */
    this.children = {}

    /**
     * boolean to indicate if the node is a complete word
     * @type {boolean}
     * @public
     */
    this.isCompleteWord = false
  }
}

/** a Trie
 *
 * @class
 * @constructor
 * @public
 */
export class Trie {
  constructor() {
    /**
     * the root node
     * @type {TrieNode}
     * @public
     */
    this.root = new TrieNode(null)
  }

  /**
   * insert a word into the trie
   * @param {string} word
   * */
  insert(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if (!node.children[char]) {
        node.children[char] = new TrieNode(char)
      }
      node = node.children[char]
    }
    node.isCompleteWord = true
    return this
  }

  /**
   * search a word in the trie
   * @param {string} word
   * */
  search(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if (!node.children[char]) {
        return false
      }
      node = node.children[char]
    }
    return node.isCompleteWord
  }

  /**
   * search a word in the trie
   * @param {string} prefix
   * */
  startsWith(prefix) {
    let node = this.root
    for (let i = 0; i < prefix.length; i++) {
      const char = word[i]
      if (!node.children[char]) {
        return false
      }
      node = node.children[char]
    }
    return true
  }

  /**
   * suggest words for a given prefix
   * @param {string} prefix
   */
  suggest(prefix) {
    let node = this.root
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i]
      if (!node.children[char]) {
        return []
      }
      node = node.children[char]
    }
    return this.suggestHelper(node, prefix)
  }

  /**
   * @param {TrieNode} node
   * @param {string} prefix
   * @param {string[]} suggestions
   * */
  suggestHelper(node, prefix, suggestions = []) {
    if (node.isCompleteWord) {
      suggestions.push(prefix)
    }
    for (const key in node.children) {
      this.suggestHelper(node.children[key], prefix + key, suggestions)
    }
    return suggestions
  }
}
