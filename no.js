
function number(num){


 if  (num % 5 == 0 && num % 3 == 0)
	{console.log('fizzbuzz');
}
 else if( num % 5 == 0){
	console.log('fizz');
}
else if  (num % 3 == 0) 
	{console.log('buzz');
}

	else{
		return num;
	}

}

console.log(number(15));