// Your code here

function mapToNegativize(sourceArray) {
    let new_array = []
    sourceArray.forEach(int => {
        new_array.push(int * -1)
    })
    return new_array
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let new_array = []
    sourceArray.forEach(int => {
        new_array.push(int * 2)
    })
    return new_array
}

function mapToSquare(sourceArray) {
    let new_array = []
    sourceArray.forEach(int => {
        new_array.push(int ** 2)
    })
    return new_array
}

function reduceToTotal(sourceArray, n = 0) {
    sourceArray.forEach(int => {
        n += int 
    })
    return n
}

function reduceToAllTrue(sourceArray) {
    let truthy = true

    for (let i of sourceArray) {
        if (!i) {
        truthy = false
        }
    }
    return truthy 
}


// Below is same as above:

// let reduceToAllTrue = function(sourceArray) {
//     let truthy = true

//     for (let i of sourceArray) {
//         if (!i) {
//         truthy = false
//         }
//     }
//     return truthy 
// }

function reduceToAnyTrue(sourceArray) {
    let truthy = false

    for (let i of sourceArray) {
        if (i) {
        truthy = true
        }
    }
    return truthy 
}