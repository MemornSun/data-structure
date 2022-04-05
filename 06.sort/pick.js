/**
 * 选择排序
 * 找到未排序的元素中最小的，插入到已排序元素的最后面
 * */ 

function pickSort (a) {
  const n = a.length
  if (n <= 1) { return }

  for (let i = 0; i < n; i++) {
    let minIndex = i
    for (let j = (i+1); j < n; j++) {
      if (a[minIndex] > a[j]) {
        minIndex = j
      }
    }
    // 替换当前位置的元素和未排序的最小元素
    let temp = a[i]
    a[i] = a[minIndex]
    a[minIndex] = temp
  }
  return a
}

module.exports = { pickSort }