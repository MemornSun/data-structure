const { SingleLink } = require('../04.linklist/single-linklist.js')

// 邻接表实现有向图、无向图
// 下面实现的是无向图，有向图省略了
class GraphLinklist {
  constructor (size) {
    this.value = this._init(size)
  }
  /**
   * 初始化图
   * @date 2022-04-07
   * @returns {any}
   */
  _init (size) {
    const res = new Array(size)
    for (let i = 0;i < size; i++) {
      res[i] = new SingleLink()
    }
    return res
  }
  /**
   * 插入元素
   * @date 2022-04-07
   * @param {any} data
   * @param {any} arr
   * @returns {any}
   */
  insert (data, arr) {
    // data得满足图的最大尺寸（其实尺寸也不是必须的，不写就是完全动态的）
    if (data > this.value.length) { return }
    // 如果没有要连接的元素，添加是无意义的
    if (!(arr instanceof Array) || arr.length === 0) { return }
    arr.forEach(element => {
      this.addEdge(data, element)
    });
  }
  /**
   * 删除顶点
   * @date 2022-04-08
   * @param {any} data
   * @returns {any}
   */
  remove (data) {
    // 在外层数组中删除data
    this.value.splice(data, 1)
    // 将data从每个链表中删掉
    this.value.forEach(item => {
      item.remove(data)
    })
  }
  /**
   * 添加边
   * 为a顶点和b顶点添加边
   * @date 2022-04-07
   * @param {any} a
   * @param {any} b
   * @returns {any}
   */
  addEdge (a, b) {
    if (this.value[a].find(b) && this.value[b].find(a)) { return } // 如果链表中已经有了，就不再链接了
    this.value[a].append(b)
    this.value[b].append(a)
  }
}

module.exports = { GraphLinklist }
