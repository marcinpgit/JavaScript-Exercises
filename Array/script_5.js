// Write a JavaScript program to find duplicate values in a JavaScript array.

console.log('script 1');

var newArray = [];
function duplicateValues(ar) {
    for(var i = 0; i < ar.length; i++) {
        newArray.push(ar[i], ar[i]);
    }
    return newArray;
}

console.log(duplicateValues([0, 1, 2, 34, 4, 65]));


// Write a JavaScript function to find the difference of two arrays.
//
//     Test Data:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

console.log('script 2');

function difference (ar1, ar2) {
    var temp = [];

    ar1 = ar1.toString().split(',').map(Number);
    ar2 = ar2.toString().split(',').map(Number);

    for (var i in ar1) {
        if (ar2.indexOf(ar1[i]) === -1) temp.push(ar1[i]);
    }
    for (var i in ar2) {
        if (ar1.indexOf(ar2[i]) === -1) temp.push(ar2[i]);
    }
    return temp.sort((a, b) => a - b);
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));

