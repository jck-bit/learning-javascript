//the shift (method) it removes the first element of an array and returns it
var element = [105, 1, 2,3].shift();
console.log("Removed element is:" + element);

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

 //get date()...you only get the date

 var dt = new Date("Fri Jan 29 2021 10:15:24");
 console.log(dt.getDate());

 //get day() you only get the day

 var dt = new Date("Fri Jan 29 2021 10:15:24");
 console.log(dt.getDay());
