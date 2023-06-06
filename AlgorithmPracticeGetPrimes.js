// Given a single integer 'n', find all prime numbers from 1 to 'n'
function getPrimes(integer) {
    let allNumberArray = [];
    let listOfPrimes = [];

    for (var i = 2; i <= integer; i++) {
        allNumberArray.push(i);
    }

    function checkIfDivisible(number) {
        for (var x = 2; x < allNumberArray.length; x++) {
            if (number % allNumberArray[x] === 0) {
                return false;
            }
        }
        return true;
    }

    for (var i = 2; i <= integer; i++) {
        if (checkIfDivisible(i)) {
            listOfPrimes.push(i);
        }
    }

    return listOfPrimes;
}


let test1 = 100
console.log('Integer = ' + test1);
console.log('The prime number from 0 to ' + test1 + ' are: ' + getPrimes(test1));