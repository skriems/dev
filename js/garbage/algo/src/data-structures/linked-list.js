/** A Node in a singly linked list
 * @class
 * @csonstructor
 * @public
 * */
class LinkedListNode {
  /**
   * @param {unknown} value
   * @param {LinkedListNode | null} next
   * */
  constructor(value, next = null) {
    /**
     * @type {unknown}
     * */
    this.value = value

    /**
     * @type {LinkedListNode}
     * */
    this.next = next
  }

  toString() {
    return `${this.value}`
  }
}

/** A Singly Linked List
 * @class
 * @csonstructor
 * @public
 * */
export class LinkedList {
  constructor() {
    /**
     * @type {LinkedListNode | null}
     * */
    this.head = null

    /**
     * @type {LinkedListNode | null}
     * */
    this.tail = null
  }

  /**
   * prepend a value to the list
   * @param {unknown} value
   * */
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode
    if (!this.tail) {
      this.tail = newNode
    }
    return this
  }

  /**
   * append a value to the list
   * @param {unknown} value
   */
  append(value) {
    const newNode = new LinkedListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    if (this.tail) {
      this.tail.next = newNode
    }

    this.tail = newNode
    return this
  }

  /**
   * find a value in the list
   * @param {unknown} value
   * */
  find(value) {
    let node = this.head
    while (node) {
      if (node.value === value) return node
      node = node.next
    }
    return null
  }

  /**
   * delete a value from the list
   * @param {unknown} value
   * */
  delete(value) {
    if (!this.head) return this
    let node = this.head
    if (node.value === value) {
      this.head = node.next
      return this
    }

    while (node) {
      if (node?.next?.value === value) {
        node.next = node.next.next
        return this
      }
      node = node.next
    }
    return this
  }

  /** convert the list to an array of values
   * @returns {unkown[]}
   * */
  toArray() {
    const nodes = []

    let node = this.head
    while (node) {
      nodes.push(node.value)
      node = node.next
    }
    return nodes
  }

  /**
   * convert the list to a string
   * @returns {string}
   * */
  toString() {
    const nodes = []
    let current = this.head
    while (current) {
      nodes.push(current.toString())
      current = current.next
    }
    return nodes.join(" -> ")
  }
}
