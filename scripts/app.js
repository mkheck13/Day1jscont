

// These are JS's primitive data types
let myName = "Jolli Bee";
let myAge = 33;
let myBool = true;

// This null variable is saying that it is empty but can accept a value
let myNull = null;

// The variable is declared but has no value set to it
let notDefined;
console.log(notDefined);

notDefined = "I am defined now";

console.log(notDefined);
console.log(myNull);

let onOrOff = false;

if (onOrOff ==true){
    console.log("The Light is on");
}else{
    console.log("The Light is off");
}

let newNumber = 11;

for(let i = 0; i < newNumber; i++){
    console.log(i);
}

function SayHello(){
    console.log("Hello");
}
SayHello();

function SayHelloWithName(name){
    let greeting = "Hello" + name;
    console.log("Hello " + name );
    console.log(`Hello ${name}`);
}

SayHelloWithName("Ken");
SayHelloWithName(myName);

let myArray = ["ken", "Isaiah", "five", 5, true];
for(let i =0; i < myArray.length; i++){
    console.log(myArray[i]);
}

let changeMe = document.getElementById("changeMe");
// console.log(changeMe);
let changeBtn = document.getElementById("changeBtn");
// console.log(changeBtn);

changeBtn.addEventListener('click', function(e){
    changeMe.textContent = "Text has been changed"
});