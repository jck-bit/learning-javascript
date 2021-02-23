// this outlines items in a string
var str = "give him 100";
var patt1 = /\w/g;
var result = str.match(patt1);
console.log(result);

//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

function the_largest_number(str){
  var array = str.match(/\w[a-z]{0,}/g);
  var result = array[0];

  for(var x = 1; x <array.length; x++){

    if(result.length < array[x].length){

      result = array[x];

    }
  }
  return result;
}
console.log(the_largest_number('wed development is essential'));