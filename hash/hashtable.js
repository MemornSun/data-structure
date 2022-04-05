/**
 * 基础的散列表数据结构
 * */

class HashTable {
  constructor () {
    this.table = []
  }
  // 散列函数 hash函数，我理解就是根据值 算出一个唯一的key 并存起来
  hash (key) {
    /**
     * 散列函数设计标准
     * 1. 散列函数算出的散列值应该是一个非负整数
     * 2. 当key1 == key2的时候，hash(key1) == hash(key2)
     * 3. 当key1 != key2的时候，hash(key1) != hash(key2)
     * */ 
    var hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash%37
  }
  // 向散列表添加一个值
  put (key, value) {
    const position = this.hash(key)
    this.table[position] = value
  }
  // 根据键从散列表删除值
  remove (key) {
    this.table[this.hash(key)] = undefined
  }
  // 返回根据键值检索到的特定的值
  get (key) {
    return this.table[this.hash(key)]
  }
  // 打印散列表
  print () {
    for (let i = 0; i < this.table.length; i++) {
      let val = this.table[i]
      val ? console.log(val) : undefined;
    }
  }
}

// const hashContainer = new HashTable()
// hashContainer.put('Gandalf', 'gandalf@email.com')
// hashContainer.put('John', 'johnsnow@email.com')
// hashContainer.put('Tyrion', 'tyrion@email.com')
// console.log(hashContainer.get('John'))
// hashContainer.print()

/**
 * 1.假设我们有 10 万条 URL 访问日志，如何按照访问次数给 URL 排序？
 * 2.有2个字符串数组，每个字符串数组有10万条数据，如何快速找到两个数组中重复的元素
*/

// 1. 以url为key，访问量为value存入hash散列表；之后排序？