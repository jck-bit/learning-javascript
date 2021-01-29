//the shift (method) it removes the first element of an array and returns it
var element = [105, 1, 2,3].shift();
console.log("removed element is:" + element);

//slice(method) extract a section of an array and returns a  new array

var arr = ["orange", "mango", "banana", "sugar", "tea"];
console.log("arr.slice(1,2): " + arr.slice(1, 2));
console.log("<br />" + arr.slice(1, 3))

// the sort method
var arr = ["orange", "mango", "apple", "sugar"];

var sorted = arr.sort();
console.log(sorted);

//to string(method)
var arr = new Array("orange", "mango", "banana", "sugar"); 
 
var str = arr.toString(); 
console.log(  str);

//Date (method)it returns todays date, time (no object is called)

 var dt = Date();
 console.log(dt);