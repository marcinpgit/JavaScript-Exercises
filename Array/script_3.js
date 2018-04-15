// Write a JavaScript program to find the sum of squares of a numeric vector.

console.log('script 1');

function arraySq(arrayToSum) {
    var sum = 0;
    for(var i = 0; i < arrayToSum.length; i++) {
        sum += Math.pow(arrayToSum[i], 2);
    }
    return sum;
}

console.log(arraySq([1, 2, 3, 9]));


// Write a JavaScript program to compute the sum and product of an array of integers.

console.log('script 2');

function sumOfProducts(products) {
    var sum = 0;
    var prod = 1;
    for(var k = 0; k < products.length; k++) {
        sum += products[k];
        prod *= products[k];
    }
    return sum + " " + prod;
}

console.log(sumOfProducts([1, 2, 3, 4, 5, 6]));


// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

console.log('script 3');

function removeDuplicate(arr) {
    var newArr = [];
    var obj = {};
    for(var j = 0; j < arr.length; j++) {
        obj[arr[j]] = 0;
    }
    for(j in obj) {
        newArr.push(j)
    }
    return newArr;
}

console.log(removeDuplicate([23, 1, 1, 2, 3, 4, 4]));


// We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
//     "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
//     Note : Use ordinal numbers to tell their position.

console.log('script 4');

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function ordinalNum(n)
{
    var o = ["th","st","nd","rd"],
        x = n % 100;
    return x + (o[(x - 20) % 10] || o[x] || o[0]);
}

for(var n = 0; n < color.length; n++){
    var ordinal = n + 1;

    var output = (ordinalNum(ordinal) + " choice is " + color[n]);

    console.log(output);
}