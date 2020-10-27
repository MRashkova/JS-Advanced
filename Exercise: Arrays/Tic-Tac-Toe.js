ticTacToe = arr => {
    'use-strict'
   
    let dashBoard = [[false, false, false],
    [false, false, false],
    [false, false, false],]
   
    const isWinning = char => {
      let leftDiagonal = dashBoard[0][0] + dashBoard[1][1] + dashBoard[2][2]
      let rightDiagonal = dashBoard[0][2] + dashBoard[1][1] + dashBoard[2][0]
      if (char.repeat(3) === leftDiagonal || char.repeat(3) === rightDiagonal)
        return true
      for (let i = 0; i < 3; i++) {
        let horizontal = dashBoard[i].reduce((a, c) => a + c, '')
        let vertical = dashBoard
          .map((x) => x[i])
          .reduce((a, c) => a + c, '')
        if (char.repeat(3) === horizontal || char.repeat(3) === vertical)
          return true
      }
      return false
    }
   
    let flag = true
    let count = 0
   
    for (const el of arr) {
      let [row, col] = el.split(' ')
   
      if (dashBoard[row][col] === 'X' || dashBoard[row][col] === 'O')
        console.log('This place is already taken. Please choose another!')
      else {
        if (flag) {
          flag = false
          dashBoard[row][col] = 'X'
          if (isWinning('X')) {
            console.log(`Player X wins!`)
            break
          }
        }
        else {
          flag = true
          dashBoard[row][col] = 'O'
          if (isWinning('O')) {
            console.log(`Player O wins!`)
            break
          }
        }
        count++
        if (count === 9) {
          console.log('The game ended! Nobody wins :(')
          break
        }
      }
    }
    console.log(dashBoard.map(row => row.join('\t')).join('\n'))
  }
