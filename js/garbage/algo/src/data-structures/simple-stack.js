/** Class representing a Stack
 * LIFO (Last In First Out)
 * */
export class SimpleStack {
  /** @param {unknown[]} args */
  constructor(...args) {
    /** the internal array
     * @type {unknown[]}
     * */
    this.stack = args
  }

  get size() {
    return this.stack.length
  }

  /** push a value to the stack
   * @param {unknown} value
   * */
  push(value) {
    this.stack.push(value)
    return this
  }

  /** pop  value from the queue
   * @return {unknown}
   * */
  pop() {
    return this.stack.pop()
  }

  toArray() {
    return [...this.stack]
  }
}
