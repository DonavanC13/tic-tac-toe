const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', '']
  
    const printFormattedBoard = () => {
      let formattedString = ''
      board.forEach((cell, index) => {
        formattedString += cell ? ` ${cell} |` : '   |'
        if ((index + 1) % 3 === 0) {
          formattedString = formattedString.slice(0, -1)
          if (index < 8)
            formattedString +=
              '\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n'
        }
      })
      console.log('%c' + formattedString, 'color: #c11dd4;font-size:16px')
    }
  
    const markCell = (cellIndex, mark) => {
      if (board[cellIndex] === '') {
        board[cellIndex] = mark
        return true
      } else {
        return false
      }
    }

    const getAvailableMoves = () => {
        const moves = []
        board.forEach((cell, index) => {
          if (!cell) moves.push(index)
        })
        return moves
      }
    
      const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', '']
      }
    
      const getBoard = () => board
    
      const isFull = () => {
        return board.every(cell => cell)
      }

      const checkForWin = () => {
        //Checking Horizontal Wins
        if (board[0] === board[1] && board[0] === board[2] && board[0]) {
          return { winner: board[0], direction: 'H', row: 1 }
        }
        if (board[3] === board[4] && board[3] === board[5] && board[3]) {
          return { winner: board[3], direction: 'H', row: 2 }
        }
        if (board[6] === board[7] && board[6] === board[8] && board[6]) {
          return { winner: board[6], direction: 'H', row: 3 }
        }
    
        //Checking Vertical Wins
        if (board[0] === board[3] && board[0] === board[6] && board[0]) {
          return { winner: board[0], direction: 'V', column: 1 }
        }
        if (board[1] === board[4] && board[1] === board[7] && board[1]) {
          return { winner: board[1], direction: 'V', column: 2 }
        }
        if (board[2] === board[5] && board[2] === board[8] && board[2]) {
          return { winner: board[2], direction: 'V', column: 3 }
        }