var thisvar = 'first value';
var thatvar = 'second value';

console.log("thisvar:", thisvar,"andthatvar:",thatvar);

//thisvar:first value and thatvar second value

var greet ="hello", who = "world";
console.log("%s, %s" , greet, who);

var market = "am goning", today = "now";
console.log("%s,%s",market,today);


//using the DOM API

var element = document.createElement('p');
element.textContent = "hello world";
document.body.appendChild(element);//add the newly created element to the DOM
