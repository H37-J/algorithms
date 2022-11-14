const typeNumber = (str) => {
    const regex = /\d{6}|\d{4}/;
    return (regex.test(str))
}

const result = typeNumber("443a")
console.log(result)