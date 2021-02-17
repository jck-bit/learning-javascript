
//quick sort method

function quicksort (array){
	if (array.length == 1){
		return array;
	}

	const pivot = array[array.length - 1];
	const leftarr = [];
	const rightarr = [];
	for (let i = 0; 1 < array.length - 1; i++){
		if (array[i] < pivot){
			leftarr.push(array[i]);
			
		} else{
			rightarr.push(array[i]);
		}
	}

	if (leftarr.length > 0 && rightarr > 0){
		return[...quicksort(leftarr), pivot, ...quicksort(rightarr)];
	} else if (leftarr.length > 0) {
		return[ ...quicksort(leftarr), pivot];
	} else{
		return[...quicksort(leftarr), pivot, ...quicksort(rightarr)];
	}

}
const arr = [2, 4, 6, 89, 76, 90, 23, 44, 56, 78, 89, 92, 12];
console.log(quicksort(arr));