const { Heap } = require("./heap.js")
const { HeapifyArr } = require("./heap-sort.js")


/**
 * 堆插入测试
 * @date 2022-04-06
 * @returns {any}
 */
function testHeapInsert () {
  const HeapIns = new Heap(10)
  HeapIns.insert(5)
  HeapIns.insert(11)
  HeapIns.insert(1)
  HeapIns.insert(2)
  HeapIns.insert(7)
  HeapIns.insert(9)
  HeapIns.insert(4)
  console.log(HeapIns.a)
}

/**
 * 堆顶元素删除测试
 * @date 2022-04-06
 * @returns {any}
 */
function testHeapRemove () {
  const HeapIns = new Heap(10)
  HeapIns.insert(5)
  HeapIns.insert(11)
  HeapIns.insert(1)
  HeapIns.insert(2)
  HeapIns.insert(7)
  HeapIns.insert(9)
  HeapIns.insert(4)
  
  HeapIns.remove()
  console.log(HeapIns.a)
  
  HeapIns.remove()
  console.log(HeapIns.a)
}

/**
 * 堆排序测试
 * @date 2022-04-06
 * @returns {any}
 */
function testHeapSort () {
  // let arr = [2,17,33,16]
  let arr = [2,3,4,1,8,9,10,88,91,27,15,10,63,17,33,16]
  let heapArr = new HeapifyArr(arr)
  arr = heapArr.sort()
  console.log(arr)
}

// 测试堆插入
// testHeapInsert()
// 测试堆顶删除
// testHeapRemove()
// 测试堆排序
testHeapSort()