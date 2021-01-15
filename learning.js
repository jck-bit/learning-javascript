function showvalue(){

    var dayofmonth = 50;
    if (dayofmonth < 1 || dayofmonth > 31.) {

      dayofmonth = Number.NaN
      alert("day of month must be between 1 and 31.")


    } 
    
    document.write("value of dayofmonth : " + dayofmonth );

  }