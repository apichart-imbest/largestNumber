function findLargestNumber(n) {
    if(n <= 4){
        if (n < 2) {
            return [0, -1]
        }
        return [1, -1]
    }

    let b = Math.floor(Math.sqrt(n))
    let res = 0
    let max = []
    let number = []

    for (b; b >= 2; b--) {
        let a = 2;
        for (a; a <= b; a++) {
            res = a ** b
            if (res < n) {
                max.push(res)
                number.push(Math.ceil(b / 2))
            }
        }
    }

    let index = max.indexOf(Math.max(...max))
    let y = number[index]
    return [Math.max(...max), y]
}

module.exports = findLargestNumber;