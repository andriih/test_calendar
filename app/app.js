var formYear = $('#year').val();
var formMonth = $('#month').val();

function createCalendar(id, year, month){
	
	var destLocation = document.getElementById(id);
	var days  = new Date(formYear, formMonth, 0).getDate();
	var table = $(destLocation).append('<table></table>').addClass('table table-bordered table striped');	
	
	for(var i = 1; i<=days;i++){
		
		for (var j =1; j<=7;j++){
			var tr = $(table).append('<tr><td>'+i+'</td></tr>');
		}

		

		
	}

	 
	//console.log(table);

};

$('#calendar-form').submit(function(e){
	e.preventDefault();

	createCalendar("calendar__wrapper");
	
});