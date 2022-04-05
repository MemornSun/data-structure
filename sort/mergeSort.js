/**
 * 归并排序
 * 将数组从中间分开，分成两份，前面一部分排序，后面一部分排序，之后合并
 * 递归公式 mergeSort(p...r) = merge(mergeSort(p...q), mergeSort(q+1...r))
 * 终止条件 p >= r
 * */
function mergeSort (arr) {
  const len = arr.length
  if ( len < 2) { return arr }
  const q = Math.floor(len / 2) // 这为什么向下取整？向上取整行不行？如果是单数长度的数组，会不会有问题？
  const leftArr = arr.slice(0, q)
  const rightArr = arr.slice(q)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}
// 合并方法
function merge (leftArr, rightArr) {
  let tempArr = new Array()
  for (;leftArr.length !== 0 && rightArr.length !== 0;) {
    if (leftArr[0] <= rightArr[0]) {
      tempArr.push(leftArr.shift())
    } else {
      tempArr.push(rightArr.shift())
    }
  }
  // 下面的逻辑是，如果有一个子数组有剩下的元素，就把剩下的元素按顺序放到结果数组的末尾，有没有可能，左右2个字数组都有剩余？
  if (leftArr.length) {
    tempArr = tempArr.concat(leftArr)
  } else if (rightArr.length){
    tempArr = tempArr.concat(rightArr)
  }
  return tempArr
}

module.exports = { mergeSort }
