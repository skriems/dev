/** Bubblesort algorithm
 *
 * @param {number[]} arr
 * */
export function bubbleSort(arr) {
  let n = arr.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      let curr = arr[j]
      let next = arr[j + 1]
      if (curr > next) {
        arr[j] = next
        arr[j + 1] = curr
      }
    }
  }
  return arr
}
