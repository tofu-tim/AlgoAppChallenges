function countGreaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        // arr.length = 6 iterates through array increasing i by 1
        if (arr[i] > y) {
            // if the value at index i is greater than the given y parameter,
            count++;
            //   adds 1 to value of count variable
        }
    }
    return count;
}

console.log(countGreaterThanY([22, 12, 13.6, 19, 42, 8], 15));
// returns 3