document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {'cellA': 'A', row: 0, col: 0, isMine: true, hidden: true, },
    {'cellB': 'B', row: 0, col: 1, isMine: false, hidden: true },
    {'cellC': 'C', row: 0, col: 2, isMine: true, hidden: true },
    {'cellD': 'D', row: 1, col: 0, isMine: true, hidden: true },
    {'cellE': 'E', row: 1, col: 1, isMine: false, hidden: true },
    {'cellF': 'F', row: 1, col: 2, isMine: false, hidden: true },
    {'cellG': 'G', row: 2, col: 0, isMine: true, hidden: true },
    {'cellH': 'H', row: 2, col: 1, isMine: true, hidden: true },
    {'cellI': 'I', row: 2, col: 2, isMine: false, hidden: true }
  ]
}


function startGame () {
  // loop for contents of board cells
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  // call countSurroundingMines x1 for each cell in board.cells
  // assign countSurroundingMines to a property on each cell object
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  // Here, loop through 
  var remaining = board.cells
    .filter(function (cell) {
      return cell.hidden && !cell.isMarked
    })
  if (remaining.length > 0) {
    return
  }
  var incorrect = board.cells
    .filter(function (cell) {
      return cell.isMarked && !cell.isMine
    })
  if (incorrect.length > 0) {
    return
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
     lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

  


  // return number of cells around mine if (isMine) true;
  function countSurroundingMines (cell) {
    var surrounding = lib.getSurroundingCells(cell.row, cell.col)
    return surrounding.filter(function (adjacentCell) {
      return adjacentCell.isMine
   }).length;
 }
  //Your job is to define it so it returns the number of cells around the current cell
  //that have the isMine property set to true.
