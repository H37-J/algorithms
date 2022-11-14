const bubbleSort = (arr) => {
    let check = true
    let size = arr.length
    while (size > 0) {
        check = false
        for (let i = 0; i < size - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                check = true
            }
        }
        if(!check) break;
        size -= 1
    }
    return arr
}


const arr = bubbleSort([3,2,1,4])
console.log(arr)