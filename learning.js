/*
var x = prompt ('where do you pple live');
if ( x== 'vatican'){
	alert('correct');

}

/*
if (x !=='vatican'){
	alert ('wrong answer');
}


//its also the same as the below statement

else{
	alert('wrong answer');
}

var x = prompt('where does the pope live');
if (x === vatican){
	alert(correct);

}
/*
else{
	alert(wrong);
}
//this is also the same as

if (x !==vatican){
	alert ('wrong answer');
}

*/
/*
function questions(){
   var weight = prompt('what is your weight');
   var time = prompt('what is your time');
   var age = prompt('what is your age');
   var gender =prompt('what is your gender')

 if (weight >300 && time < 6 && age >17 && gender === "male");{
 	alert('come to your tryout');

 }

}

  

console.log(questions());
*/
function patients(){
	var  cough = prompt('do you cough at night?');
	var temperature = prompt('what is your body temperature?');
    var shake  = prompt('do you shake at night');

    if (cough == 'yes' && temperature > 37 && shake == 'yes');{
    	alert('go see a doctore')
    }
}


console.log(patients());


