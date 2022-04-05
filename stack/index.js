// 用数组实现栈

class Stack {
  constructor () {
    this._array = new Array()
    this.length = 0
  }
  // push 入栈操作
  pushByJSArray (item) {
    this._array.unshift(item)
  }
  // pop 出栈操作
  popByJSArray () {
    return this._array.shift()
  }
  // push 入栈操作(纯数组操作)
  push (item) {
    this._array[this._array.length] = item
    this.length++
  }
  // push 出栈操作(纯数组操作)
  pop () {
    this.length--
    const res = this._array.pop()
    return res
  }
  display () {
    this._array.forEach(item => {
      console.log(item)
    })
  }
}

module.exports = { Stack }