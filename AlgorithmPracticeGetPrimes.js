// Given a single integer 'n', find all prime numbers from 0 to 'n'
function getPrimes(integer) {
    let allNumberArray = [];

    for (var i = 1; i <= integer; i++) {
        allNumberArray.push(i);
    }
    return allNumberArray;
}
let test1 = 20
console.log('Integer = ' + test1);
console.log(getPrimes(test1));