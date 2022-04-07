// 邻接矩阵实现有向图、无向图
class GraphMatrix {
  // 用一个二维数组保存图的数据
  constructor (size) {
    this.value = this._initMatrix(size)
  }
  _initMatrix (size) {
    const res = new Array(size)
    for (let i = 0; i < res.length; i++) {
      res[i] = new Array(size).fill(0)
    }
    return res
  }
  /**
   * 插入元素
   * @date 2022-04-07
   * @param {any} data 要插入的元素
   * @param {any} arr 插入元素指向的元素
   * @returns {any}
   */
  insert (data, arr) {
    // 如果没有要连接的元素，添加是无意义的
    if (!(arr instanceof Array) || arr.length === 0) { return }
    arr.forEach(item => {
      this.addEdge(data, item)
    });
  }

  /**
   * 添加边
   * 添加一条 a顶点指向b顶点的边
   * @date 2022-04-07
   * @param {any} a
   * @param {any} b
   * @returns {any}
   */
  addEdge (a, b) {
    this.value[a][b] = 1
    this.value[b][a] = 1
  }

  /**
   * 删除元素
   * @date 2022-04-07
   * @param {any} data // 要删除的元素data
   * @returns {any}
 */
  delete (idx) {
    // 首先现在一维数组下，将data下标的数组，全部置为0，意思是，data这个顶点指向其他顶点的边抹掉
    this.value[idx].forEach((item, i) => {
      this.value[idx][i] = 0
    })
    // 然后遍历其他顶点，将其他顶点指向data的边也抹掉
    this.value.forEach(item => {
      item[idx] = 0
    })
  }
}

module.exports = { GraphMatrix }
