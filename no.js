//a recursive function vs a while loop

function countdown(num){
	if (num <= 0) {
		console.log('all done!');
		return;
	}
	console.log(num);
	num --;
	countdown(num);
}

console.log(countdown(10));