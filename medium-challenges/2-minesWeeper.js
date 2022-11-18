// This challenge is based on the game Minesweeper.

// Create a function that takes a grid of # and -, where each hash (#) 
// represents a mine and each dash (-) represents a mine-free spot. 
// Return an array where each dash is replaced by a digit indicating the number
//  of mines immediately adjacent to the spot (horizontally, vertically, and diagonally).


// Examples
// numGrid([
//   ["-", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-"],
//   ["-", "-", "#", "-", "-"],
//   ["-", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-"]
// ]) ➞ [
//   ["0", "0", "0", "0", "0"],
//   ["0", "1", "1", "1", "0"],
//   ["0", "1", "#", "1", "0"],
//   ["0", "1", "1", "1", "0"],
//   ["0", "0", "0", "0", "0"],
// ]
// diagonal x-1 [n - 1,n+1] x+1[n-1,n+1]  x[n-1 n+1]

// numGrid([
//   ["-", "-", "-", "-", "#"],
//   ["-", "-", "-", "-", "-"],
//   ["-", "-", "#", "-", "-"],
//   ["-", "-", "-", "-", "-"],
//   ["#", "-", "-", "-", "-"]
// ]) ➞ [
//   ["0", "0", "0", "1", "#"],
//   ["0", "1", "1", "2", "1"],
//   ["0", "1", "#", "1", "0"],
//   ["1", "2", "1", "1", "0"],
//   ["#", "1", "0", "0", "0"]
// ]

// numGrid([
//   ["-", "-", "-", "#", "#"],
//   ["-", "#", "-", "-", "-"],
//   ["-", "-", "#", "-", "-"],
//   ["-", "#", "#", "-", "-"],
//   ["-", "-", "-", "-", "-"]
// ]) ➞ [
//   ["1", "1", "2", "#", "#"],
//   ["1", "#", "3", "3", "2"],
//   ["2", "4", "#", "2", "0"],
//   ["1", "#", "#", "2", "0"],
//   ["1", "2", "2", "1", "0"],
// ]
// Notes
// N/A
const mineSweeper = (table) => {
    let [newTable,row,col] = [[...table],0,0];
    while(row<table.length){
        while(col<table[row].length){
            console.log(table[row].length)
            const cell = checkMine(row,col)
            newTable[row][col] = cell
            col++
        }
        row++;
    }
    return newTable
}
const checkMine = () => {
    return 1
}
mineSweeper(
    [
          ["1", "1", "2", "#", "#"],
          ["1", "#", "3", "3", "2"],
          ["2", "4", "#", "2", "0"],
          ["1", "#", "#", "2", "0"],
          ["1", "2", "2", "1", "0"],
        ]
)
//check mine returns number