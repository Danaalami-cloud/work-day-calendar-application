var timeDisplayEl = $('#time-display');
var saveButtonEl = $('.saveBtn');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] h:mm:ss a');
    timeDisplayEl.text(rightNow);
}
setInterval(displayTime,1000);