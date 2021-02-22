

// Write a JavaScript function that checks whether a passed string is palindrome or not?

var letters = [];

var word  = "come"

var rword = " ";

//put the letters of the word in the stack

for (var i = 0; i < word.length; i++){
  letters.push(word[i]);
}

//pop off the list in a reversed order
for (var i = 0; i <word.length; i++){
  rword +=letters.pop();
}

if (rword === word){
  console.log( word + "is a palendrome " );
}
else{
  console.log( word +"is not a palendrome" );
}