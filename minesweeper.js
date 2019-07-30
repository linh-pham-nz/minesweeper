document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0, 
      col: 0, 
      isMine: false, 
      hidden: true
    }, 
    {
      row: 0, 
      col: 1, 
      isMine: false, 
      hidden: true
    }, 
    {
      row: 0, 
      col: 2, 
      isMine: true, 
      hidden: true
    }, 
    {
      row: 1, 
      col: 0, 
      isMine: false, 
      hidden: true
    }, 
    {
      row: 1, 
      col: 1, 
      isMine: true, 
      hidden: true
    }, 
    {
      row: 1, 
      col: 2, 
      isMine: false, 
      hidden: true
    }, 
    {
      row: 2, 
      col: 0, 
      isMine: false, 
      hidden: true
    }, 
    {
      row: 2, 
      col: 1, 
      isMine: false, 
      hidden: true
    }, 
    {
      row: 2, 
      col: 2, 
      isMine: false, 
      hidden: true
    }]
}



// Don't remove this function call: it makes the game work!
// For Loop - loop thru contents of board.cells (board.cells is an array of objects)
// Function to call countSurroundingMines once for each cell in board.cells. Pass each cell as an argument
// Assign the result of countSurroundingMines to a property on each cell object. New property should be called surroundingMines.

// document.addEventListener to call checkForWin every time the left mouse button is clicked (reveal squares)
// document.addEventListener to call checkForWin every time the right mouse button (contextmenu) is clicked (flag squares)
// 

function startGame () {
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }  
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  lib.initBoard()
}






// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

// loop through all of board.cells
// For each cell, check to see if both.isMine and.isMarked are true
// If any mine still exists that isn't marked, the player hasn't won yet and you can return to exit out of the function.

// If every mine is marked, but there are still cells with the hidden property set to true, the player hasn't won yet and you can return out of the function.

function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  // }
  
  for (var j = 0; j < board.cells.length; j++) {
    if (board.cells[j].isMine && !board.cells[j].isMarked) {
      return;
    }
    else if (!board.cells[j].isMarked && board.cells[j].hidden) {
      return;
    }
  }
  lib.displayMessage('You win!');
}


//  ALTERNATIVE WORKING OPTIONS


// for (var j = 0; j < board.cells.length; j++) {
//   if (!board.cells[j].isMine && !board.cells[j].hidden) {
//     return;
//   }
//   else (!board.cells[j].isMarked && board.cells[j].hidden) {
//     return;
//   }
// }
// lib.displayMessage('You win!');
// }

//   for (var j = 0; j < board.cells.length; j++) {
//     if ((!board.cells[j].isMine && !board.cells[j].hidden) && (board.cells[j].isMine && board.cells[j].isMarked)) {
//       return;
//     }
//     else if (board.cells[j].isMarked && board.cells[j].hidden) {
//       return;
//     }
//   }
//   // lib.displayMessage('You win!');  
// }
// console.log('the cells', board.cells[j].isMine);


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
  // var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true. ((use count variable))
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true) {
      count++;
    }
  }
  return count;  
}


// Your primary goal is to learn more about objects and arrays: how to access properties, how to loop through arrays of objects, and so on.