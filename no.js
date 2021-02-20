
// the second recursive function
 function sumrange(num){
 	if(num === 1) return 1;
 	return num + sumrange (num - 1);
} 

sumrange(5)