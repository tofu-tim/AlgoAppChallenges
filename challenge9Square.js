function squareVal(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = (arr[i] ** 2)
    }
    return arr;
}

let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(squareVal(test1))