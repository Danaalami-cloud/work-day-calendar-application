var timeDisplayEl = $('#time-display');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] h:mm:ss a');
    timeDisplayEl.text(rightNow);
}
setInterval(displayTime,1000);