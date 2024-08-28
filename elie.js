//learning javascript full course



console.log("hello world")
//  variables declaration
// variable is declared using assignment operator =
//let name = "Elie";
//console.log(name);

//variables are named using camelCase
// you can use digits, letters, dollar sign $
// or  underscore _
// must start with letter or dollar sign or underscore
// no keyword
// can not start with number
//let fullName = "MANIZABAYO ELIE"
//console.log(fullName);
// LET VS CONST VS VAR
//var is accessed in  and updated in scope
var number = 25; 
// const  can not be re-assigned
const pi = 3.14;

// let can be re re-assigned and is accessed in inside a function.
// "" or '' 
let $name = "James";
    name = 'Kalisa'
console.log($name);
let text = " God's plan never ends"
console.log(text);
console.log(name);
// string concatenation
let last_name = "MANIZABAYO"
let first_name = "Elie";
let $full_name  = "my full name is"+ "" +last_name.concat("" +first_name) 
let fullName =  last_name +""+ first_name;
console.log("My name is ",fullName);
console.log($full_name);

// date  26-08-2024  learning javascript 
// Operators 
// assignment operator =
//increment 
let number01 = 14;
number01 += 2;
console.log(number01);
// data types
//1.strings
const str = " I am a man "
console.log(typeof str);
//2.numbers
let $number = 23;
// boolean
let value1 = true;
let value2 = false
//null


// undefined
let value4;
//
console.log(typeof str);
console.log(typeof $number);
console.log(typeof value2);
console.log(typeof value4);

// functions , arrays and objects

function greet(name){
    console.log("Hello ",name);
}
console.log(greet("elie"));


//function declaration 
;

function addTwoNumbers(num1,num2){
    return num1+num2;
}
console.log(addTwoNumbers(20,30));
// function expression 
const multiplyTwoNumbers = function(x,y){
    return x+y
}
console.log(multiplyTwoNumbers(11,12));

