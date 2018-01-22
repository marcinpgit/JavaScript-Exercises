// Write a JavaScript program to find the armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
//     For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

console.log('script 1');

function armstrongNumber() {
    for (var i = 1; i < 10; ++i) {
        for (var j = 0; j < 10; ++j) {
            for (var k = 0; k < 10; ++k) {
                var pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
                var sum = (i * 100 + j * 10 + k);
                if (pow === sum) {
                    console.log(pow);
                }
            }
        }
    }
}

armstrongNumber();

// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

console.log('script 2');

var chr;

for (var i = 1; i <= 6; i++) {
    for (var j = 1; j < i; j++) {
        chr = chr + '*';
    }
    console.log(chr);
    chr = '';
}

// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

console.log('script 3');

var sum3 = 0;
var sum5 = 0;

for (var k = 0; k < 1000; k++) {
    if (k % 3 === 0 || k % 5 === 0) {
        sum3 += k;
    }
}

console.log(sum3 + sum5);
