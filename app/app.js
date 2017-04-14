

// function createCalendar(id, year, month){
// 	var dt= new Date();
// 		var month=dt.getMonth(); // read the current month
// 		var year=dt.getFullYear(); // read the current year
//
// 		dt=new Date(year, month, 01);//Year , month,date format
//
// 		var first_day=dt.getDay(); //, first day of present month
// 		document.write("first_day=" + first_day + "<br><br>");
//
// 		dt.setMonth(month+1,0); // Set to next month and one day backward.
// 		var last_date=dt.getDate(); // Last date of present month
// 		document.write(dt); // Last date in full
// 		document.write("<br><br> Last Date of the month =" + last_date + "<br><br>");
//
// 		var dy=1; // day variable for adjustment of starting date.
// 		document.write ("<table><tr><td>Su</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td>");
//
// 		for(i=0;i<=41;i++){
// 		if((i%7)==0){document.write("</tr><tr>");} // if week is over then start a new line
// 		if((i>= first_day) && (dy<= last_date)){
// 		document.write("<td>"+ dy +"</td>");
// 		dy=dy+1;
// 		}else {document.write("<td>*</td>");} // Blank dates.
// 		} // end of for loop
//
// 		document.write("</tr></table>")
// };


// var formYear    = $('#month').val(),
//     formMonth   = $('#year').val();
// console.log(formYear);
// console.log(formMonth);


function createCalendar(id, yearF, monthF){
    var destLocation = document.getElementById(id);
    var y = $('#year').val(),
        m = $('#month').val();

	///////////////////////////////////////FUNc
    var dt = new Date(y,m,01);
    var month =dt.getMonth(); // read the current month
    var year =dt.getFullYear(); // read the current year

    dt =new Date(year, month, 01);//Year , month,date format

    var first_day=dt.getDay(); //, first day of present month
    document.write("first_day=" + first_day + "<br><br>");

    dt.setMonth(month+1,0); // Set to next month and one day backward.

    var last_date=dt.getDate(); // Last date of present month
    document.write(dt); // Last date in full
    document.write("<br><br> Last Date of the month =" + last_date + "<br><br>");

    var dy=1; // day variable for adjustment of starting date.
    document.write("<table><tr><td>Su</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td>");

    for(i=0;i<=41;i++){
        if((i%7)==0){document.write("</tr><tr>");} // if week is over then start a new line
        if((i>= first_day) && (dy<= last_date)){
            document.write("<td>"+ dy +"</td>");
            dy=dy+1;
        }else {document.write("<td>*</td>");} // Blank dates.
    } // end of for loop

    document.write("</tr></table>")
	///////////////////////////////////////FUNC END

	// var destLocation = document.getElementById(id);
	// var days  = new Date(formYear, formMonth, 0).getDate();
	// var table = $(destLocation).append('<table></table>').addClass('table table-bordered table striped');
	//
	// for(var i = 1; i<=days;i++){
	//
	// 	for (var j =1; j<=7;j++){
	// 		var tr = $(table).append('<tr><td>'+i+'</td></tr>');
	// 	}
    //
	//
    //
	//
	// }

	 
	//console.log(table);

};

$('#calendar-form').submit(function(e){
	e.preventDefault();

	createCalendar("calendar__wrapper");
	
});
