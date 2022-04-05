const { insertionSort } = require('./insert.js')
/**
 * 快速排序
 * 找一个数组中的元素，作为分区点 pivot，分区点左边的数据小于pivot，分区点右边的元素大于pivot。递归处理。
 * 递推公式 partition(p...r) = partition(p...q) + partition(q+1...r)
 * 终止条件 p >= r
 * */

// 第一种方法：好理解，但不是最优解。用2个temp数组实现，缺点：需要单独申请2个数组，left和right，用来保存分区后的元素，空间复杂度高
function quickSort1 (arr) {
  if (arr.length < 2) { return arr }
  const len = arr.length
  const pivot = arr[len-1] // 找到最后一个元素，以其作为基准点
  let left = []
  let right = []
  for (let i = 0; i < (len-1); i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else if (arr[i] <= pivot) {
      left.push(arr[i])
    }
  }
  return quickSort1(left).concat([pivot], quickSort1(right))
}

// 第二种方法：最优解，原地排序法，不额外申请数组空间 ，就能实现排序
function quickSort (arr, left, right) {
  const len = arr.length
  if (right-left < 1) { return }
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : len - 1
  const pivot = arr[right] // 找到区分点
  let i = left
  for (let j = left; j <= right; j++) { // j <= right 其中 = 的原因是，最终需要将arr[right]的元素即区分点也换到合适的位置
    if (arr[j] <= pivot) { // 和区分点大小相同的元素，也应该在区分点左边
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++ // 换完位置之后 i++ ，这样最后一次把区分点换到正确位置的时候，i的值是区分点位置 + 1
    }
  }
  // 下面递归的时候，要把区分点抠掉，也就是把 i-1 位置的元素拿掉
  quickSort(arr, left, i-2)
  quickSort(arr, i, right)
  return arr
}

// 支持倒序的快排（从大到小）
function reversQuickSort (arr, left, right) {
  const len = arr.length
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : len - 1
  if ((right - left) < 1) { return arr}
  const pivot = arr[right] // 区分点
  let i = left
  for (let j = left; j <= right; j++) {
    if (arr[j] >= pivot) {
      let temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
      i++
    }
  }
  reversQuickSort(arr, left, i-2)
  reversQuickSort(arr, i, right)
  return arr
}

console.log(reversQuickSort([2]))
/**
 * 快速排序的优化：主要是优化区分点的获取
 * 快速排序的最差时间复杂度是 O(n^2) 也就是每次区分点都不能将数组变小
 * 
 * 区分点获取的优化方法：
 * 1. 三数取中法
 * 从区间的头、尾、中间各取一个数，比较大小，取中间值。如果区间数据量大，可以五数取中、十数取中
 * 2. 随机法
 * 每次取区分点的时候，都随机获取
 * 
 * C语言的qsort排序函数，在不同情况下会使用不同的排序算法
 * 数据量小的时候优先使用归并排序，因为归并排序的平均时间复杂度、最差时间复杂度都是O(nlogn) 会比快排更快一点。缺点是空间复杂度是O(n)，但数据量小，不要紧
 * 数据量较大的时候，会用快排，并且用三数取中的方式优化。
 * 部分情况下，会用到插入排序
*/
// 三数取中法实现快排 （注意：下面的实现有问题，数据量大的时候效果没有普通快排好，原因还没找到。）
function optimizationQuickSort (arr, left, right) {
  const len = arr.length
  if ((right - left) < 1) { return }
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : len - 1
  let i = left
  // 三数取中拿到区分点pivot
  let pivotArr = new Array(arr[left], arr[right], arr[parseInt((right-left)/2)])
  pivotArr = insertionSort(pivotArr)
  const pivot = pivotArr[1] // 三数取中
  for (let j = left; j <= right; j++) {
    if (arr[j] <= pivot) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++
    }
  }
  optimizationQuickSort(arr, left, i-2)
  optimizationQuickSort(arr, i, right)
  return arr
}

module.exports = { quickSort1, quickSort, optimizationQuickSort, reversQuickSort }
