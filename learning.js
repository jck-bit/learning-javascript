
//join method
var arr = ["3", "4", "5"]
var str = arr.join()
console.log("str ;" + str);

var str = arr.join("+")
console.log("<br/>str" + str);
// map(method)

if (!Array.prototype.map) 
{ 
 Array.prototype.map = function(fun /*, thisp*/) 
  { 
    var len = this.length; 
    if (typeof fun != "function") 
      throw new TypeError(); 
 
    var res = new Array(len); 
    var thisp = arguments[1]; 
    for (var i = 0; i < len; i++) 
    { 
      if (i in this) 
        res[i] = fun.call(thisp, this[i], i, this); 
    } 
 
    return res; 
  }; 
} 
 
var numbers = [1, 4, 9]; 
var roots = numbers.map(Math.sqrt); 
 
console.log("roots is : " + roots );  
 
//reverse(it reverses the content of an array)

var arr = ["0", "1", "2", "3", "4"].reverse();
console.log("reversed array is:" + arr);