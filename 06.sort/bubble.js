// 时间复杂度 最好 O(n) 最坏 O(n²) 平均 不会算

// 空间复杂度 O(1)
function bubbleSort (arr) {
  const n = arr.length
  if (n <= 1) { return }
  for (let i = 0; i < n; i++) {
    let flag  = false
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        flag = true
      }
    }
    if (!flag) break
  }
  return arr
}

module.exports = { bubbleSort }