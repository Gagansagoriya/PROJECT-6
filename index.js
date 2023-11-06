// practice -set -question


// console.log(hello-world);
// var myname = 'gagan mehara';
// console.log(myname);
// var _myname = "vinod";
// var _1my__Name = "bahadur";
// var 1myname = "thapa";
// var $myname = "thapa technical";
// console.log(_myname , _1my__Name ,$myname);

// typeof operator\
// console.log(typeof(myname));
// var myAge = 26;
// console.log(myAge);
// console.log(typeof(myAge));
// console.log(10 + "10");
// console.log(9 - "5");
// console.log("java" + "script");
// console.log("vonod" -"thapa");
// console.log(true + true);
// var myPhoneMo = globalT
// console.log(true+false);
// console.log(false - true);

// interview Question
// Diffrence between null vs undefinded
// var imNull = null;
// console.log(imNull);
// console.log(typeof(imNull));

// var imundefinded;
// console.log(imundefinded);
// console.log(typeof(imundefinded));

// var phoneNo = 98274286358;
// var name = "Sahil chacha";

// console.log(isNaN(phoneNo));
// console.log(isNaN(name));
// if(isNaN(name)){
//     console.log("please enter a valid number");
// }

// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(Number.isNaN(NaN));
// var x = 6;
// var y = 6;

// console.log('is x and y are both equal :  ${x == y}');
// post indcrement
// var num = 5;
// var newnum = num++;
// console.log(newnum);
// console.log(num);

// pre increment
// var num = 5;
// var newnum =++num;
// console.log(newnum);
// console.log(num);

// post Decrement

// var  a = 3;
// var b = 4;
// var tommorow;
// if(tommorow == 'rain'){
//     console.log("Take u a raincote");
// } else{
//     console.log("no need to take a raincote");
// }
//  var  year = 2020;
//  if ((year%4==0) && ((year%400==0) || (year%100!==0))){
//   console.log("This year " + year +" is a leap year");
//  } else{
// console.log("This year " +year + "  is not a Leap year");
//  }

// What is truthly and falsy values in javascript
// 0,"",undefined,null,NaN,False** is falsy values
// if(score = 0){
//     console.log("Yay, we won the game");
// }else{
//     console.log("NO, we loss the game");
// }

// What is ternary operator
// The conditional (ternary) operator is the only javascript operator 
// that takes three operands
// var age  = -1;
// if( age >= 18 && age <= 100){
//     console.log("you are aligable to vote");
// } else if( age < 18 && age >= 1){
//     console.log("you are not aligable to vote");
// }
// else{
//     console.log("invailid age");
// }
// var age  = 2;
// console.log((age >= 18 && age <= 100) ? "you can vote" : (age < 18 && age >= 1)
//  ? "you are not aligable to vote" : "invailid age");


// 3 Switch Statement 
// Evalutes an expresion, matching the expressin's value to a case
// clause, and executes statements associeated with that case.

// 1st without break statment
// Find the Area of circle, triangle and rectangle?

// var area = 'rectangle';
// var pi = 3.14 , l = 5; r = 3 , b = 8;

// switch (area) {
//     case 'circle':
//     console.log("the area is a circle " + (pi *(r**2)));
//     break;
//     case 'triangle' :
//     console.log("the are is a triangle is "+ (l * b)/2);
//     break;
//     case "rectangle":
//     console.log("the area is a rectangle is : " + (l * b));
//     break;
//     default :
//     console.log("please enter a vailid value");

// }

// while loop statement
// The while statement creates a loop that executes a specified statement
// as long as teh test condition evaluates to true.
// var i =3;
// var j = 1;
// var num = 10;
// while(j <= num){
//     console.log(i*j);
//     // i++;
//     j++;
// }

// // Do-while loop statement
// var i =3;
// var j = 1;
// var num = 10;
// do {
//     console.log(i*j);
//     // i++;
//     j++;
// }while(j <= num);

// For loop statements
// var i =8996;
// for(var j = 1; j <= 10;j++){
//     console.log(i*j);
// }
// var i =89;
// for(var j = 1; j <= 10;j++){
//   console.log(i +" * "+ j +" = "+ i*j);
// }\]

// Functions Defination
// Before we use a funciton,we need to define it.
// A function defination (also called a funtion declaration, or funtion statement)
// consists of the funtion keyword, followed by.

// The name of the function.
// A list of parameters to the funtion , enclosed in paranthasis and separated by commas.
// The javascript statements that define the function, enclosed in curly branckets 

// function sum( a ,  b){
// var total = a + b;
// console.log(total);
// }
// sum(10 , 50);
// sum(10,90);
// *-**************************----------------------*********************
// Why Functions?
// You can reuse code:Define the code once, and use it many times.
// You can use the same code many times with diferent arguments.

// or

// A funtion is a group of reusable code which can be called anywhere 
// in your program.This eliments the need of writing the same code 
// again and again.
// *********************----------------***********************
// Function Expressions
// Function expression simply means 
// create a function and put it into the variable.

// function sum( a ,  b){
//     var total = a + b;
//     console.log(total);
//     }
// var funExp = sum(5,10)
// funExp;
// ****************------------***********************
// Return Keyword
// When JavaScript reaches a return statement,
// the function will stop executing.

// Funtion often compute a return value.
// The return value is returned back to 

// function sum(a ,b){
//     return total = a + b;
// }
// var funExp = sum(5,69);
// console.log(funExp);
// **************----------*************************
// Anonymous Function 
// A finction expression is similar to and has the same syntax as a function declaration one can define 
// "named " function expression (where the name of the expression might be used 
// in he call stack for example)
// or "anonymous" function expression.

// var funExp = function(a ,b){
//     return total = a + b;
// }
// var sum1 = funExp(15,25);
// var sum2 = funExp(25,30);
// console.log(sum1);
// console.log(sum2);
// console.log(funExp(25,15));

// ***************************************************************

// LET AND CONST AND VAR

// VAR

// var myname = "Gagan Mehra";
// console.log(myname);
// myname = "Gagan prasad";

// LET

// let myname = "Gagan Mehra";
// console.log(myname);
// myname = "Gagan prasad";

// CONST

// const myname = "Gagan Mehra";
// console.log(myname);
// myname = "Gagan prasad";

// function dataa(){
//     var myFirstName = "Squre"
//     console.log(myFirstName);
//     if(true){
//         var myLastName = "Cricle ";
//         console.log("my inner " +myFirstName);
//         console.log("my inner " +myLastName);
//     }
//     console.log("outer " + myLastName);
// }
// dataa();

// ****************-----------------*******************
// Template listerls (Template Strings)
// JavaScript program to print table for given number (8)?

// output : 8 * 1 = 8
// 
// for(let tablenum = 1; tablenum <= 10; tablenum++){
//     let num = 12;
//     console.log(` ${num} * ${tablenum}  = ${num * tablenum}`);
// }

// ********-----------***********
// Defalult Parameters 
// Default funtion parameters allow named parameters to be 
// intialized with default values if no values\

// function mult(a , b = 5){
//     return a * b;
// }
// console.log(mult(5));

// ***************-------------********************

// Fat Arror Function

// Normal Way of writing Funciton 

// console.log(sum());

// function sum(){
//     let a = 5,b = 6;
//     let sum = a + b;
//     return `the sum of the two number is ${sum}`
// }

// How to convert in into Fat Arrow funcion 
// const sum = () => {
//     let a = 8,b = 6;
//     let sum = a + b;
//     return `the sum of the two number is ${sum}`
// }
// console.log(sum());

// const sum = () => `the sum of the two number is ${(a= 8 ) + (b = 9)}`;
// console.log(sum());

// **Section Arrays in Javascript

// When we use var, we can stored only one value at a time.

// var myFriends =['frnd1' , 'frnd2' , 'frnd3'];


// When we feel like storing multiple values in one variable then
// intead of var,we will use an array.

// In Javascript , we have an Array class, and 
// arrays are the prototype of this class.

// var myFriends =['frnd1' , 'frnd2' , 'frnd3'];


// for(let elements in myFriends){
//     console.log(elements);
// }



// for(let elements of myFriends){
//     console.log(elements);
// }


// myFriends.forEach(function (elements , index, array ) {
// console.log(` index- ${index} name ${elements}  Data ${array}`);
// })\



// myFriends.forEach((elements , index, array) =>{
// console.log(` index- ${index} name ${elements}  Data ${array}`);
// })


// for(let i = 0; i < myFriends.length; i++){
//     console.log(myFriends[i]);
// }
// console.log(myFriends.length);
// console.log(myFriends.push('arya'));
// console.log(myFriends.length);
// for(let i = 0; i < myFriends.length; i++){
//     console.log(myFriends[i]);
// }

// ******Array subsetion 2 Sercing and Filter in an Array********

// Array.prototype.indexof();

// Returns the first (least) index of an elemtnt within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number

// var myFriends =['frnd1' , 'frnd2' , 'frnd3'];


// ***********Array subsection 4  Perform CURD **************

// Array.prototype.push()
// The push() metod adds one or more elements to the 
// end of the array and returns the new length of the array.

// const animls = ['animal1','animal2','animal3'];
// animls.push('animal4');
// for(let i = 0; i < animls.length; i++){
//         console.log(animls[i]);
//     }


// Array.prototype.unshift()
// The 

// const animls = ['animal1','animal2','animal3'];
// animls.unshift('animal4' , 'animal5' , 'aimal6');
// console.log(animls);
// for(let i = 0; i < animls.length; i++){
//         console.log(animls[i]);
//     }

// *********POP/-MTHOD**************
// const animls = ['animal1','animal2','animal3',];
// console.log(animls);
// console.log(animls.pop());
// console.log(animls);

// *************Splice method***************

// const months = ['Jan' , 'Feb','march' , 'April' ,'May' ,'jun','july'];

// Add Dec to end
// const newMOnth = months.splice( 2,0,'march');
// months.splice( 2,0,'march');
// months.splice( months.length,0,'dec');
// console.log(months);
// const indexOfMonth = months.indexOf('march');

// if( indexOfMonth != -1){
// const updateMonths = months.splice(indexOfMonth,1,'March');
// console.log(months);
// }
// else{
//     console.log("no such data found");
// }
// const updateMonths = months.splice(2,2,'March');
// console.log(months);
// console.log(updateMonths);

// const months = ['Jan' , 'Feb','march' , 'April' ,'May' ,'jun','july'];
// const indexOfMonth = months.indexOf('April');

// if( indexOfMonth != -1){
//     const updateMonths = months.splice(indexOfMonth,Infinity);
//     console.log(months);
//     }
//     else{
//         console.log("no such data found");
//     }


//*********-------------*********************** */
// *****Map and Reduce Method 
// Array.prototype.map()
// let newArray = arr.map(callback(currentValue [,index, [array]]))

// Returns a new array containing the reults of calling a 
// funtion on every element in this array.


// const array1 = [1,4,9,16,25];

// num > 9

// let newArr = array1.map((currElem , index, arr) => {
//     return currElem > 9;
// })
// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((currElem , index, arr) => {
//     return `index no = ${index} and the value is ${currElem} belong to ${arr}`
// })
// console.log(newArr);

// Question time

// Question -1 
// let arr = [25,36,49,64,81];

// let arrSqr = arr.map((currElem) =>
// {
//     return Math.sqrt(currElem);
// })
// console.log(arrSqr);

// Question - 2

// let arr1 = [2,3,6,4,8];
// let arr2 = arr1.map((currElem) =>  currElem * 2).filter((currElem) =>  currElem > 10)
// .reduce(( accumulator ,currElem ) =>  accumulator += currElem);
// console.log(arr2);
// **********-***********************
// Reduce Method 
// flatten an array means to convert the 3d or 2d  array into a 
// single dimensional array

// The deduce() method executeds a reduver function (that you provide)
// on each element of the array, desulting in single output values.

// The reducer function takes four arguments :

// Accumulator 
// Current value
// Current Index
// Source Array

// let arr = [5,6,2];

// let sum = arr.reduce(( accumulator ,currElem , index, arr) => {
//     debugger;
//     return accumulator += currElem;
// },7)
// console.log(sum);

// let sArr = [['zone-1' , 'zone-2'],
//             ['zone-3' , 'zone-4'],
//             ['zone-5' , 'zone-6'],
//             ['zone-7' , 'zone-8']
//         ];

// let flatArr = sArr.reduce((accumulator, currElem) => {
//     return accumulator.concat(currElem);
// })
// console.log(flatArr);

// ***********------------*************

// STRING IN JAVASCRIPT

// A javascript string is zero or more characters written inside quotes.
// you can use single or double quotes

// String can be created as primitives,
// form stirng literals, or as objets, using the String() constructor

// let myName = "vinod thapa";
// let myChannelName = 'vinod thapa';

// let yName = 'Thapa technicle';

// console.log(myChannelName);
// console.log(myName);
// console.log(myName.length);

// *******---------********
// Escape Character

// let anySentence = "We are the so-called \"vikings\" form the north ";
// console.log(anySentence);

// let sentence = 'We are the so-called "Vikings" form the north';
// console.log(sentence);

// *--**----********--------

// Finding a Stirng in a String 
// String.prototype.indexOf(searchValue [,formIndia])

// The indexOf() method returns the index of the (the position of) the first 
// occurence of a specified text in a string 

// const myBioData = 'I am the Gretest Technision Ever';
// console.log(myBioData.indexOf('e',8));

// const myBioData = 'I am the Gretest Technision Ever';
// console.log(myBioData.lastIndexOf('e',8));


// *******------*********

// Extracting String Parts 

// There are 3 methods for extracting a part of a strings.

// slice(start,end)
// substring(start,end)
// substr(start,end)

// The slice() method 
// slice() extracts a part of a string and returns the extracted part
// in a new string.
// The method takes 2 parameters the start position,
// and the end position (end not included).

// var str = "Apple, Bananna , Kiwi";

// let res = str.slice(0,8);
// let res = str.slice(7,-2);
// console.log(res);

// ********--------*******
// The substring () method
// substring() is similar to slice()

// The difference is that substring () cannot accept 
// negative indexes.

// var str = "Apple, Bananna , Kiwi";
// let res = str.substring(7,-2);
// let res = str.substring(7);
// console.log(res);


// ********--------********
// The substr() Method
// 

// var str = "Apple, Bananna , Kiwi";
// let res = str.substr(0,4);
// let res = str.substr(-4);

// console.log(res);

// *******--------***********----------*********
// CHALLENGE TIME

// let myTweets = "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam, possimus nam repellendus quod saepe ab at veritatis! Nobis vitae molestiae error deserunt facilis, ipsam tempora rerum quidem dolor nam.t consectetur adipisicing elit. Molestias numquam, possimus nam repellendus quod saepe ab at veritatis! Nobis vitae molestiae error deserunt facilis, ipsam tempora rerum q"
// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet.length);
// console.log(myActualTweet);

// **********-----------***********

// The replacing string content

// String.prototype.replace(searchFor,replaceWith)

// The replace() method replaces a specified value 
// with another value a string/.

// let myBioData = "I am binod bahadur thapa vinod";
// let replaceData =  myBioData.replace('binod' , 'Binod');
// console.log(replaceData);

// ////*********--------*********** */

// The chartAt()Method 
// The charAt() metod returns the character at a 
// specified index (position) in a string

// let str ="HELLO WORLD";

// console.log(str.charAt(9));

// *****-------***********
// Tje charCodeAt() method 
// The charCodeat() method returns the unicode of the 
// character at a specified index in a stirng :

// The metjhod returns a UTF- 16 code 
// (an integer between 0 and 65535)

// The unicode standerd provides a unique number for every charater, no matter the platform, device, application,
// or language.UTF-8 is a popular Unicode enoding which has 88-bit code units.


// let str ="HELLO WORLD";

// console.log(str.charCodeAt(0));

// **----------***********-------
// 12:Challenge Time 

// Return the Unicode of te last character in a stirg

// let str = "HELLO WORLD";

// let lastChar = str.length -1;
// console.log(str.charCodeAt(lastChar));

// *******--------***************

// Property Access
// ECMAScript 5(2009) allows property access [ ] on strings

// let str =  "hello world";
// console.log(str[1]);


// ********--------**********
//Other usefull method 

// let myName = "vinod thaApa";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// ********-----------***********
// The concate() Method 
// concat() joins two or more strings

// let fName = "Ishuu";
// let lName = "Sharu";
// console.log(fName + lName);
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(" ",lName));

// *********-------------***********
// Stirng.trim()
// The trim method removes whitespace form both sides of a string

// var str = "           hello world             ";
// console.log(str.trim());

// **********------------**************

// Converting a String to an Array 
// A string can be converted to an array with the 
// split() method
// var text = "a, b,c  |  d,e";
// console.log(text.split(","));
// console.log(text.split(" "));
// console.log(text.split( " | "));

//  *************-----------****************

// Section 9 Math object in JavaScript 

// The JavaScript Math object allows you to perfect
// 
// console.log(Math.PI);

// Math.round()
// returns the value of x rounded to its nearest integer

// let num = 10.499;
// console.log(Math.round(num));

// Math.pow()
// Math.pow(x,y)  returns the value of x to the powe of y

// console.log(Math.pow(2,3));
// console.log(2**3);

// Math.sqrt()
// Math.sqrt () returns the square root of x

// console.log(Math.sqrt(25));


// Math.abs() returns the absolute (positive) value of x

// console.log(Math.abs(-55));

// Math.cell()
// Math.cell() returns the value of x rounded up to its nearest integer 

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));

// console.log(Math.ceil(99.1));
// console.log(Math.round(99.1));

// console.log(Math.min(.1,55,88,-200,-1));

// console.log(Math.max(.1,55,88,-200,-1));

// Math.random() returns a random number between 0 (inclusive) , and 1

// console.log(Math.floor(Math.random() *10));
// console.log(Math.random() *10);

// The trunc() method returns the integer part of a number 

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));


// *********-----------*********
// Practice Time

// if the argument is a positive number , math.trunc()  is equivalent to 
// Math.floor()

// otherwise Math.trunc() is equivalent to Math.floor()
// ***********--------------****************

// Window has methods, properties an object.
// ex setTimeout() or setInterval() are the methods
// where as Documents is the object of the window and
// It also a screen object with properties 
// describing the physical display.

// Now, I know you have a doubt like we have seen the methods 
// and objects of the global object that is window. But what about 
// the properties of the Window Object

// so example of window object properties are 
// innerHeight,
// innerwidth and there are many more

// let's see some practical in DOM html File.

// **********----------***********

// DOM NAGICATION  vs BOM 

// The DOM is Document 


// ********-------Section EVENTS IN JAVASCRIPT*****----------

// HTML events are "thinks" that happen to html elements.
// when JavaScript is used in HTML pages, javascript can "react" on these events 

// HTML events 
// An html event can be somthing the browser does,or something a user does.

// Here are some examples :

// An html web page has finished loading 
// An html input field was changed 
// An html button was clicked 
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// Html allows event handler attributes, with javascript code, to be aded to html element

// 4 Ways of writing Events in JavaScript 

// 1:using inline events alert()
// 2:By calling a function (We already seen and most common way of writing)
// 3: using inline events (html oneclick ="" property and element.oneclick)
// 4: using Event Listeners (addEventsListner and IE's attachEvent)

// check the Events HTML File

// *-----***Section 2 : waht is Event objects
// Event objects ois the parent object of the event object.
// for example 
// MouseEvent, focusEvent, keyboardEvent etc


// *****----Section 3 : Keybooard Event in JavaScript
// Events that occur when user pressed a key on the keyboard,
// belongs to the KeyboardEvent Object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp

// ********---------**************--------************
// Section 4 inputevents in JavaScript
// The onchange events sccurs when the value of an element has been changed.

// For radiobuttons and chackboxes, the onchange event occurs when the 
// checked state has been changed.


// ***********------------*****************
// JavaScript Timing Events 

// The window object allow execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with javaScript are:

// setTimeout(funtion, milliseconds)
// Executes a funtion, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.

// setTimeout()

// clearTimeout()

//setInterval()

// clearInterval()


// ********----------*************
// OOPs in JavaScript
// **************-----------***********
// Q.1 What is Object Literal ?

// Object literal is simlply a key: value pair data structure.
// Storing variables and function together in one container,
// we can refer this as an Objects.

// object = school bag

// How to crate an Object?

// 1st Way 

// let bioData = {
//     myName : "My Name is here",
//     myAge : 23,
//     getData : function() {
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// };
// bioData.getData();
// 2nd Way no need to write function as well after es6 

// let bioData = {
//     myName : "Serosha",
//     myAge : 23,
//     getData() {
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// };
// bioData.getData();

// Waht if we want object as a value inside an Object

// let bioData = {
//     myName : {
//         realName : 'Leagal Name',
//         channleName : "The orcal"
//     },
//     myAge : 23,
//     getData() {
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// };

// console.log(bioData.myName.channleName);
// bioData.getData();

// What is this Object?

// The defination of "this" object is that it contain the current context.

// The this object can have different values depending on where it is placed.

// Fro example 1
// console.log(this.alert('This is This'));

// For example 2
// function myName() {
//     console.log(this);
// }
// myName();

// For example 3
// var myNames = 'This';
// function myName() {
//     console.log(this.myNames);
// }
// myName();

// Example 4

// const object ={
//     myAge : 26,
//     myName () {
//         console.log(this.myAge);
//     }
// }
// object.myName();

// Example 5

// const object ={
//     myAge : 26,
//     myName () {
//         console.log(this);
//     }
// }
// object.myName();

// const obj ={
//     myAge : 26,
//     myName: ()  => {
//         console.log(this);
//     }
// }
// obj.myName();


// Problem 1

// let bioData = {
//     myName :{
//         realName : "Squarel",
//         channleName : "Squees"
//     },
//     myAge : 26,
//     getData () {
//         console.log(`My name is ${this.myName.realName} and my age is ${this.myAge}`);
//         console.log(`My name is ${this.myName.channleName}`);

//     }
// }

// bioData.getData();
