function findMax(arr) {
    let maxNum = arr[0]; // Assume the first element is the maximum
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]; // Update the maxNumber if a larger number is found
        }
    }
    return maxNum;
}

let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(findMax(test1))