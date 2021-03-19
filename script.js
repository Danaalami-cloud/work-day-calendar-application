var timeDisplayEl = $('#time-display');
var saveButtonEl = $('.saveBtn');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] h:mm:ss a');
    timeDisplayEl.text(rightNow);
}
setInterval(displayTime,1000);

function timeBlock() {
    var pressntTime = this.textContent;
    if (timeBlock < timeNow ) {
       return.setAttribute("style", "color:white;");
    }
    else if (timeBlock === timeNow) {

    }
    else (timeBlock > timeNow) {

    }
}

function saveInfo () {
    var storeInfo = JSON.parse(window.localStorage.getItem("info")) || [];
    storeInfo.push(savedInfo);
    window.localStorage.setItem("info", JSON.stringify(saveInfo));
}