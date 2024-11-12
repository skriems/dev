/** Class representing a Node in a Stack or Queue */
class Node {
  /** @param {unknown} value
   * @param {Node | null} next
   * */
  constructor(value, next = null) {
    /** the value of the node
     * @type {unknown}
     * */
    this.value = value

    /** the next node
     * @type {Node | null}
     * */
    this.next = next
  }

  toString() {
    return `${this.value}`
  }
}

/** Class representing a Stack
 * LIFO (Last In First Out)
 * */
export class Stack {
  constructor() {
    /** the head of the queue
     * @type {Node | null}
     * */
    this.top = null
    /** the size of the queue
     * @type {number}
     * */
    this.size = 0
  }

  /** push a value to the stack
   * @param {unknown} value
   * */
  push(value) {
    const node = new Node(value, this.top)
    this.top = node
    this.size++
    return this
  }

  /** pop  value from the queue
   * @return {unknown}
   * */
  pop() {
    if (!this.top) {
      return null
    }

    const value = this.top.value
    this.top = this.top.next
    this.size--
    return value
  }

  /** peek at the top of the stack
   * @return {unknown | null}
   * */
  peek() {
    return this?.top?.value ?? null
  }

  isEmpty() {
    return !this.top
  }

  toString() {
    let current = this.top
    const elements = []
    while (current) {
      elements.push(current.toString())
      current = current.next
    }
    return elements.join(" -> ")
  }
}

/** Class representing a Queue
 * FIFO (First In First Out)
 * */
export class Queue {
  constructor() {
    /** the head of the queue
     * @type {Node | null}
     * */
    this.head = null

    /** the tail of the queue
     * @type {Node | null}
     * */
    this.tail = null

    /** the size of the queue
     * @type {number}
     * */
    this.size = 0
  }

  /** push a value to the queue
   * @param {unknown} value
   * */
  push(value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      this.size++
      return this
    }
    if (!this.head.next) {
      this.head.next = node
    }
    if (this.tail) {
      this.tail.next = node
    }
    this.tail = node
    this.size++
    return this
  }

  /** pop  value from the queue */
  pop() {
    if (!this.head) return null
    let node = this.head
    this.head = this.head.next
    this.size--
    return node.value
  }

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
