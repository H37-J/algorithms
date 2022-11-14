const solution = (arr) => {
    return arr.filter((value, index) => value !== arr[index + 1])
}

const res = solution([4, 4, 4, 3, 3])
console.log(res)