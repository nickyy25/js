// Primitive
// 7 types : String, Number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456636333333337n

// Reference (Non- Primitive)
// array, objects, functions

const heros = ["shaktiman", "nagraaj", "doga"]; //array
let myObj = {
              name: "nicky"

            }   // {} contains objects

 // Function Declare
 const myFunction = function(){
     
  //  console.log("Hello World");  
 }  

// console.log(typeof myFunction); // object datatype

 // **************************************************

 // stack(primitive), Heap(non-primitive)

 let myname = "Nicky"
 let anothername = myname
 anothername = "code with nicky"

 console.log(anothername);
 console.log(anothername);

 let userOne = {
   email : "user@google.com",
    upi : "user@ybl"
 }

 let userTwo = userOne
 userTwo.email = "nicky@google.com"

 console.log(userTwo.email);
 console.log(userOne.email);

 
 
