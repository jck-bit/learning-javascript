
//. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
//Example string : 'webmaster'
//Expected Output : 'abeemrstw

function alphabetical_order(str){

  return str.split('').sort().join('');
}
console.log(alphabetical_order("palendrome"));



