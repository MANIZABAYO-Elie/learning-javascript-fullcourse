//learning javascript full course



//console.log("hello world")
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
// var number = 25; 
// // const  can not be re-assigned
// const pi = 3.14;

// let can be re re-assigned and is accessed in inside a function.
// "" or '' 
// let $name = "James";
//     name = 'Kalisa'
// console.log($name);
// let text = " God's plan never ends"
// console.log(text);
// console.log(name);
// // string concatenation
// let last_name = "MANIZABAYO"
// let first_name = "Elie";
// let $full_name  = "my full name is"+ "" +last_name.concat("" +first_name) 
// let fullName =  last_name +""+ first_name;
// console.log("My name is ",fullName);
// console.log($full_name);

// // date  26-08-2024  learning javascript 
// // Operators 
// // assignment operator =
// //increment 
// let number01 = 14;
// number01 += 2;
// console.log(number01);
// // data types
// //1.strings
// const str = " I am a man "
// console.log(typeof str);
// //2.numbers
// let $number = 23;
// // boolean
// let value1 = true;
// let value2 = false
// //null


// // undefined
// let value4;
// //
// console.log(typeof str);
// console.log(typeof $number);
// console.log(typeof value2);
// console.log(typeof value4);

// // functions , arrays and objects

// function greet(name){
//     console.log("Hello ",name);
// }
// console.log(greet("elie"));


// //function declaration 
// ;

// function addTwoNumbers(num1,num2){
//     return num1+num2;
// }
// console.log(addTwoNumbers(20,30));
// // function expression 
// const multiplyTwoNumbers = function(x,y){
//     return x+y
// }
// console.log(multiplyTwoNumbers(11,12));
// // Arrow functions 
// const multiply = (a,b)=> a*b;
// console.log(multiply(10,20));
// // dot notation 
// const person ={
//     name : 'Elie',
//     age : 40,
//     eduction :false,
//     married: true,
//     siblings:['leonard','eric','david','samuel'],
//     greetings: function sayHello(){
//         console.log("My name is Elie")
//     }
// }
//    console.log(person.age);
//    console.log(person.eduction);
//    console.log(person.siblings[2]);

// // conditional statements
// // comparition operators
// // else if and !
//  //>,<, >=,<=,==,=== , != ,==!
//  const value = true;
//  if (value) {
//     console.log('hello world');
//  } 
//  const $value1 = 2<1;
//  if ($value1) {
//     console.log('hello world');
//  }else{
//     console.log('hello there');
//  }
 
//  let digit1 = 4;
//  let digit2 = 10;
//  let answer = digit1>=digit2
//  if(digit1>digit2){
//     console.log('first number is bigger than second');
    
//  }else if(answer){
//    console.log('first number is equal to second');
//  }
//  else{
//     console.log('second number is bigger than first');
//  }

// logic operators ||-or && and, !

// const name = "peter";
// const age  = 27;
// if(name==="BOB" || age===27){
//     console.log('hello there user',name)
// }else{
//     console.log('wrong values');
// }
// // switch statements
// // dice values : 1-6;
// const dice = 6 ;
// switch (dice) {
//     case 1:
//         console.log('you got one');
//         break;
//     case 2:
//         console.log('you got two');
//         break;
//     case 3:
//         console.log('you got three');
//         break;
//     case 4:
//         console.log('you got four');
//         break;
//     case 5:
//         console.log('you got five');
//         break;
//     case 6:
//         console.log('you got six');
//         break;
// }

//loops
// repeatedely run a block of code while condition is true

// const amount =  10;
//while(amount>0){
//console.log('I have a ' +amount+ ' Dollars');
// amount--;
//}

// let  money = 0
// do{
//     console.log('you have ' +money+ ' in your account');
//     money++;
// }
// while(money<10);

// let i;
// for(i=0;i<10;i++){
//     console.log('the number is: ' +i);
// }
//string properties and methods
// let text = "PETER";
// let result = text.length;
// console.log(result);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(0));
// console.log(text.charAt(text.length-1));
// let split_text = text.split('')
// console.log(split_text);
//  reversedText = split_text.reverse()
//  console.log(reversedText);
   
          //arrays properties and methods
let names = ["bob","king","James","Brandon","Jennifer"];
// length 
console.log(names.length);
console.log(names[0]);
// concat 
let lastNames =["Kalisa","Irakoze","Ishimwe"]
let allNames = names.concat(lastNames);
console.log(allNames);
console.log(allNames.reverse());
// unshift
allNames.unshift("Susan");
console.log(allNames);
// shift
console.log(allNames.shift());
//push 
allNames.push("clementine");
console.log(allNames);
//pop
allNames.pop()
//console.log(allNames.pop());


