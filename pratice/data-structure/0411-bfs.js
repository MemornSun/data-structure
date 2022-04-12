// 邻接表的方式表示图
const { GraphLinklist } = require('../../11.graph/graph-linklist.js')

class GraphBFS extends GraphLinklist {
  constructor (size) {
    // 图的大小传进去
    super(size)
  }
  // 传入顶点s和顶点t，找到s到t的最短路径
  bfs (s, t) {
    // 先做一些准备工作，将一些辅助变量声明好
    // 辅助变量主要有三
    // queue 一个队列 用于保存当前正在处理的顶点
    const queue = new Array()
    queue.push(s)
    // visited 一个数组 用于保存已经访问过的顶点 避免重复 如果重复 就得不到最短路径了
    const visited = new Array(this.value.length).fill(false)
    visited[s] = true
    // prev 一个数组 用来保存已经访问过得的顶点的前序顶点 用于最终的最短路径打印
    const prev = new Array(this.value.length).fill(-1)
    // 准备工作完成，开始算法主体
    // 从s开始，按照广度，遍历图元素
    while (queue.length) { // queue队列为空时结束遍历，说明没有需要遍历的顶点了
      let w = queue.shift() // 从队列中获取一个顶点
      const len = this.value[w].size()
      for (let i = 1; i < len; i++) { // i从1开始，因为0是head头指针
        let q = this.value[w].findByIdx(i).value
        if (!visited[q]) {
          prev[q] = w
          if (q === t) {
            this.print(prev, s, t)
            return
          }
          visited[q] = true
          queue.push(q)
        }
      }
    }
  }
  // print方法 用于最终打印最短路径
  print (prev, s, t) {
    // 递归一直找到s
    if (prev[t] !== -1 && s !== t) {
      this.print(prev, s, prev[t])
    }
    console.log(t)
  }
}