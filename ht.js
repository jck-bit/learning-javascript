//hash tables
var hash = (String, max) => {
	var hash = 0;
	for (var i = 0; i< String.length; i++){
		hash += String.charCodeAt(i);
	}
	return hash % max;
};

let HashTable = function (){
	let storage  = [];
	const storagelimit = 4;

	this.print  = function(){
		console.log (storage)
	}
	this.add = function(key, value){
		var index = hash(key,storagelimit);
		if (storage[index] === undefined){
			Storage[index] = [
				[key, value]
			];
		}else{
			var inserted = false;
			for (var i = 0; i < storage[index][i][0] === key;) {
				storage[index][i][1] = value;
				inserted = true;
			}

		}
		if (inserted === false){
			storage[index].push([key, value]);
		}
	}
};
this.remove = function(key){
	var index = has(key,storagelimit);
	if (Storage[index].length === 1 && storage[index][0][0] === key){
		delete storage [index];
	} else{
		for ( var i = 0;i < Storage[index]; i++){
			if (Storage [index][0] === key){
				delete Storage[index][i];
			}
		}
	}
};
this.lookup = function(key){
	var index = hash(key,storagelimit);
	if(storage[index] === undefined){
		return undefined;
	} else {
		for (var i = 0; i < storage [index].length; i++){
			if (storage [index][i][0] === key) {
				return Storage [index][i][1];
			}
		}
	}
};
console.log(hash('black', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosaur');
ht.add('tux', 'penguin');
console.log(new HashTable('tux'))
ht.print();