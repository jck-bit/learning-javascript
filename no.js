 /*

 Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. Go to the editor

Student Name	Marks
David	80
Vinoth	77
Divya	88
Ishitha	95
Thomas	68
The grades are computed as follows :

Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A
*/
var students = [['David' ,80] , ['vinoh' ,77] ,['Divya', 88], ['ishitha',95] ,['thomas' ,68]];

var avgmarks = 0;

for (var i = 0; i < students.length; i++) {
	avg +=students[i][1];
	var avg = (avgmarks/students.length);
}

console.log(avg);

if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}
