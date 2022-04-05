/***
 * 爬楼梯 n级台阶 每次上1格或者2格，给定台阶数，找到有多少种登顶的方法
 */
// 递归公式 f(n) = f(n-1) + f(n-2)
// 边界条件 f(1) = 1, f(2) = 2
// 解决重复计算问题
function climb (n) {
  if (n === 1) { return 1}
  if (n === 2) { return 2}
  if (map.has(n)) {
    return map.get(n)
  }
  const res = climb(n-1) + climb(n-2)
  map.set(n, res)
  return res
}

const map = new Map()

console.log(climb(45))