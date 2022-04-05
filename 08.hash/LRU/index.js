/**
 * 实现一个LRU缓存淘汰算法（最近最少使用策略）
 * 1. 实现一个链表数据结构
 * 2. 单纯用链表 实现一个LRU缓存算法
 * 3. 实现一个 HashMap 并且用链表法解决 hash碰撞问题
 * 4. 用HashMap以及链表，将LRU算法的时间复杂度降到O(1)
 * */ 

// 第一步完成
const { Link } = require('./link.js')

// 第二步 用单链表 实现一个LRU淘汰算法
const cacheLink = new Link()
cacheLink.length = 3 // 给链表一个长度
cacheLink.checkLinkIsFull = () => {
  return cacheLink.getLength() >= cacheLink.length + 1 // 给头指针head一个余量
}

cacheLink.linkListLRU = (data) => {
  // 在链表中遍历data
  const dataNode = cacheLink.findByValue(data)
  // 如果链表中有数据data，将data从原位置删除，放到头部
  if (dataNode !== -1) {
    cacheLink.remove(data)
  // 如果链表中没有数据data，且链表已满，将链表尾部元素删除，再将data插入到链表头部
  } else if (cacheLink.checkLinkIsFull()) {
    cacheLink.remove() // remove方法 不传参数的时候 删除链表尾部元素
  }
  cacheLink.insert('head', data)
}
// 单链表LRU算法的测试
// cacheLink.linkListLRU('liubei')
// cacheLink.linkListLRU('caocao')
// cacheLink.linkListLRU('sunquan')
// cacheLink.print()
// console.log('======================')
// cacheLink.linkListLRU('liubei')
// cacheLink.print()
// console.log('======================')
// cacheLink.linkListLRU('zhugeliang')
// cacheLink.print()

// 第三步 实现一个HashMap，并用链表发解决hash碰撞问题
