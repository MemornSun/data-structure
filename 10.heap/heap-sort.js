/**
 * 总结一下堆排序：
 * 首先需要先将原数组进行建堆
 * 建堆的方式有2种
 * 第一种是 遍历数组 依次插入到堆尾 然后从下到上的堆化
 * 第二种是 在原有数组上 从 n/2 的位置 从上到下的堆化
 * 建堆完成之后，依次取堆顶节点数据放到新数组里，然后用堆尾节点替换堆顶节点，再堆化，循环执行直到堆空 
 */


/**
 * 堆化数组
 * @date 2022-04-06
 * @returns {any}
 */
class HeapifyArr {
  constructor (arr) {
    this.heap = this._buildHeap(arr) // 建堆后的数据
  }
  /**
   * 堆排序方法
   * @date 2022-04-06
   * @param {string} type 排序方式 big 从大到小排序 small 从小到大排序
   * @param {any} arr 需要排序的数组
   * @returns {any}
   */
  sort (type) {
    // 先根据传入的数据建堆，但这个例子中，已经在实例化类的时候建堆了
    // 从堆顶获取数据完成排序
    const heapSrc = new Array(...this.heap) // 先把原始的堆深拷贝出来
    // 声明一个空数组，用来装最终的结果
    const res = new Array()
    // 循环取堆顶的元素放到结果数组中，直到堆数据为空
    while (heapSrc.length > 0) {
      const heapTop = heapSrc[0]
      if (heapSrc.length > 1) {
        heapSrc[0] = heapSrc.pop()
        this._heapify(heapSrc, 1)
      } else {
        heapSrc.pop()
      }
      if (type === 'big') {
        res.push(heapTop)
      } else {
        res.unshift(heapTop)
      }
    }
    return res
  }
  /**
   * 删除堆顶元素
   * @date 2022-04-06
   * @param {any} heap // 要处理的堆
   * @returns {any} 返回堆顶元素 
   */
  _remove (heap) {
    // 先删除堆顶元素，用尾部节点补充到堆顶，从上到下堆化
    const res = heap[0]
    heap[0] = heap.pop()
    this._heapify(res, 1)
    return res
  }
  _buildHeap (arr) {
    // 一种方式是 建一个空的数组，用堆的插入方法（从下到上堆化），插满，就得到一个堆
    // 还有一种方式，每次拿到元素，直接放到堆顶，从上到下堆化

    // 实现：
    // 创建一个存放堆的数组
    const heapArr = new Array(...arr)
    // !这里注意：首先因为叶子节点没有子节点，所以只需要对非子节点元素进行堆化，而完全二叉树有个特性，n/2 + 1 到 n 的的元素都是叶子节点
    // !要从 n/2 个节点开始，直到堆顶节点去堆化，因为堆化过程中，必须要保证堆化节点的下层节点树都是满足大顶堆数据关系的
    for (let i = heapArr.length / 2; i >= 0; i--) {
      this._heapify(heapArr, 1, i)
    }
    return heapArr
  }
  /**
   * 堆化
   * @date 2022-04-06
   * @param {any} arr 需要堆化的数组
   * @param {number} type 堆化方式 1 从上到下堆化 2 从下到上堆化
   * @returns {any}
   */
  _heapify (arr, type, i) {
    switch (type) {
      // 从上到下堆化
      case 1:
        i = i ? i : 0
        while (true) {
          let maxPos = i
          if (i < arr.length && arr[i] < arr[(i*2+1)]) { maxPos = i*2 + 1 }
          if (i < arr.length && arr[maxPos] < arr[(i*2+2)]) { maxPos = i*2 + 2 }
          if (maxPos === i) { break }
          this._swap(arr, i, maxPos)
          i = maxPos
        }
      // 从下到上堆化
      case 2: 
        let point = arr.length - 1 // 声明一个指针指向数组的最后一个元素，也就是堆的最后一个元素
        let prev = parseInt(point / 2)
        while (prev > 0 && arr[point] > arr[prev]) { // 一旦满足一次大顶堆的数据关系，就不需要再往上比较了
          // 替换当前节点与它的父节点
          this._swap(arr, point, prev)
          // 替换完成后，调整指针
          point = prev
          prev = parseInt(point / 2)
        } 
    }
  }
  _swap (arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
  }
}

module.exports = { HeapifyArr }