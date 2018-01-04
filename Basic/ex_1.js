// Write a JavaScript program to display the current day and time in the following format.
//     Sample Output : Today is : Friday.
//     Current time is : 4 PM : 50 : 22

console.log('script 1');

var dt = new Date();
var day = dt.getDay();
var dayList = ['Sunday', 'Monday', 'Thusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log('Today is: ' + dayList[day]);

var hour = dt.getHours();
var min = dt.getMinutes();
var sec = dt.getSeconds();

var amPm = (hour >= 12)? 'PM' : 'AM';

console.log('Current time is: ' + hour + ' ' + amPm + ' ' + min + ' : ' + sec);


// Write a JavaScript program to get the current date.
//     Expected Output :
//     mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

console.log('script 2');

var today = new Date();

var dd = today.getDay();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if(mm<10) {
    mm = '0' + mm;
}

today = mm + '-' + dd + '-' + yyyy;
console.log(today);

today = mm + '/' + dd + '/' + yyyy;
console.log(today);

today = dd + '-' + mm + '-' + yyyy;
console.log(today);

today = dd + '/' + mm + '/' + yyyy;
console.log(today);


// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

console.log('script 3');

var a = 5;
var b = 6;
var c = 7;

var perimeter = (a + b + c) / 2;

var area =  Math.sqrt(perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c)));
console.log(area);


// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

console.log('script 4');

for (var year = 2014; year <= 2050; year++) {
    var day = new Date(year, 1, 0);

    if (day.getDay() === 0) {
        console.log('1st January is being a Sunday ' + year);
    }
}

// Write a JavaScript program to check a given integer is within 20 of 100 or 400.

console.log('script 5');

function testhundred (x) {
    return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
}

console.log(testhundred(10));
console.log(testhundred(90));
console.log(testhundred(99));
console.log(testhundred(199));
console.log(testhundred(200));


// Write a JavaScript program to check from two given integers, if one is positive and one is negative.

console.log('script 6');

function pos_neg (x, y) {
    if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(pos_neg(-5, 5));
console.log(pos_neg(5, -5));
console.log(pos_neg(-5, -5));
console.log(pos_neg(5, 5));


// Write a JavaScript program to create a new string adding "Py" in front of a given string.
//     If the given string begins with "Py" then return the original string.

console.log('script 7');

function stringCheck (str) {
    if (str === null || str === undefined || str.substring(0, 2) === 'Py') {
        return str;
    } else {
        return 'Py' + str;
    }
}

console.log(stringCheck('Python'));
console.log(stringCheck('thon'));