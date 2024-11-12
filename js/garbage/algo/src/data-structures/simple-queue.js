/** Class representing a Queue
 * FIFO (First In First Out)
 * */
export class SimpleQueue {
  /** @param {unknown[]} args */
  constructor(...args) {
    /** the internal array
     * @type {unknown[]}
     * */
    this.queue = args
  }

  get size() {
    return this.queue.length
  }

  /** push a value to the stack
   * @param {unknown} value
   * */
  push(value) {
    this.queue.push(value)
    return this
  }

  /** pop  value from the queue
   * @return {unknown}
   * */
  pop() {
    return this.queue.shift()
  }

  toArray() {
    return [...this.queue]
  }
}
