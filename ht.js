
/*ssss
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
/*
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
*/
/*
 
var var_name = 'abcd'
 var n = 120;

 this[var_name] = n;
 console.log(this[var_name]);


function difference(n){

	if (n <= 13)
		return 13 -n;

	else
		return(n -13) * 2;

}

console.log(difference(32))
console.log(difference(11))
*/

// a js programme to check whether two numbers are 50 or their sum

/*
function test50(x, y){
	return((x == 50 || y == 50) || (x + y == 50));

}
 console.log(test50(50, 50));
 console.log(test50(40, 40));
 console.log(test50(20, 30));
 console.log(test50(40, 10));

 //to find the difference of 19 and its no.
*/

/*

  function diff(n){
  	if (n <= 19) {
  		return (19-n)
  	}
  	else{
  		return( n - 19) *3
  	}
  }
 console.log(diff(13));
 console.log(diff(29));
 */
 /*
 function positive_negative(x, y){
 	if ((x > 0 && y > 0) ||x > 0 && y < 0  ){
 		return true;
 	}
  else{
   return false;
  }

  }

  console.log(positive_negative(2,2));
  console.log(positive_negative(-2, 2));
  console.log(positive_negative(2, -2));


  //for loop 
  for (var i = 1; i <7; i++) {
  console.log(i);
}
*/

function start_java(str){
	if (str.lenght < 4){
		return false;
	}

   front = str.substring(0, 4);
   if (front == 'java'){
   	return true;
   }

   else{
   	return false;
   }
}

console.log(start_java('javascriptprogramme'));
console.log(start_java('python'));
console.log(start_java('java'));


function range(num){
	if (num > 59.99) {
		return false;
	}
	else{
		return true;
	}
}

console.log(range(60))

// a programme to check the greatest number

function greatest_number(x, y, z)
   {
	max_val = 0;
	if (x > y) 
	{
	    max_val = x;
	}
	else{
		max_val = y;
	}
	if (z >max_val) {
		max_val = z;
	}
	return max_val;
}
console.log(greatest_number(10,2,22))