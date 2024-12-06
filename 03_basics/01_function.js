

function sayMyName(){
    console.log("A");
    console.log("F");
    console.log("T");
    console.log("A");
    console.log("B");
}
// sayMyName()

// function addTwoNumbers(number1, number2){  //parameters

//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){  //parameters

    // let result = number1 + number2
    // return result
    return number1 + number2
    
}
const result = addTwoNumbers(3, 5)       //Arguments

// console.log("Result:", result);

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("please enter a username");
    return
    }

    return '${username} just logged in'
}
// console.log(loginUserMessage("Aftab"))
console.log(loginUserMessage("Aftab"))



