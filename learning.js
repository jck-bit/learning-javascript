//writng a 2-d array

var a = [[1, 2, 3, 24],[8, 11 ,9, 4],[7, 0, 7, 27],[4, 26, 7]]

for (var i in a){
	console.log("row" +i);
	for (var j in a[i])
	{
		console.log(" " + a[i][j]);
	}
}