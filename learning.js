//showing the infinity number
/*
function showvalue(){

    var smallNumber = (-Number.MAX_VALUE) * 2
    if (smallNumber == Number.NEGATIVE_INFINITY){
        alert("value of smallNumber :" + smallNumber );

    }
}
*/

//a prototype is a global property allows to add properties to method to any object

function book(title, author){
    this.title = title;
    this.author = author;

}

var mybook = new book("perl", "mohtasim");
book.prototype.price = null;
mybook.price = 100;

document.write("book title is : " + mybook.title + "<br>");
document.write("book author is :" + mybook.author + "<br>");
document.write("book price is : " + mybook.price + "<br>");


