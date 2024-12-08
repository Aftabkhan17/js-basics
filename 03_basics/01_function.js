

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
// console.log(loginUserMessage("Aftab"))


function calculateCartPrice(val1, val2, ...num1){  //Rest Operator ...num1
    return num1

}
//console.log(calculateCartPrice(200, 400, 500, 2000))

const user ={
    username: "aftab",
    prices: 199
}

function hadleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//hadleObject(user)
hadleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnFirstValue(getArray){
    return getArray[0]

}
// console.log(returnFirstValue(myNewArray));
console.log(returnFirstValue([200, 400, 100, 600]));


