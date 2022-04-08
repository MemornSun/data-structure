const { GraphMatrix } = require("./graph-matrix.js")
const { GraphLinklist } = require("./graph-linklist.js")
const { GraphWithBFS } = require("./bfs.js")

// const graphData = new GraphMatrix(10)

// graphData.insert(3, [0,1,2,4,5])
// graphData.delete(3)
// console.log(graphData.value)

// const graphData = new GraphLinklist(10)
// graphData.insert(2, [0,1,3,4,5])

const graphData = new GraphWithBFS(8)
graphData.insert(0, [1,3])
graphData.insert(1, [2,4])
graphData.insert(2, [5])
graphData.insert(3, [4])
graphData.insert(4, [5,6])
graphData.insert(5, [7])
graphData.insert(6, [7])
// graphData.insert(0, [4])
// graphData.insert(4, [7])
// graphData.insert(0, [1,3])
// graphData.insert(1, [2,4])
// graphData.insert(2, [])
// graphData.insert(3, [4])
// graphData.insert(4, [5])
// graphData.insert(5, [6])
// graphData.insert(6, [])
// graphData.value.forEach(element => {
//   element.display()
// });
// console.log('===================')
// graphData.remove(5)
// graphData.value.forEach(element => {
//   element.display()
// });
// console.log(graphData.value)
graphData.bfs(0, 7)