// Write a JavaScript program that accept two integers and display the larger

console.log('script 1');

var number1 = window.prompt('input first integer', '0');
var number2 = window.prompt('input second integer', '0');

if (parseInt(number1, 10) > parseInt(number2, 10)) {
    console.log(number1);
}

if (parseInt(number1, 10) < parseInt(number2, 10)) {
    console.log(number2);
}

if (parseInt(number1, 10) === parseInt(number2, 10)) {
    console.log('integers are equal');
}


// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even,
// and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ---------
//     ----------

console.log('script 2');

for (var k = 0; k <= 15; k++) {
    if (k % 2 === 0) {
        console.log(k + ' is even');
    } else {
        console.log(k + ' is odd');
    }
}


// Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.
// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100 A

console.log('script 3');

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
var pointsSum = 0;

for (var i = 0; i < students.length; i++) {
    pointsSum += students[i][1];
    aveMarks = pointsSum / students.length;
}

alert('avarage grade ' + aveMarks);

if (aveMarks < 60) {
    console.log('F');
}
else if (aveMarks < 70) {
    console.log('D');
}
else if (aveMarks < 80) {
    console.log('C');
}
else if (aveMarks < 90) {
    console.log('B');
}
else if (aveMarks < 100) {
    console.log('A');
}


// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and
// for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

console.log('script 4');

for (var j = 1; j <= 100; j++) {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log(j + ' FizzBuzz');
    }
    else if (j % 3 === 0) {
        console.log(j + ' Fizz');
    }
    else if (j % 5 === 0){
        console.log(j + ' Buzz');
    }
    else {
        console.log(j);
    }
}