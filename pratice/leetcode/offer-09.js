/**
 * 用两个栈实现一个队列。
 * 队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 * 
 * 示例1
 * 输入：
 * ["CQueue","appendTail","deleteHead","deleteHead"]
 * [[],[3],[],[]]
 * 输出：[null,null,3,-1]
 * 
 * 示例2
 * 输入：
 * ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
 * [[],[],[5],[2],[],[]]
 * 输出：[null,-1,null,null,5,2]
 * 
 * 提示：
 * 1 <= values <= 10000
 * 最多会对 appendTail、deleteHead 进行 10000 次调用
 * */

const CQueue = function () {
  this.stack1 = new Stack()
  this.stack2 = new Stack()
}

CQueue.prototype.appendTail = function (value) {
  // O(1)
  this.stack1.push(value)
}
CQueue.prototype.deleteHead = function () {
  // O(n+n-1) => O(n)
  const len = stack1.value.length
  if (len < 1) { return -1 }
  let res = undefined
  while (this.stack1.value.length > 1) {
    this.stack2.push(this.stack1.pop())
  }
  res = this.stack1.pop()
  while (this.stack2.value.length) {
    this.stack1.push(this.stack2.pop())
  }
  return res
}

class Stack {
  constructor () {
    this.value = new Array()
  }
  // 入栈方法
  push (value) {
    this.value.push(value)
  }
  // 出栈方法
  pop (value) {
    this.value.pop(value)
  }
}