var start = document.querySelector(".btn-start")
var stop = document.querySelector(".btn-stop")
var reset = document.querySelector(".btn-reset")

var minute = document.querySelector(".minute")
var second = document.querySelector(".second")

var interval

function time() {
    var giay = parseInt(second.textContent)
    var phut = parseInt(minute.textContent)

    giay++;

    if (giay == 59) {
        phut++;
        giay = 0;
    }
    if (giay < 10) {
        second.textContent = "0" + giay
    } else
        second.textContent = giay

    if (phut < 10) {
        minute.textContent = "0" + phut
    } else
        minute.textContent = phut
};
start.addEventListener('click', function() {
    if (interval == null) {
        interval = setInterval(time, 1000)
    }
})
stop.addEventListener('click', function() {
    if (interval != null) {
        clearInterval(interval)
        interval = null
    }
})
reset.addEventListener('click', function() {
    clearInterval(interval)
    interval = null
    second.textContent = "00"
    minute.textContent = "00"
})