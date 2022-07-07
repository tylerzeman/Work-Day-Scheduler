var saveBtn = $('.save');

$('#currentDay').text(moment().format('dddd MMMM Do YYYY'));

function textAreaColor() {
    var hour = moment().hours();

    $('.hourRow').each(function() {
        var currentHour = parseInt($(this).attr('id'));
        if (currentHour > hour) {
            $(this).addClass('future');
        } else if (currentHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
};
saveBtn.on('click', function() {
    var time = $(this).siblings('.hour').text();
    var schedule = $(this).siblings('.schedule').val();
});
function saveSchedule() {
    $('.hour').each(function(event) {
        event.preventDefault();
        var currentHour = $(this).text();
        var currentTime = localStorage.getItem(currentHour);
        if(currentTime !== null) {
            $(this).siblings('.schedule').val(currentTime);
        }
    });
}

textAreaColor();
saveSchedule();
