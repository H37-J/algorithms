const boat = (arr, limit) => {
    let answer = 0
    arr.sort((a, b) => a - b)
    let start = 0
    let end = arr.length - 1
    while(start <= end) {
        const sum = arr[start] + arr[end]
        if(sum > limit) {
            end -= 1
        } else {
            end -= 1
            start += 1
        }
        answer += 1
    }
    return answer
}

boat([70, 50, 80, 50], 100)