// Write a JavaScript program which returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

console.log('script 1');

String.prototype.subStr = function () {

    var subset = [];

    for (var k = 0; k < this.length; k++) {

        for (var i = k + 1; i <this.length + 1; i++ ) {
            subset.push(this.slice(k, i));
        }
    } return subset;
};

console.log('dog'.subStr());


// .Write a JavaScript program to calculate the area and perimeter of a circle.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

console.log('script 2');

function circle (radius) {
    this.radius = radius;
    
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };

    this.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
}

var newCircle = new circle(3);
console.log(newCircle.area().toFixed(2));
console.log(newCircle.perimeter().toFixed(2));


// Write a JavaScript function to print all the methods in an JavaScript object.
// Test Data :
//     console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

console.log('script 3');

function allProperties(obj) {
    return Object.getOwnPropertyNames(obj);
}

console.log(allProperties(Math));
console.log(allProperties(Array));
