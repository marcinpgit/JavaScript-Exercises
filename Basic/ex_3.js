// Write a JavaScript program to get the difference between a given number and 13,
// if the number is greater than 13 return double the absolute difference.

console.log('script 1');

function dif (num) {
    if (num > 13) {
        return (num - 13) * 2;
    } else {
        return 13 - num;
    }
}

console.log('script 1');
console.log(dif(44));
console.log(dif(3));


// Write a JavaScript program to compute the sum of the two given integers.
//     If the two values are same, then returns triple their sum.

console.log('script 2');

    function sum (x, y) {
    if (x == y) {
        return (x + y) * 3;
    } else {
        return x + y;
    }
}

console.log('script 2');
console.log(sum(3, 3));
console.log(sum(5, 8));


// Write a JavaScript program to compute the absolute difference between a specified number and 19.
// Returns triple their absolute difference if the specified number is greater than 19.

console.log('script 3');

function difference (n) {
    if (n > 19) {
        return (Math.abs(19 - n)) * 3;
    } else {
        return Math.abs(n - 19);
    }
}

console.log(difference(25));
console.log(difference(10));


// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

console.log('script 4');

function check (number1, number2) {
    return ((number1 == 50 || number2 == 50) || (number1 + number2 == 50));
}

console.log(check(25, 25));
console.log(check(50, 13));
console.log(check(34, 67));
