function findAvg(arr) {
    var avg = 0
    var totalSum = 0
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
    avg = (totalSum / arr.length);
    return avg;
}

let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(findAvg(test1))