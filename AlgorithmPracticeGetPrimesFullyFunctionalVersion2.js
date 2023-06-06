// Given a single integer 'n', find all prime numbers from 1 to 'n'
function getPrimes(integer) {
    let allNumberArray = [];
    let listOfPrimes = [];

    for (var i = 2; i <= integer; i++) {
        allNumberArray.push(i); // creates an array of all integers from 2 to the chosen integer
    }

    function checkIfDivisible(number) {
        for (var x = 2; x < number; x++) { // iterates through allNumberArray
            if (number % x === 0) {
                return false; // checks to see if the any integer less than the selected number in allNumberArray has a remainder of 0
            }
        }
        return true; // if there are no numbers from 0 to number with a remainder of 0, marks that number as true
    }

    for (var i = 2; i <= integer; i++) {
        if (checkIfDivisible(i)) {
            listOfPrimes.push(i); //adds numbers characterized as true to the array liftOfPrimes
        }
    }

    return listOfPrimes;
}


let test1 = 100;
let primes = getPrimes(test1);

console.log('Integer = ' + test1);
console.log('The prime number from 0 to ' + test1 + ' are: ')
for (let i = 0; i < primes.length; i++) {
    process.stdout.write(primes[i].toString());
    if (i < primes.length - 1) {
        process.stdout.write(', ');
    }
    if ((i + 1) % 10 === 0) {
        console.log(); // Move to a new line after every 10th number
    }
}