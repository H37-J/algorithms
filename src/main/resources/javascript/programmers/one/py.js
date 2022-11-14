const py = (str) => {
    const arr = [...str]
    const obj = arr.reduce((acc, val) => {
        val = val.toLowerCase()
        acc[val] = (acc[val] || 0) + 1
        return acc
    }, {})
    return (obj.p === obj.y)
}

const res = py("pypy")
console.log(res)