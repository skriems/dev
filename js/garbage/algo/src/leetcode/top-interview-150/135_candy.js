function candy(ratings) {
  const n = ratings.length
  const left = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    if (i > 0 && ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1
    } else {
      left[i] = 1
    }
  }
  let right = 0
  let ret = 0
  for (let i = n - 1; i >= 0; i--) {
    if (i < n - 1 && ratings[i] > ratings[i + 1]) {
      right++
    } else {
      right = 1
    }
    ret += Math.max(left[i], right)
  }
  return ret
}

function run() {
  const result = candy([1, 0, 2])
  console.log(result)
  const res = candy([1, 2, 2])
  console.log(res)
}

run()
