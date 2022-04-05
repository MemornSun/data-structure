/**
 * 二分查找
 * 时间复杂度是 O(logn)，推导方式：
 * 假设被查找区间的长度是n，每次查找数据后，区间会缩小为原来的一半，也就是除以2，最坏情况下，当区间长度被缩小到0为止，区间变化如下
 * n, n/2, n/4, n/8 ... n/2^k
 * 当 n/2^k = 1 的时候，即为最坏情况，区间缩小到2，再往下就为0的时候。这时是二分查找的时间复杂度是最坏时间复杂度 O(k)
 * 已知 n/2^k = 1 则 2^k = n 则 logn = k，所以，二分的时间复杂度是 O(logn) 
 * */ 

function binarySearch (arr, k) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    if (arr[mid] < k) {
      left = mid + 1
    } else if (arr[mid] > k) {
      right = mid - 1
    } else if (arr[mid] === k) {
      return mid
    }
  }
  return -1
}

// console.log(binarySearch([1,2,4,5,7,9,11,20,88,100], 12))

// 二分查找变体1 给定有序允许重复的数组，查找第一个等于给定值的元素位置
function binarySearchVariety1 (arr, k) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = parseInt((right + left)/2)
    if (arr[mid] > k) {
      right = mid - 1
    } else if (arr[mid] < k) {
      left = mid + 1
    } else {
      if (mid === 0 || arr[mid-1] !== k) { 
        return mid
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}
// console.log(binarySearchVariety1([1,1,1,2,2,2,3], 1))

// 二分查找变体2 给定有序允许重复的数组，查找最后一个等于给定值的元素位置
function binarySearchVariety2 (arr, k) {
  let left = 0, right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    if (arr[mid] > k) {
      right = mid - 1
    } else if (arr[mid] < k) {
      left = mid + 1
    } else {
      if (mid === (arr.length -1) || arr[mid+1] !== k) { 
        return mid 
      } else {
        left = mid + 1
      }
    }
  }
  return -1
}
// console.log(binarySearchVariety2([1,1,1,2,2,2,3], 1))

// 二分查找变体3 给定有序允许重复的数组，查找第一个大于等于给定值的元素位置
function binarySearchVariety3 (arr, k) {
  let left = 0, right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (arr[mid] < k) {
      left = mid + 1
    } else if (arr[mid] >= k) {
      if (mid === 0 || arr[mid - 1] < k) {
        return mid
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}
// console.log(binarySearchVariety3([1,2,2,4,5], 5))

// 二分查找变体4 给定有序允许重复的数组，查找最后一个小于等于给定值的元素位置
function binarySearchVariety4 (arr, k) {
  let left = 0, right = arr.length - 1
  while (left <= right ) {
    const mid = Math.floor((right + left)/2)
    if (arr[mid] <= k) {
      if (mid === (arr.length - 1) || arr[mid + 1] > k) {
        return mid
      } else {
        left = mid + 1
      }
    } else {
      right = mid - 1
    }
  }
  return -1
}
console.log(binarySearchVariety4([1,2,2,4,5], 5))
