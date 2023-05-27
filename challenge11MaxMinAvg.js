function maxMinAvg(arr) {
    var arrSum = 0;
    var arrMax = arr[0];
    var arrMin = arr[0];

    for (var i = 0; i < arr.length; i++) {
        arrSum += arr[i];
        if (arr[i] > arrMax) {
            arrMax = arr[i];
        }
        if (arr[i] < arrMin) {
            arrMin = arr[i];
        }
    }

    var arrAvg = arrSum / arr.length;
    var arrNew = [arrMax, arrMin, arrAvg];
    return arrNew;
}

let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(maxMinAvg(test1))