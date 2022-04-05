// 给定一个字符串，看左括号和右括号是否符合语法规则
const {Stack} = require('../index.js')


function match(str) {
  let res = true
  const strArr = str.split('')
  const leftSymbol = ['{', '(', '[']
  const rightSymbol = ['}',')',']']
  const leftSymbolStack = new Stack()
  for (let i = 0; i < strArr.length; i++) {
    const item = strArr[i]
    if (leftSymbol.includes(item)) {
      leftSymbolStack.push(item)
    } else if (rightSymbol.includes(item)) {
      const cleanSymbol = isMatchSymbol(leftSymbolStack.pop(), item)
      if (!cleanSymbol) {
        res = false
        break
      }
    }
  }
  if (res && leftSymbolStack.length) {res = false}
  return res
}

function isMatchSymbol (left, right) {
  switch (left) {
    case '{':
      if (right === '}') return true;
    case '[':
      if (right === ']') return true;
    case '(':
      if (right === ')') return true;
    default: return false;
  }
}

const str = '{[]{{()}}}'

console.log(match(str))
