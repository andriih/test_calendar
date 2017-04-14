//Year pick list

$(document).ready(function () {
    for (var i = new Date().getFullYear(); i > 1900; i--) {
        $('#yearpicker').append($('<option />').val(i).html(i));
    }
});


//Main function
function createCalendar(id, y, m) {

    var destLocation = document.getElementById(id),
        y = $('#yearpicker').val(),//get Year from form
        m = $('#month').val();//get Month from form


    var dt = new Date(y, m, 01);

    var month = dt.getMonth();

    var year = dt.getFullYear();

    dt = new Date(year, month, 01);//Year , month,date format

    var first_day = dt.getDay(); //, first day of present month

    dt.setMonth(month + 1, 0); // Set to next month and one day backward.

    var last_date = dt.getDate(); // Last date of present month


    var dy = 1; // day variable for adjustment of starting date.

    $(destLocation)
        .append("<table id='tbl' class='tbl'><tr><th>Su</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>");

    for (var i = 0; i <= 41; i++) {
        if ((i % 7) == 0) {
            $(destLocation).append("</tr><tr>");
        } // if week is over then start a new line
        if ((i >= first_day) && (dy <= last_date)) {

            $(destLocation).append("<td class='cell'><button id='" + dy + "' type='button' class='btn btn-date' data-toggle='modal'                             data-target='#myModal'>" + dy + "</button></td>");

            dy = dy + 1;

        } else {
            $(destLocation).append("<td class='cell'>*</td>"); // Blank dates.
        }
    } // end of for loop

    $(destLocation).append("</tr></table>");

    $(destLocation).click(function (e) {
        var btnId = e.target.id; //get current click target
        var btnText = $("#" + btnId).text();
        var month = $('#month option:selected').text();

        $('#numberOfMonth').text(btnText); //fill both fields with true date
        $('#currentMonth').text(month);

    });
};


//Submit handler

$('#calendar-form').submit(function (e) {

    $('#calendar__wrapper').empty();

    createCalendar("calendar__wrapper");

    e.preventDefault();

});


