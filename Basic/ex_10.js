// Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.

console.log('script 1');

function twoNum (a, b) {
    if (a == 15 || b == 15) {
        return true;
    }
    if ((a + b == 15) ||
        (Math.abs(a - b) == 15)) {
        return true;
    } else {
        return false;
    }
}

console.log(twoNum(7, 8));
console.log(twoNum(15, 30));
console.log(twoNum(5, 3));
console.log(twoNum(15, 233));


// Write a JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11.

console.log('script 2');

function checkFun (d) {
    if ((d % 7 === 0 || d % 11 === 0) && (d % 7 != d % 11)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkFun(12));
console.log(checkFun(7));
console.log(checkFun(22));
console.log(checkFun(17));


// Write a JavaScript program to check if a number in the range 40..10000 inclusive presents in two number (in same range).
// For example 40 presents in 400 and 4000.

console.log('script 3');

function test_digit(x, y)
{
    let x_div = parseInt(x / 40),
        x_mod = x % 40,
        y_div = parseInt(y / 40),
        y_mod = y % 40;
    return x_div === y_div || x_mod === y_mod ||
        x_div === y_mod || x_mod === y_div;
}

console.log(test_digit(40, 4000));
console.log(test_digit(80, 320));
console.log(test_digit(89, 4000));