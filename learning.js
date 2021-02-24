
//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function test_number(n){
	if (n ===1){
		return false;
	}
	else if ( n===2 ){
		return true;
	}
	else {
		for(var x = 2; x < n; x++) {
			if(n % x === 0){
				return false;
             
			}
		}
		return true;
	}
}
	console.log(test_number(78));




//JavaScript function to get the function name
function jack(){
	console.log(arguments.callee.name);
}
jack();

//reverse number
 var reverse = [9, 97, 56, 68, 34, 56, 68,90];
 var r = reverse.reverse();
 console.log(r);

