let christmas = new Date("2022-12-25T00:00:00");
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
// console.log(christmas);

function formatTime(num) {
    if (num.toString().length % 2 == 1) {
        return "0" + num;
    }
    return num;
}

function setDays() {
    let today = new Date();
    let secondsLeft = christmas - today;

    let days = formatTime(Math.floor(secondsLeft / day));
    let hours = formatTime(Math.floor((secondsLeft % day) / hour));
    let minutes = formatTime(Math.floor((secondsLeft % hour) / minute));
    let seconds = formatTime(Math.floor((secondsLeft % minute) / second));

    document.getElementById("time").innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;
}


var intervalId = window.setInterval(function () {
    setDays();
}, 1000);