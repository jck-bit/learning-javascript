
/*
Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
Sample numbers : -5, -2, -6, 0, -1
*/
var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if ( a > b && a >c && a >d && a>e ) {
	alert( '-5 is the largest number')
}

else if (b >a && b >c && b >d && b>e) {
	alert ('-2 is the greatest number in the list')
}

else if (c >a && c > b && c > d && c> e) {
	alert('-6 is the largest number');
}

else if (d >a && d >b && d>c && d>e) {
	alert('0 is the greatest number');
}
else{
	alert('-1 is the greatest number');
}