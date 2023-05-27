function swap(arr) {
    var arrNew = [];
    var lastIndex = arr[arr.length - 1];
    var firstIndex = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[0]) {
            arrNew[i] = lastIndex;
        } else if (arr[i] === arr[arr.length - 1]) {
            arrNew[i] = firstIndex;
        } else {
            arrNew[i] = arr[i];
        }
    }
    return arrNew;
}
let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(swap(test1))