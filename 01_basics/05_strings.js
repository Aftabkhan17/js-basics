const name = "aftab"
const repoCount = 50 

// console.log(name + repoCount + "Value");

console.log('Hello my name is ${name} and my repo count is $ {repoCount}');

const gameName = new String('aftab-m-khan')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-4, 4)
console.log(anotherString);

const newStringOne = " Aftab   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://aftab.com/aftab%20khan"
console.log(url.replace('%20','-' ));

console.log(url.includes('rehan'));

console.log(gameName.split('-'));







