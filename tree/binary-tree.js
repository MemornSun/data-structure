class Node {
  constructor (data) {
    this.value = data
    this.left = null
    this.right = null
  }
}

// 实现一个二叉查找树
class BinaryTree {
  constructor () {
    this.root = null
  }
  // 查询
  find (data) {
    // 从根节点开始找，如果data与当前节点的值相等，则返回，如果比当前节点小，则从左子树开始找，如果比当前节点大，则从右子树开始找
    let point = this.root // 查询指针
    while (true) {
      if (point && point.value === data) {
        return point
      } else if (point && point.value > data) {
        point = point.right
      } else if (point && point.value < data) {
        point = point.right
      } else {
        return -1
      }
    }
  }
  // 插入
  insert (data) {
    // 拿到元素，创建节点元素，先和根元素比较
    const node = new Node(data)
    // 如果根元素为空 直接插入
    if (!this.root) {
      this.root = node
      return
    }
    // 接下来的过程其实就是找准备插入的元素的父节点
    let point = this.root
    while (true) {
      // 如果比根元素小，且根元素左节点是空，插入
      if (node.value > point.value) {
        if (!point.right) {
          point.right = node
          return
        }
        // 如果左子节点不为空，那将指针换成左节点
        point = point.right
      // 如果比根元素大，且根元素右子节点是空，插入
      } else if (node.value < point.value) {
        if (!point.left) {
          point.left = node
          return
        }
        // 如果右子节点不为空，那将指针换成右节点
        point = point.left
      }
    }
  }
  // 删除
  remove (data) {
    // 需要根据待删除节点的子节点情况来区分处理方式
    // 1 删除节点无子节点 - 直接删除
    // 2 删除节点有一个子节点 - 删除节点的指针指向子节点即可
    // 3 删除节点有两个子节点 - 从右子树中寻找最小值 替换当前待删除节点

    // 找到当前节点以及其父节点（可以用一个长度为2的队列，保存当前指针数据以及上一次指针的数据）
    let point = this.root // 声明一个指针
    let res = [] // 一个队列
    let flag = false
    if (point === null) { 
      console.log('tree is null')
      return 
    }
    while (true && !flag) {
      if (point && point.value === data) {
        // 无子节点
        if (point.left === null && point.right === null) {
          if (res.length === 2) {
            res[0] = null
          } else {
            this.root = null
          }
          flag = true
          // 只有左子节点
        } else if (point.left !== null && point.right === null) {
          // 当前节点不是根节点
          if (res.length === 2) {
            // 删除节点是父节点的左节点
            if (res[0].left.value === data) {
              res[0].left = point.left
            } else {
              res[0].right = point.left
            }
          // 当前节点是根节点
          } else {
            this.root = point.left
            flag = true
          }
        // 只有右子节点
        } else if (point.right !== null && point.left === null) {
          // 当前节点不是根节点
          if (res.length === 2) {
            // 删除节点是父节点的左节点
            if (res[0].left.value === data) {
              res[0].left = point.right
            } else {
              res[0].right = point.right
            }
          // 当前节点是根节点
          } else {
            this.root = point.right
            flag = true
          }
        // 删除节点左右子节点都不为空
        } else if (point.right !== null && point.left !== null) {
          // 找到当前节点右子树中最小的值
          let pointMin = point
          while (pointMin.left == null && pointMin.right == null) {
            if (res.length === 2) {
              pointMin.left = point.left
              pointMin.right = point.right
              if (res[0].left.value === data) {
                res[0].left = pointMin
              } else {
                res[0].right =pointMin
              }
            }
            flag = true
          }
        }
      }
    }
  }
  // 前序遍历
  traversePrev () {
    let point = this.root
    if (point) {
      console.log(point.value)
      printAll(point.left)
      printAll(point.right)
    }
    function printAll (point) {
      if (point === null) { return }
      console.log(point.value)
      printAll(point.left)
      printAll(point.right)
    }
  }
  // 中序遍历
  traverseMid () {
    let point = this.root
    if (point) {
      printAll(point.left)
      console.log(point.value)
      printAll(point.right)
    }
    function printAll (point) {
      if (point === null) {
        return
      }
      printAll(point.left)
      console.log(point.value)
      printAll(point.right)
    }
  }
  // 后序遍历
  traverseBehind () {
    let point = this.root
    if (point) {
      printAll(point.left)
      printAll(point.right)
      console.log(point.value)
    }
    function printAll (point) {
      if (point === null) { return }
      printAll(point.left)
      printAll(point.right)
      console.log(point.value)
    }
  }
  // 最大节点 最小节点
}
// 平衡二叉查找树

module.exports = { BinaryTree }