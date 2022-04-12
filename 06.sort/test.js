const { bubbleSort } = require('./bubble')
const { insertionSort } = require('./insert')
const { pickSort } = require('./pick')
const { mergeSort } = require('./mergeSort')
const { reversQuickSort, quickSort, optimizationQuickSort } = require('./quickSort')
const { randomArrData } = require('./data')

const testRandomArr = randomArrData(10)
console.log(testRandomArr)

console.log(reversQuickSort(testRandomArr))

// 快排
// const timeStart5 = new Date().getTime()
// optimizationQuickSort([...testRandomArr])
// const timeEnd5 = new Date().getTime()
// console.log("optimizationQuickSort time pass: ", timeEnd5 - timeStart5)

// const timeStart6 = new Date().getTime()
// quickSort([...testRandomArr])
// const timeEnd6 = new Date().getTime()
// console.log("quickSort time pass: ", timeEnd6 - timeStart6)

// // 归并
// const timeStart4 = new Date().getTime()
// mergeSort([...testRandomArr])
// const timeEnd4 = new Date().getTime()
// console.log("mergeSort time pass: ", timeEnd4 - timeStart4)

// 插入
const timeStart2 = new Date().getTime()
insertionSort([...testRandomArr])
const timeEnd2 = new Date().getTime()
console.log("insertionSort time pass: ", timeEnd2 - timeStart2)

// // 选择
// const timeStart3 = new Date().getTime()
// pickSort([...testRandomArr])
// const timeEnd3 = new Date().getTime()
// console.log("pickSort time pass: ", timeEnd3 - timeStart3)

// // 冒泡
// const timeStart1 = new Date().getTime()
// bubbleSort([...testRandomArr])
// const timeEnd1 = new Date().getTime()
// console.log("bubbleSort time pass: ", timeEnd1 - timeStart1)

