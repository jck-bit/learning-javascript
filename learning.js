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

      if (cough == 'yes'){
      	alert('its cold at night');
      }
        else{
        	alert('its not fine to stay in the cold at night');
        }

       if (temperature > 37){
       	alert('you have fever..you should see a doctor');
       } 
       else{
       	alert('you dont have fever');
       }
       if (shake == 'yes'){
       	alert('go near warmth');
       }
       else{
       	alert('you good to go');
       }

       if (temperature > 37 && shake == 'yes' && cough == 'yes'){
       	alert('see a doctor now');
       }
}  


console.log(patients());
 

/*

 var cleanestcities = ["bangok", "new york", "hungary", "geneva"];
 var cityTocheck = prompt('select between   1 and 4');

if (cityTocheck === cleanestcities[0]){
	alert('its one of the cleanest cities');

}

if (cityTocheck === cleanestcities[1]){
	alert('its one of the cleanest cities');
}

if (cityTocheck === cleanestcities[2]){
	alert('its one of the cleanest cities');
}

if (cityTocheck === cleanestcities[3]){
	alert('its one of the cleanest cities');
}
*/

//the above can also be written as
 var cleanestcities = ["bangok", "new york", "hungary", "geneva"];
 var cityTocheck = prompt('select between   1 and 4');
for (var i = 0; i < 4; i++){
	if (cityTocheck === cleanestcities[i]){
		alert('its one of the cleanest cities');
	}
}
