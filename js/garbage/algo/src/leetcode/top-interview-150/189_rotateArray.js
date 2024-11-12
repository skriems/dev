function rotateArray(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
}

function run() {
  const nums = [1, 2, 3, 4, 5, 6, 7]
  rotateArray(nums, 3)
  console.log(nums)
}

run()
