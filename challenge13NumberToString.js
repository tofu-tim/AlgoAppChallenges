function numToStr(arr) {
    var arrString = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arrString.push('Dojo');
        } else {
            arrString.push(arr[i]);
        }
    }
    return arrString;
}

let test1 = [-1, 2, -3, 4, -5, 6, -7, 8, -9]
console.log(numToStr(test1))