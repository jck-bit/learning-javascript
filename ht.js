
/*
function remove_from_right(arr, n = -1){
	return arr.slice(n)
}
console.log(remove_from_right ([1, 2, 3, 4], -1));

//write a javascript programme to decapitalize the first letter of a string
var str = 'Hey are you coming tommorow';
console.log(str.toLocaleLowerCase());

//to remove an element from the left of an array

function remove_from_the_left(arr, n = 1){
	return arr.slice(n)
}
console.log(remove_from_the_left([1, 2, 3, 4], 1));


//a javascript  function to print to contents of the current window
function print(){
	window.print();
}

//a javascriptprogramme to get the date

var dt = Date();
console.log(dt);

//find the area of a triangle
var side1 = 5;
var side2 = 6;
var side3 = 7;

var s = (side1 + side2 + side3)/2;

var area = math.sqrt(s*((s-side1) *(s-side2) * (s-side3)))
console.log(area);
*/
//how to create a calculator..for division and multiplication

function multiplyby (){
	num1 = document.getElementById("firstNumber").value;
	num2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = num1 * num2;
}

function divideby(){
	num1 = document.getElementById("firstNumber").value;
	num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 /num2;	
}