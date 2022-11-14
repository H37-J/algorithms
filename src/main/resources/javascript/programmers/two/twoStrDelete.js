const twoStrDelete = ([...str]) => {
    const res = []
    for (let i = 0; i < str.length; i += 1) {
        const pick = res.length - 1
        if (res[pick] === str[i]) {
            res.pop()
        } else {
            res.push(str[i])
        }
    }
    return !res.length ? 1 : 0
}

twoStrDelete("cdcd")

