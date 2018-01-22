// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

console.log('script 8');

function isPrime (num) {
    if (num === 1) {
    return false;
    } else if (num === 2) {
        return false;
    } else {
        for (var k = 2; k < num; k++) {
            if (num % k === 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}

console.log(isPrime(1));


// Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

console.log('script 9');

function checkArg(value) {
    var dtypes = [Function, RegExp, Number, String, Boolean, Object];

    if (typeof value === "object" || typeof value === "function") {
        for (var i = 0; i < dtypes.length; i++) {
            if (value instanceof dtypes[i]) {
                return dtypes[i];
            }
        }
    }
    return typeof value;
}

console.log(checkArg(3));
console.log(checkArg('hello'));
console.log(checkArg(true));
console.log(checkArg(['fvfvfv', 3]));
console.log(checkArg(isPrime(4)));


// Write a JavaScript function which returns the n rows by n columns identity matrix.

console.log('script 10');

function matrix (n) {
    for (var i = 0; i < n; i++) {
        for (var k = 0; k < n; k++) {
            if (i === k) {
                console.log('1');
            } else {
             console.log('0');
            }
        }
        console.log('----------');
    }
}

matrix(4);