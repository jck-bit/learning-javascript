

const mergesort = function (arrA, arrB){
	let singlesorted = [];
	while(arrA.length && arrB.length){
		if (arrA[0] < arrB[0]) {
			singlesorted.push(arrA[0]);
			arrA.shift();
		}else{
			singlesorted.push(arrB[0]);
			arrB.shift();
		}
	}
	return singlesorted.concat(arrB, arrA);
}

let arrA = [0, 1, 45, 56, 3, 67, 7, 10, 22];
let arrB = [4, 5, 6, 8, 9, 56, 45, 33, 23];

console.log(mergesort(arrA,arrB));