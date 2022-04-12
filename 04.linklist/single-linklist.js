// 数组实现单链表
// 链表节点类
class Node {
  constructor (data) {
    this.value = data // 当前节点数据
    this.next = null // 下一节点指针
  }
}
// 链表类
class SingleLink {
  constructor (initData) {
    this.head = new Node('head') // 声明头节点
    // 初始化链表
    if ((initData instanceof Array) && initData.length > 0) {
      initData.forEach(item => {
        this.append(item)
      })
    }
  }
  find (item) {
    let currNode = this.head
    while (currNode && currNode.value !== item) {
      currNode = currNode.next
    }
    return currNode
  }
  findByIdx (idx) {
    let currNode = this.head
    if (idx > 0) {
      while (currNode && idx > 0) {
        currNode = currNode.next
        idx--
      } 
    }
    return currNode 
  }
  insert (data, item) { // 向item后面插入一个节点，值为data
    const newNode = new Node(data)
    const preNode = this.find(item)
    const nextNode = preNode.next
    preNode.next = newNode
    newNode.next = nextNode
  }
  remove (data) {
    let currNode = this.head
    while (currNode.next && currNode.next.value !== data) {
      currNode = currNode.next
    }
    if (currNode.next) {
      currNode.next = currNode.next.next
    }
  }
  display () {
    let res = new Array()
    let currNode = this.head
    while (currNode.next !== null) {
      res.push(currNode.value)
      currNode = currNode.next
    }
    res.push(currNode.value)
    console.log(res)
  }
  append (data) {
    let newNode = new Node(data)
    let currNode = this.head
    while (currNode.next !== null) {
      currNode = currNode.next
    }
    currNode.next = newNode
    newNode.next = null
  }
  size () {
    let res = 0
    let currNode = this.head
    while (currNode) {
      currNode = currNode.next
      res++
    }
    return res
  }
}

module.exports = { SingleLink }
