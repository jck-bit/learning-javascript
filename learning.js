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
/*

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
 
*/
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
/*
 var cityTocheck = prompt('which is the cleanest city?');
 var cleanestcities = ["bangok", "new york", "hungary", "geneva"];

for (var i = 0; i < 4; i++){
	if (cityTocheck === cleanestcities[i]){
		alert('its one of the cleanest cities');
	}
	else{
		alert('its not among the cleanest cities');
	}
}
*/
//conditions
/*
var firstname = ['blueray', 'upchuck','lojack', 'gizmo', 'do-rag'];
var lastname = ['zzz','burp','dogbone','droop'];
var fullname = [];
for (var i = 0; i < firstname.length; i++){
	for(var j = 0; j < lastname.length; j++){
		fullname.push(firstname[i] + lastname[j]);
	}
}
console.log(fullname);
 */
 /*
 var cityTocheck = prompt('which is the cleanest city');
 cityTocheck = cityTocheck.toLowerCase();
 var cleanestcities = ['nairobi', 'kigali', 'capetown' ,'new york'];
 for (var i = 0; i < 4; i++){
 	
   
 	else{
 	alert('oops!!its not among the cleanest cities');
 	}
}
*/





//i want to slice an array
var month = prompt('enter the name of the month');
var charsinmonth = month.length
if (charsinmonth > 3){
	monthabrv = month.slice(0, 3);
	alert(monthabrv);
}
console.log(monthabrv);