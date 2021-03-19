var timeDisplayEl = $('#time-display');
var saveButtonEl = $('.saveBtn');
var textEl = $('.description');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] h:mm:ss a');
    timeDisplayEl.text(rightNow);
}
setInterval(displayTime,1000);

function colorTime() {
    var presentTime = this.textContent;
    if (colorTime < timeNow ) {
       return ("style", "color:white;");
    
    }
    else if (colorTime === timeNow) {
       setAttribute("style", "color:red;");
    }
    else (colorTime > timeNow); {

    }
}

function saveInfo () {
    var storeInfo = JSON.parse(window.localStorage.getItem("info")) || [];
    storeInfo.push(savedInfo);
    window.localStorage.setItem("info", JSON.stringify(saveInfo));
}