// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

// 1. declaration     let x;
// 2. assignment      x =  100;
//                    let x = 100;
//console.log(x);


// let age = 15;

// console.log(typeof age);
// console.log(`You are ${age} years old`);

// var firstname = "Me";
// let lastname = "Lalala";
// console.log("Full name: " + firstname +" "+ lastname);

// let forSale = true;
// console.log(`Is this candy for sale: ${forSale}`);


/*  "Number",
    "String",
    "Boolean",
    "Null",
    "Undefined",
    "Object",
    "Array",
    "Function"
*/ 

let fullname = "Me";
let age = 15;
let isstudent = "true";

document.getElementById("p1").textContent = `Your name is ${fullname}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isstudent}`;