/**
 * 基于图的广度优先搜索算法
*/

// const { GraphMatrix } = require('./graph-matrix.js')
const { GraphLinklist } = require('./graph-linklist.js')

class GraphWithBFS extends GraphLinklist {
  constructor (size) {
    super(size)
  }
  /**
   * 广度优先搜索
   * @date 2022-04-08
   * @param {any} prev // 路径数据
   * @param {any} s // 开始顶点
   * @param {any} t // 结束顶点
   * @returns {any}
   */
  bfs (s, t) {
    if (s === t) { return } // 边界处理
    // 声明visited数组，用于记录已经访问过的顶点，避免重复访问
    const visited = new Array(this.value.length).fill(false)
    // s顶点在visited中的记录改成true
    //! 之所以需要visited的原因是，避免后面有顶点再次被访问到，而覆盖之前的记录，这样就不是最短路径了。之所以能做到最短路径的原因就是，先找到先存起来。
    visited[s] = true
    // queue队列，用于保存正在访问的顶点（正在访问的顶点相连的顶点还没有访问）
    const queue = new Array()
    queue.push(s)
    // 声明prev数组，用于保存已经访问过的顶点的上级节点
    //! 这个prev是精髓中的精髓
    const prev = new Array(this.value.length).fill(-1)
    // 以上是准备工作，接下里开始算法的主体
    while (queue.length !== 0) {
      const w = queue.shift()
      const linklistLen = this.value[w].size()
      for (let i = 1; i < linklistLen; i++) { // i从1开始，是因为链表的第一项是head头指针
        const q = this.value[w].findByIdx(i).value
        if (!visited[q]) {
          prev[q] = w
          if (q === t) {
            console.log(prev)
            this.print(prev, s, t) 
            return 
          }
          visited[q] = true
          queue.push(q)
        }
      }
    }
  }
  
  /**
   * 打印方法
   * 递归打印路径
   * @date 2022-04-08
   * @param {any} prev
   * @param {any} s
   * @param {any} t
   * @returns {any}
   */
  print (prev, s, t) {
    // 这里的思路其实是，从t顶点一直网上找父级顶点，一直找到s顶点，然后反过来打印
    if (prev[t] != -1 && t != s) {
      this.print(prev, s, prev[t])
    }
    console.log(t + '')
  }
}

module.exports = { GraphWithBFS }