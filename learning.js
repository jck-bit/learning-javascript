

var str1 = ("this is a beautiful string");

var index = str1.localeCompare("XYZ");
document.write("localeCompare first :" + index);

document.write("<br />");

var index = str1.localeCompare( "AbCD ?" );
document.write("localeCompare second:" + index);

//match
var str = "for more information,see chapter 3.4.5.1";

var re = /(chapter \d+(\.\d)*)/i;
var found = str.match( re );

document.write(found);



