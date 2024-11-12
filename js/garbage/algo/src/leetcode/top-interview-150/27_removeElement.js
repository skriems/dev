/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums[i] = undefined
    }
  }
  nums.sort()
  return nums.filter(Number.isFinite).length
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const seen = map[num] ?? 0
    if (seen >= 2) {
      nums[i] = undefined
    }
    map[num] = seen + 1
  }
  nums.sort()
  return nums.filter(Number.isFinite).length
}

function run() {
  removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2) // 5
  removeElement([3, 2, 2, 3], 3) // 2

  const foo = removeDuplicates([1, 1, 1, 2, 2, 3]) // 5
  console.log(foo)
}

run()
