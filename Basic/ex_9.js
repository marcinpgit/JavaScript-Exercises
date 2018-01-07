
// Write a JavaScript program to check three given numbers, if the three numbers are same return 30
// otherwise return 40 and if two numbers are same return 20.

console.log('script 1');

function dataCheck (x, y, z) {
    if (x == y && y == z && x == z) {
        return 30;
    }
    if (x == y || y == z || x == z) {
        return 20;
    } else {
        return 40;
    }
}

console.log(dataCheck(4, 4, 4));
console.log(dataCheck(4, 5, 6));
console.log(dataCheck(4, 5, 4));


// Write a JavaScript program to check if three given numbers (integers) are increasing in strict mode and flag is "false",
//     however if "true" is false the numbers will in soft mode.
//     Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

console.log('script 2');

function numberCheck (num1, num2, num3) {
    if (num2 > num1 && num3 > num2) {
        return 'strict mode';
    }
    if (num1 > num2 && num3 > num2 && num3 > num1) {
        return 'soft mode';
    }
    if (num1 == num2 && num3 > num1) {
        return 'soft mode';
    } else {
        return 'undefined';
    }
}

console.log(numberCheck(10, 15, 31));
console.log(numberCheck(24, 22, 31));
console.log(numberCheck(22, 22, 31));
console.log(numberCheck(22, 22, 22));


// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

console.log('script 3');

function digitCheck (a, b, c) {
    return (a % 10 == b % 10) ||
        (a % 10 == c % 10) ||
        (b % 10 == c % 10);
}

console.log(digitCheck(23, 123, 30));
console.log(digitCheck(23, 45, 12));
console.log(digitCheck(340, 230, 60));


// Write a JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others.

console.log('script 4');

function intCheck (q, w, e) {
    return (Math.abs(q - w) >= 20) ||
        (Math.abs(q - w) >= 20) ||
        (Math.abs(w - e) >= 20);
}

console.log(intCheck(23, 45, 10));
console.log(intCheck(23, 23, 10));
console.log(intCheck(21, 66, 75));