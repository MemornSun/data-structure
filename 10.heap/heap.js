// 手动实现heap（用数组表示堆）

class Heap { // 默认Heap是一个大顶堆
  constructor (n) {
    this.a = new Array() // 数组，用于存放堆数据
    this.n = n // 堆中能存储的最大数据个数
  }
  // 堆的插入
  insert (data) {
    if (this.a.length >= this.n) { return }
    // 先插入到堆的最后，再堆化到正确的位置
    // 插入到最后也就是放到数组的最后
    this.a.push(data)
    let curIdx = this.a.length - 1
    let prevIdx = parseInt(curIdx / 2)
    // 开始堆化
    // 因为是大顶堆，只要已经存进去的数据肯定是满足大小关系的，所以只要在堆化过程中满足一次条件，位置就对了，不用一致遍历到顶
    while ( curIdx > 0 && this.a[curIdx] > this.a[prevIdx]) {
      this._swap(curIdx, prevIdx)
      curIdx = prevIdx
      prevIdx = parseInt(curIdx / 2)
    }
  }
  // 删除堆顶元素
  remove () {
    if (this.a.length === 0) { 
      console.log('heap is empty')  
      return
    }
    // 先删除堆顶元素
    this.a.shift()
    // 将堆中最后的元素替换到堆顶
    const lastItem = this.a.pop()
    this.a.unshift(lastItem)
    // 从堆顶点开始堆化
    this._heapify(0)
  }

  /**
   * 堆化函数
   * 大顶堆，从上到下堆化
   * @date 2022-04-06
   * @param {any} i 要进行堆化的节点位置
   * @returns {any}
   */
  _heapify (i) {
    const arr = this.a
    const len = arr.length
    let maxPos = i
    while (true) {
      // 核心逻辑是，将当前节点与子节点比较，并与左右子节点中，大的那一个互换位置
      // 先比较i和i*2+1，这里之所以是i*2+1是因为，定点是从数组下标0开始的，如果i的值小，那说明不符合大顶堆的数据关系，那么先暂存左节点的下标
      if (i < len && arr[i] < arr[(i*2+1)]) { maxPos = i * 2 + 1 }
      // 用左节点（或者原节点）和右节点做比较，如果右节点大，那就暂存右节点的下标
      if (i < len && arr[maxPos] < arr[(i*2+2)]) { maxPos = i * 2 + 2 }
      // 如果以上两件事情都没发生，那说明当前节点大于等于左右节点，满足大顶堆的数据关系，直接退出循环
      if (maxPos === i) { break }
      // 互换节点 与 左右节点中大的那个
      this._swap(maxPos, i)
      // 换完之后，继续循环，将位置换成互换后的子节点位置
      i = maxPos
    }
  }
  // 交换数据
  _swap (idx1, idx2) {
    const temp = this.a[idx1]
    this.a[idx1] = this.a[idx2]
    this.a[idx2] = temp
  }
}

module.exports = { Heap }
