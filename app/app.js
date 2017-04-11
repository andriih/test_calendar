function createCalendar(id, year, month){
	
	var destLocation = document.getElementById(id);
	var formYear = $('#year').val();
	var formMonth = $('#month').val();
	var days  = new Date(formYear, formMonth, 0).getDate();

	// var days  = new Date(formYear, formMonth, 0).getDate();
	 $(destLocation).append(days);
	//console.log(days);

};

$('#calendar-form').submit(function(e){
	e.preventDefault();
	//	var destLocation = document.getElementById(id);
	// var formYear = $('#year').val();
	// var formMonth = $('#month').val();
	// var days  = new Date(formYear, formMonth, 0).getDate();


 // 	console.log(days);

 createCalendar("calendar__wrapper");
	
});