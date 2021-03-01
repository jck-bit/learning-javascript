//Extract out the values at the specified indexes from a specified 
function pull_at_index(arr,pullarr){
	let removed = [];
	let pulled = arr
	 .map((v ,i) => (pullarr.includes(i) ? removed.push(v) :v))
	 .filter((v,i) => !pullarr.includes(i));
arr.length = 0;
pulled.forEach(v => {
	arr.push(v)
});
return removed;
};
let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pull_at_index(arra1, [1, 3]));
let arra2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_index(arra2, [4]));
	