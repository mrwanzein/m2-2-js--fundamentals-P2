// Q16
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.

let armstrongNumbers = function() {
    let armstrongNumbers = [];

    for(let i=0; i<=999; i++) {
        let sum = 0;
        let arrayNums = i.toString().split('');

        for(let j=0; j<arrayNums.length; j++){
            sum += Math.pow(parseInt(arrayNums[j]), 3);
        }

        if(sum === parseInt(arrayNums.join(''))) armstrongNumbers.push(sum);

    }

    return armstrongNumbers;
}

console.log(armstrongNumbers());
