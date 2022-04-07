// java 示例 https://github.com/kkzfl22/datastruct/tree/master/src/main/java/com/liujun/datastruct/base/datastruct/heap/solution
/**
 * 静态：给定一个包含n个数据的无序数组，查找前K大数据
 * 动态：一个长度不定的数组，有添加元素的操作，查找前K大数据
*/ 
/**
 * 解法：
 * 1. 维护一个K个节点的小顶堆，堆顶节点就是前K大元素的最后一个节点。遍历数组，先填满堆。
 * 2. 之后进来的元素与堆顶元素比较，如果堆顶元素大，那就不做处理直接跳过，如果堆顶元素小，那就替换成新元素，再堆化一次。
 * 3. 以上操作直到遍历完数组。
 * 如果是动态的，那就在每次添加元素的时候，重复上述第2条的操作
 */

// 先声明一个小顶堆
class HeapMin {
  constructor (len) {
    this._len = len // 堆的长度
    this.value = new Array() // 堆的值，对外暴露
  }
  /**
   * 插入元素
   * @date 2022-04-07
   * @param {any} data
   * @returns {any}
   */
  insert (data) {
    if (this.value.length >= this.len) { return }
    // 将元素插入到数组尾部
    this.value.push(data)
    // 从下到上堆化
    let point = this.value.length - 1 // 插入元素的位置
    let prev = parseInt(point / 2) // 插入元素父节点的位置
    while (this.value[point] < this.value[prev]) {
      this._swap(this.value, point, prev)
      point = prev
      prev = parseInt(point / 2)
    }
  }
  
  /**
   * 堆化函数(从上到下)
   * @date 2022-04-07
   * @param {any} arr
   * @param {any} i
   * @returns {any}
   */
  heapify () {
    // 堆顶元素与子节点中较大的那个互换位置
    let i = 0
    while (true) {
      let maxPos = i
      if (this.value[i] > this.value[2*i + 1]) { maxPos = 2*i + 1 }
      if (this.value[maxPos] > this.value[2*i + 2]) { maxPos = 2*i + 2 }
      if (maxPos === i) { break }
      this._swap(this.value, i, maxPos)
      i = maxPos
    }
  }
  
  /**
   * 交换函数
   * @date 2022-04-07
   * @param {any} arr
   * @param {any} a
   * @param {any} b
   * @returns {any}
   */
  _swap (arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
}

function findTopK (arr, K) {
  const heap = new HeapMin(K)
  arr.forEach((item, index) => {
    if (index < K) {
      heap.insert(arr[item])
    } else {
      // 比较堆顶节点值和当前循环到的值
      if (heap.value[0] < item) {
        // 如果堆顶元素相对小，替换堆顶节点为当前元素值，然后从上开始堆化小顶堆
        heap.value[0] = item
        heap.heapify()
      }
      // 如果堆顶节点相对大，什么也不做
    }
  });
  console.log(heap.value)
}

const arr = [2,3,1,4,5,20,31,11,24,12,234,123,13]
const K = 5
findTopK(arr, K)



