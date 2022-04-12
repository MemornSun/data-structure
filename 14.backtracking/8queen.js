const result = new Array(8)

function cal8queens (row) {
  if (row === 8) {
    printQueens(result)
    return
  }
  for (let col = 0; col < 8; col++) {
    if (isOK(row, col)) {
      result[row] = col
      cal8queens(row + 1)
    }
  }
}

function isOK (row, col) {
  let leftup = col - 1, rightup = col + 1
  for (let i = row - 1; i >= 0; i--) {
    if (result[i] === col) { return false }
    if (leftup >=0) {
      if (result[i] === leftup) {return false}
    }
    if (rightup < 8) {
      if (result[i] === rightup) {return false}
    }
    leftup--
    rightup++
  }
  return true
}

function printQueens (result) {
  console.log('---------------')
  for (let row = 0; row < 8; row++) {
    let resStr = ''
    for (let col = 0; col < 8; col++) {
      if (result[row] === col) {
        resStr += "Q "
      } else {
        resStr += "* "
      }
    }
    console.log(resStr)
  }
}

cal8queens(0)



