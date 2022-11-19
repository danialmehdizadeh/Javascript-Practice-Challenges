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

    let newTable = [...table];
    for(let row= 0; row<table.length; row++){
        for(let col = 0; col<table[row].length; col++){
            // console.log(table[row][col])
            const cell = checkMine(row,col,table)
            newTable[row][col] = cell
        }
    }
    return newTable
}
// diagonal x-1 [n - 1,n+1] x+1[n-1,n+1]  x[n-1 n+1]

const checkMine = (row,col,table) => {
    // console.log(table[row][col])
    result = 0
    let [y, yPrime, z, zPrime, x, xPrime] = ['', '', '', '', '', ''];
    if(table[row][col] === '#'){
        return "#"
    }
    // y zprime z
    if (row - 1 >= 0){
        y = table[row-1][col]
        if (col - 1 >= 0){
            zPrime = table[row-1][col-1]
        }
        if (col <= table[row-1].length - 1){
            z = table[row-1][col+1]
        }
    }
    // yprim hprime h
    if (row + 1 < table.length){
        yPrime = table[row+1][col]
        // console.log(y,"it is yPrime",table)

        if (col + 1 >= 0){
            zPrime = table[row+1][col-1]
        }
        if (col < table[row+1].length){
            z = table[row+1][col+1]
        }
    }
    // x and x prim
    col - 1 >= 0 ? x = table[row][col-1] : x = "-"
    col + 1 < table[row].length ? xPrime = table[row][col+1] : xPrime = "-"
    let mines = [y, yPrime, z, zPrime, x, xPrime]
    mines.map(element => element === "#" ? result++ : result+=0)
    // console.log(result)
    return result
    // if (row + 1 >= 0){
    //     yPrim = table[row+1][col]
    // }
    // if (row - 1 >= 0){
    //     y = table[row-1][col]
    // }
    // if (row + 1 >= 0){
    //     yPrim = table[row+1][col]
    // }
    // if(table[x-1][n - 1],table[x-1][n + 1], table[x+1], table[x+1],table[x],table[x])
}
console.log(mineSweeper(
    [
  ["-", "-", "-", "#", "#"],
  ["-", "#", "-", "-", "-"],
  ["-", "-", "#", "-", "-"],
  ["-", "#", "#", "-", "-"],
  ["-", "-", "-", "-", "-"]
]
))
//check mine returns number