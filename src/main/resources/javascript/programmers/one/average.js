const average = (arr) => {
    return arr.reduce((acc, value) => acc += value, 0) / arr.length
}

const res = average([1,2,3,4])
console.log(res)
