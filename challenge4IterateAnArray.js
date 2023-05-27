function iterArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(iterArr(test1))