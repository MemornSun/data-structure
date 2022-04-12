function swap (arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function bubble (arr) {
  for (let i=0; i<arr.length; i++) {
    let flag = false
    for (let j=0; j<arr.length; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j)
        flag = true
      }
    }
    if (!flag) { break }
  }
}

// insert
function insertSort (arr) {
  // 划定左右区间，左区间是空
  const len = arr.length
  if (len <= 1) { return }
  for (let i = 1; i < len; i++) {
    let value = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      if (value < arr[j]) {
        arr[j] = arr[j+1]
      } else {
        break
      }
      arr[j] = value
    }
  }
}

// pick sort
function pickSort (arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let minIndex = i
    for (let j = i+1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    // 循环完 找到未排序区间最小的值 放到已排序区间的最后
    swap(arr, i, minIndex)
  }
  return arr
}

// merge
function mergeSort (arr) {
 // 把数组拆成最小单元，通过merge方法合并，合并过程中排序
 // 递归执行的方法
 function mergeSortFun (arr) {
   // 找到数组中点
   let len = arr.length
   const s = 0
   const t = len - 1
   const p = parseInt(len / 2)
   const leftArr = arr.slice(s, p)
   const rightArr = arr.slice(p+1, t)
   return merge(mergeSortFun(leftArr), mergeSortFun(rightArr))
 }
 // 合并方法
 function merge (leftArr, rightArr) {
  const arr = new Array()
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] > right[0]) {
      arr.push(leftArr.shift())
    } else {
      arr.push(rightArr.shift())
    }
  }
  if (leftArr.length) {
    arr = arr.concat(leftArr)
  } else if (rightArr.length) {
    arr = arr.concat(rightArr)
  }
  return arr
 }
 return mergeSortFun(arr)
}

// quickSort
function quickSort (arr, left, right) {
  // 思路是 每次选一个分界点 将比分界点小的元素放在分界点左边 比分界点大的元素放分界点右边
  // 直接实现一个原地排序
  const len = arr.length
  if ((right - left) < 1) { return }
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : len - 1
  let i = left
  const pivot = arr[right]
  for (let j = i+1; j <= right; j++) {
    if (pivot > arr[j]) {
      swap(arr, i, j)
      i++  
    }
  }
  quickSort(arr, left, i-2)
  quickSort(arr, i, right)
  return arr
}