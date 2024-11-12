type Iterableify<T> = { [K in keyof T]: Iterable<T[K]> };

/** generator function that takes N arguments which can be converted into an iterator
 * and yields the next value of each iterator in turn.
 *
 * @example
 * const a = [1, 2, 3]
 * const b = ['a', 'b', 'c']
 * const zipped = zip(a, b, c)
 * [...zipped] // [[1, 'a', true], [2, 'b', false], [3, 'c', true]]
 *
 * NOTE: you have to _consume_ the generator to get the values out of it.
 * In the example above, the `[...zipped]` is the consumption. Or use
 * `Array.from(zipped)` or `for (const value of zipped) { ... }`
 */
export function* zip<T extends Array<unknown>>(
  ...toZip: Iterableify<T>
): Generator<T> {
  // Get iterators for all of the iterables.
  const iterators = toZip.map((i) => i[Symbol.iterator]());

  while (true) {
    // Advance all of the iterators.
    const results = iterators.map((i) => i.next());

    // If any of the iterators are done, we should stop.
    if (results.some(({ done }) => done)) {
      break;
    }

    // We can assert the yield type, since we know none
    // of the iterators are done.
    yield results.map(({ value }) => value) as T;
  }
}
