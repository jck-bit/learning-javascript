 //the merge sort algorithm

function merge(leftarr, rightarr) {
	const output = [];
	let leftindex = 0;
	let rightindex = 0;

    while(leftindex < leftarr.length && rightindex < rightarr.length){
		const leftel = leftarr[leftindex];
		const rightel = rightarr[rightindex];

		if (leftel < rightel){
			output.push(leftel)
			leftindex++;
		} else {
			output.push(rightel);
			rightindex++;
		}
	
	}	
	return [...output, ...leftarr.slice(leftindex),...rightarr.slice(rightindex)];
};



//recursive
function mergesort(Array) {
	if (Array.length < 1) {
		return Array;
	}

	const middleindex = Math.floor(Array.length / 2);
	const leftarr = Array.slice(0, middleindex);
	const rightarr = Array.slice(middleindex);

	return merge(
		mergesort(leftarr),
		mergesort(rightarr)
	);
	
};

console.log(mergesort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
