const bigNum = (numbers) => {
    const res = numbers.map((num) => num.toString()).sort((a,b) => {
        return parseInt(b + a) - parseInt(a + b)
    }).join('')
    return res
}

const res = bigNum([3, 30, 34, 5, 9])

console.log(res)