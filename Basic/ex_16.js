// Write a JavaScript program to create a new string using the first and last n characters from a given sting.
//     The string length must be greater or equal to n.

console.log('script 1');

function newTxt (str, n) {
    if (str.length >= n) {
        return str.substring(0, n) + str.substring(str.length - n);
    }
}

console.log(newTxt('JavaScript', 3));


// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

console.log('script 2');

function sumArr (nums) {
    return nums[0] + nums[1] + nums[2];
}

console.log(sumArr([1, 1, 1]));


// Write a JavaScript program to rotate the elements left of a given array of integers of length 3.

console.log('script 3');

function rotateElem (arr) {
    return [arr[1], arr[2], arr[0]] ;
}

console.log(rotateElem([1, 2, 3]));


// Write a JavaScript program to check if 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.

console.log('script 4');

function arrayCheck (n) {
    return n[0] == 1 || n[n.length - 1] == 1;
}

console.log(arrayCheck([1, 2, 3]));
console.log(arrayCheck([4, 2, 3]));
console.log(arrayCheck([1, 2, 3, 1]));
console.log(arrayCheck([2, 3, 1]));
console.log(arrayCheck([]));


// Write a JavaScript program to check if the first and last elements are equal of a given array of integers length 3.

console.log('script 5');

function arrayIntCheck (w) {
    if (w.length == 3) {
        return w[0] == w[w.length - 1];
    } else {
        return false;
    }
}

console.log(arrayIntCheck([1, 2, 1]));
console.log(arrayIntCheck([5, 2, 3]));
console.log(arrayIntCheck([]));


// Write a JavaScript program to reverse the elements of a given array of integers length 3.

console.log('script 6');

function revArray (arrToRev) {
    return arrToRev.reverse();
}

console.log(revArray([1, 2, 4]));