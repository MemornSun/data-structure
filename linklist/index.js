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
  insert (data, item) { // 向item后面插入一个节点，值为data
    const newNode = new Node(data)
    const preNode = this.find(item)
    const nextNode = preNode.next
    preNode.next = newNode
    newNode.next = nextNode
  }
  remove (data) {
    let currNode = this.head
    const removeNode = this.find(data)
    while (currNode.value === removeNode.value) {
      currNode = currNode.next
    }
    currNode.next = removeNode.next
  }
  display () {
    let currNode = this.head
    while (currNode.next !== null) {
      console.log(currNode.value)
      currNode = currNode.next
    }
    console.log(currNode.value)
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
}

module.exports = { SingleLink }

const linkDemo = new SingleLink([1,2,3])