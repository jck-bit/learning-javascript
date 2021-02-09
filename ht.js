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