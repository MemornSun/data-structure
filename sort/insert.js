/**
 * 插入排序
 * 将一个数组拆成两个部分，已排序区间和未排序区间
 * 在未排序区间中拿到元素，在已排序区间中找到合适的位置插入
*/
// 时间复杂度 最好 O(n) 最坏 O(n²) 平均 O(n²)
// 空间复杂度 O(1)

function insertionSort (arr) {
  const n = arr.length
  if (n <= 1) { return }
  for (let i = 1; i < n; i++) {
    const value = arr[i]
    let j = i - 1
    for (;j >= 0; j--) {
      if (value < arr[j]) {
        arr[j+1] = arr[j]
      } else {
        break
      }
      arr[j] = value
    }
  } 
  return arr
}

module.exports = { insertionSort }