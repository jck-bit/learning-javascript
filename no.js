

//another example of quicksort in javascript


function quicksort(arr){
	if (arr.length <= 1){
		return arr;
	}
var arrlength = arr.length;
var pivotposition = math.floor(arrlength /2);
var pivotvalue = arr[pivotposition];
var less = [];
    more = [];
    same = [];


for(var i = 0; i <arrlength; i++){
	if (arr[i] === pivotvalue){
		same.push(arr[i]);
	}
	else if (arr[i] < pivotvalue) {
		less.push(arr[i]);

	}
	else{
                more.push(arr[i]);
        }
	}
        return quicksort(less).concat(same, quicksort(more));
  }

