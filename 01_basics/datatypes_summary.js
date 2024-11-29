// Primitive 

// 7 types : String , Number , Boolean , Null , Undefined , Symbol , Bigaint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotheId = Symbol('123');

// console.log(id == anotheId);

// const bigNumber = 883028271693239265n



// Non- primitive (Reference)

// Array, Object, Function

const fabrics = ["Cotton","linen","polyster"]
let myObj = {
    name: "Aftab",
    age: 21,
}

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof id);
// http://262.ecma-international.org/5.1/#sec-11.4.3





// Stack(primitive) , Heap(Non-primitive)

let myYoutubename = "Aftabandyoutube"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Aftab@google.com"
console.log(userOne.email);
console.log(userTwo.email);
