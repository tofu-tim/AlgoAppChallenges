function sumEvens() {
    var sum = 0;
    for (var i = 0; i <= 1000; i += 2) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumEvens())