const { BinaryTree } = require("./binary-tree.js")

const tree = new BinaryTree()

tree.insert(5)
tree.insert(2)
tree.insert(6)
tree.insert(4)

tree.traversePrev()
console.log('-----------------------')
tree.traverseMid()
console.log('-----------------------')
tree.traverseBehind()

// console.log(tree.find(65))