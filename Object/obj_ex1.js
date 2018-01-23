// Write a JavaScript program to list the properties of a JavaScript object
// Sample object:
//     var student = {
//         name : "David Rayy",
//         sclass : "VI",
//         rollno : 12 };
// Sample Output: name,sclass,rollno

console.log('script 1');

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

console.log(Object.keys(student));


// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property
// Sample object:

console.log('script 2');

var studentList = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

delete studentList.rollno;

console.log(studentList);


// Write a JavaScript program to get the length of an JavaScript object.
// Sample object :

console.log('script 3');

var studList = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

var size = Object.keys(studList).length;
console.log(size);


// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

console.log('script 4');

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) {
    console.log(library[i].author);
    console.log(library[i].title);
    console.log(library[i].readingStatus);
}


// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

console.log('script 5');

function cylinder (cylHight, cylDiameter) {
    this.cylHight = cylHight;
    this.cylDiameter = cylDiameter;
}

cylinder.prototype.vol = function () {
    var radius = this.cylDiameter / 2;
    return Math.PI * radius * radius * this.cylHight;
};

var cyl = new cylinder(5, 6);

console.log(cyl.vol().toFixed(4));