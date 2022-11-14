const indexOfAll = (arr, val) => {
    const result = arr.reduce((acc, value, index) => (value === val ? [...acc, index] : acc), [])
    return result
}

const res = indexOfAll([1, 2, 3, 4, 1], 1)
console.log(res)

