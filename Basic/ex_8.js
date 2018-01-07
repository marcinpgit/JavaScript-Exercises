// Write a JavaScript program to check if the last digit of the three given positive integers is same.

console.log('script 1');

function checkDigit (a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return (a % 10 == b % 10 || b % 10 == c % 10 || a % 10 == c % 10);
    } else {
        return false;
    }
}

console.log(checkDigit(123, 234, -45));
console.log(checkDigit(123, 234, 45));
console.log(checkDigit(100, 200, 30));
console.log(checkDigit(126, 316, 236));
console.log(checkDigit(3, 3, 3));


// Write a JavaScript program to create new string with first 3 characters are in lower case.
// If the string length is less than 3 convert all the characters in upper case.

console.log('script 2');

function newString (str) {
    if (str.length <= 3) {
        return str.toUpperCase();
    } else {
        var firstThree = str.substring(0, 3).toLowerCase();
        var lastString = str.substring(3, str.length);
        return firstThree + lastString;
    }
}

console.log(newString('Abc'));
console.log(newString('ab'));
console.log(newString('marcin'));
console.log(newString('Aleksandra'));
console.log(newString('MONIKA'));


// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

console.log('script 3');

function sum(x, y) {
    var numSum = x + y;
    if (numSum >= 50 && numSum <= 80) {
        return 65;
    } else {
        return 80;
    }
}

console.log(sum(5, 23));
console.log(sum(5, 243));
console.log(sum(25, 43));


// Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.

console.log('script 4');

function numberCheck (num1, num2) {
    if ((num1 + num2 == 8) || (Math.abs(num1 - num2) == 8) || num1 == 8 || num2 == 8) {
        return true;
    } else {
        return false;
    }
}

console.log(numberCheck(4, 4));
console.log(numberCheck(4, 12));
console.log(numberCheck(8, 23));
console.log(numberCheck(32, 8));
console.log(numberCheck(32, 12));