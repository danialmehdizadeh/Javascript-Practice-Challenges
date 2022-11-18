// In each input array, every number repeats at least once,
//  except for two. Write a function that returns the two unique numbers.

// Examples
// returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

// returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

// returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]
// Notes
// Keep the same ordering in the output.

let array = [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8];
const returnUnique = (array,classifier) => {
    let repeat = classifier(array);
    return repeat.filter(x => x.length === 1).map(x => x[0])
    // Sample input : [[34,31],[3,asd],[asd],[57]] sample outPut => [asd]
}

const classifier = (array) =>{
    let repeats = []
    for (i= 0; i < array.length; i++){
        let repeat = [array[i]]
        for(j= 0; j < array.length; j++){
            if (array[j] === array[i]&& i !== j){
                array[j] = 'x'
                repeat.push(array[i])

            } 
            // console.log(repeat)

        }

        repeats.push(repeat)
        // console.log(repeats.filter(x => x[0] !== 'x'))

    }
    return repeats.filter(x => x[0] !== 'x');
}
console.log(returnUnique(array,classifier))