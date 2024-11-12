/**
 * @param {number[]} nums
 * @return {number}
 *
 * @see Boyer–Moore majority vote algorithm
 */
const majorityElement = function (nums) {
  let element
  let counter = 0

  for (const n of nums) {
    if (counter === 0) {
      element = n
    }
    counter += n === element ? 1 : -1
  }
  return element
}

function run() {
  const result = majorityElement([2, 2, 1, 1, 1, 2, 2])
  console.log(result)
}

run()
