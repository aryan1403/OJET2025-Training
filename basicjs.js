let arr = ["Aaryan", 60, true, null, 45, 90];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

let a;
a = null;

// arr.forEach(value => console.log(value));
// arr.filter(e => typeof e === 'number')
//     .forEach(e => console.log(e));

arr.filter(e => typeof e === 'number')
    .map(e => e * 2)
    .forEach(e => console.log(e));

let x = 10;
y = 6;

//x > y ? console.log("x is greater") : console.log("y is greater");

let str = "Aaryan Kumar is a Trainer";

console.log(str.length)
console.log(str.indexOf('Kumar'))
console.log(str.toUpperCase())
console.log(str.substring(1, 6));
console.log(str.replace('Kumar', ''))
const words = str.split(' ');
console.log(words);

{ // block scope
    let aryan = 10;
}

// console.log(aryan); // error

// var

// let v = 10;
// function varTest() {
//     // console.log(v); // refrence error
//     let v = 20;
//     console.log(v);
// }

// varTest();
// console.log(v);

var cars = ['BMW', 'Volvo', 'Mini'];
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for(let car of cars) {
    console.log(car);
}

for (let car in cars) {
    console.log(cars[car]);
}
