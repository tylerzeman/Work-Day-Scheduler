var saveBtn = $('.save');

$('#currentDay').text(moment().format('dddd MMMM Do YYYY'));
saveBtn.on('click', function() {
    var time = $(this).siblings('.hour').text();
    var schedule = $(this).siblings('.schedule').val();
});
textAreaColor();
saveSchedule();
