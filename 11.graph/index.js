const { GraphMatrix } = require("./graph-matrix.js")
const { GraphLinklist } = require("./graph-linklist.js")

// const graphData = new GraphMatrix(10)

// graphData.insert(3, [0,1,2,4,5])
// graphData.delete(3)
// console.log(graphData.value)
const graphData = new GraphLinklist(10)
graphData.insert(2, [0,1,3,4,5])