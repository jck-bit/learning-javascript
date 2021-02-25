// A javascript programme to find the greatest common divisor(GCD)

 var gcd = function(a ,b){
	if(! b){
		return a;
	}
	return gcd(b, a % b);
};
console.log(gcd(390, 640));

//finding a fibonacci sequence... Each subsequent number is the sum of the previous two
var fibonacci = function(n) {
	if (n ===1){
		return[0, 1];
	}
	else{
		var s = fibonacci( n-1);
		s.push(s[s.length -1] + s[s.length -2]);
		return s;
	}
};

console.log (fibonacci(8));