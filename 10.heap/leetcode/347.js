/**
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 * 示例 1:
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 * 
 * 示例 2:
 * 输入: nums = [1], k = 1
 * 输出: [1]
 * 
 * 提示：
 * 1 <= nums.length <= 105
 * k 的取值范围是 [1, 数组中不相同的元素的个数]
 * 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
*/

//! 下面的实现跑leetcode测试跑不过，原因再找吧，思路是对的

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  // 先将num的出现次数存到一个散列表 frequency 当中
  let frequency = {}
  nums.forEach((item) => {
      if (frequency.hasOwnProperty(item)) {
          frequency[item]++
      } else {
          frequency[item] = 1
      }
  })
  // 创建一个小顶堆，用于保存出现频率前k次的数的次数
  const heapFreq = new heapMin(k)
  for (let i in frequency) {
    heapFreq.insert({key: i, val: frequency[i]})
  }
  // 遍历heapFreq，输出出现次数前k的数组
  return heapFreq.value.map(item => {
    return item.key
  })
};

// 声明一个小顶堆
class heapMin {
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
  insert (obj) {
    if (this.value.length < this._len) { 
      // 堆不满的时候先建堆
      // 将元素插入到数组尾部
      this.value.push(obj)
      // 从下到上堆化
      let point = this.value.length - 1 // 插入元素的位置
      let prev = parseInt(point / 2) // 插入元素父节点的位置
      while (this.value[point].val < this.value[prev].val) {
        this._swap(this.value, point, prev)
        point = prev
        prev = parseInt(point / 2)
      }
    } else {
      // 堆满之后 比较堆顶节点和新元素的大小再做处理
      // 比较堆顶节点值和当前循环到的值
      if (this.value[0].val < obj.val) {
        // 如果堆顶元素相对小，替换堆顶节点为当前元素值，然后从上开始堆化小顶堆
        this.value[0] = obj
        this.heapify()
      }
      // 如果堆顶节点相对大，什么也不做
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
      if (i <= this.value.length && this.value[2*i + 1] && this.value[i].val > this.value[2*i + 1].val) { maxPos = 2*i + 1 }
      if (i <= this.value.length && this.value[2*i + 2] && this.value[maxPos].val > this.value[2*i + 2].val) { maxPos = 2*i + 2 }
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

const nums = [-1,-1,-2,-2,-2,3,3,3,4,4,4,4,4], k = 3

console.log(topKFrequent(nums, k))