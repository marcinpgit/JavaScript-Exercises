// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.

console.log('script 1');

function largArray (arrayToSet) {
    var max_val = arrayToSet[0] > arrayToSet[2]? arrayToSet[0]:arrayToSet[2];
    arrayToSet[0] = max_val;
    arrayToSet[1] = max_val;
    arrayToSet[2] = max_val;
    return arrayToSet;
}

console.log(largArray([3, 4, 5]));
console.log(largArray([3, 43, 2]));


// Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.

console.log('script 2');

function middlwArr (q, w) {
    return [q[1], w[1]];
}

console.log(middlwArr([1, 7, 1], [2, 69, 2]));


// Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.

console.log('script 3');

function arrayCreator (arr) {
    return [arr[0], arr[arr.length - 1]];
}

console.log(arrayCreator([3, 9, 0, 5, 32]));


// Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3.

console.log('script 4');

function arrayTest (a) {
    return (a.indexOf(1) != -1 || a.indexOf(3) != -1)
}

console.log(arrayTest([3, 5]));
console.log(arrayTest([4, 5]));
console.log(arrayTest([1, 5]));


// Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3.

console.log('script 5');

function TestMyArray (e) {
    return (e.indexOf(1) == -1 && e.indexOf(3) == -1);
}

console.log(TestMyArray([3, 5]));
console.log(TestMyArray([4, 5]));
console.log(TestMyArray([1, 5]));
console.log(TestMyArray([1, 3]));


// Write a JavaScript program to test if a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.

console.log('script 6');

function testFun (r) {
    var a = r[0];
    var b = r[1];
    return (a == 30 && b == 30) || (a == 40 && b == 40);
}

console.log(testFun([30, 40]));
console.log(testFun([40, 40]));
console.log(testFun([30, 30]));
console.log(testFun([33, 44]));


// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

console.log('script 7');

function funSwap (ar) {
    var firstEl = ar[0];
    var lastEl = ar[ar.length - 1];
    return [lastEl, firstEl];
}

console.log(funSwap([1, 2]));
console.log(funSwap([1, 2, 6]));