// singleton
//objecct literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Aftab",
    "full name": "Aftab Khan",
    [mySym]: "myKey1",
    age: 22,
    locatiion: "Boisar",
    email: "aftab@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email = "aftab@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "aftab@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log('Hello JS user", ${this.name}');
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());