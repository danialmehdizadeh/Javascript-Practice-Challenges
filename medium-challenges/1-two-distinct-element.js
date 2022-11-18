// In each input array, every number repeats at least once,
//  except for two. Write a function that returns the two unique numbers.

// Examples
// returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

// returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

// returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]
// Notes
// Keep the same ordering in the output.
let returnUnique = (array) => {
        let arrayCopy = array.map(element => [element, false]);
        console.log(arrayCopy)
        let unique = [];
        for(let i = 0; i<array.length;i++){
            arrayCopy[i][1] = true
            console.log(arrayCopy[i],arrayCopy.includes([array[i], false]))
            if(arrayCopy.includes([array[i], false])){
                console.log(array[i] + false)
                arrayCopy = arrayCopy.filter(x => x[0] === array[i])
            } else{
            }
        }
        return arrayCopy

}
console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]))