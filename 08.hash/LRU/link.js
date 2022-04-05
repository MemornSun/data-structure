// 实现一个链表类
class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class Link {
  constructor () {
    this.head = new Node('head')
  }
  // 根据value查找节点
  findByValue (item) {
    let currentItem = this.head
    while (currentItem !== null && currentItem.element !== item) {
      currentItem = currentItem.next
    }
    return currentItem === null ? -1 : currentItem
  }
  // 根据index查找节点, index从0开始
  findByIndex (index) {
    let currentItem = this.head
    let i = 0
    while (currentItem !== null && i <= index) {
      currentItem = currentItem.next
      i++
    }
    return currentItem === null ? -1 : currentItem
  }
  // 向链表末尾追加节点
  append (item) {
    const newNode = new Node(item)
    let currentItem = this.head
    while (currentItem.next !== null) {
      currentItem = currentItem.next
    }
    currentItem.next = newNode
  }
  // 指定元素向后插入
  insert (item, newItem) {
    const newNode = new Node(newItem)
    const targetItem = this.findByValue(item)
    if (targetItem === -1) {
      console.log('WARNING: item is not exist')
    } else {
      newNode.next = targetItem.next
      targetItem.next = newNode
    }
  }
  // 根据value查找前一个节点
  findPrev (item) {
    let currentItem = this.head
    while (currentItem.next && currentItem.next.element !== item) {
      currentItem = currentItem.next
    }
    if (!currentItem.next) {
      return -1
    }
    return currentItem
  }
  // 删除元素，如果不传参数，就删除最后一个节点
  remove (item) {
    if (item !== undefined) {
      const targetPrevItem = this.findPrev(item)
      if (targetPrevItem === -1) { 
        console.log('WARNING: item is not exist')
      } else {
        targetPrevItem.next = targetPrevItem.next.next
      }
    } else {
      let currentItem = this.head
      while (currentItem.next !== null && currentItem.next.next !== null) {
        currentItem = currentItem.next
      }
      if (currentItem.next === null) { return }
      currentItem.next = null
    }
  }
  // 遍历链表
  print () {
    let currentItem = this.head
    while (currentItem) {
      console.log(currentItem.element)
      currentItem = currentItem.next
    }
  }
  // 获取长度
  getLength () {
    let len = 0
    let currentItem = this.head
    while (currentItem) {
      currentItem = currentItem.next
      len++
    }
    return len
  }
  // 反转链表（尾插法）
  reverseLink () {
    // 创建一个新的头结点
    const root = new Node('head')
    // 遍历原链表头结点之后的节点，依次插到新头结点的后面
    let currentNode = this.head.next
    while (currentNode !== null) {
      let next = currentNode.next
      currentNode.next = root.next
      root.next = currentNode
      currentNode = next
    }
    // 用新的头结点替换原头结点
    this.head = root
  }
  // 链表中是否有环检测
  checkCircle () {
    // 声明2个指针，从链表头节点开始
    // 一个慢指针，一次走一步，一个快指针，一次走两步
    // 如果快慢指针能够相遇，说明链表有环
    let slow = this.head
    let fast = this.head.next
    while (fast !== null && fast.next !== null && fast.next.next !== null) {
      if (slow === fast) { return true }
      slow = slow.next
      fast = fast.next.next
    }
    return false
  }
  // 链表中是否有环检测
  checkCircleSrc () {
    let slow = this.head
    let fast = this.head
    do {
      if (slow === fast) { return true }
      slow = slow.next
      fast = fast.next.next
    } while (fast !== null && fast.next !== null)
    return false
  }
  // 删除链表倒数第n个节点
  // 求链表的中间节点
}

// 两个有序链表合并
function mergeLinklist (listA, listB) {
  // 新建一个链表
  const newLinklist = new Link()
  let currentItem = newLinklist.head
  // 比较AB两个链表的头结点，谁小先遍历谁，遍历的同时，与另一个指针的当前节点做比较，小的放到新链表中，并继续遍历小的节点所在的链表
}

module.exports = { Link }


// 测试链表的相关功能
// const linkIns = new Link()
// linkIns.append('liubei')
// linkIns.append('caocao')
// linkIns.insert('liubei', 'sunquan')
// linkIns.append('zhaoyun')
// linkIns.append('guanyu')
// linkIns.print()
// console.log('===========')
// linkIns.reverseLinkTest()
// linkIns.print()
// console.log('===========')
// linkIns.reverseLinkTest()
// linkIns.print()