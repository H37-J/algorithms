const descNum = (num) => {
    const arr = num.toString()
    return parseInt([...arr].sort((a, b) => b - a).join(''))
}

const res = descNum(12345)
console.log(res)