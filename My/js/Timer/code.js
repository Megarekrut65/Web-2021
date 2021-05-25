function startTimer(seconds) {
    var now = new Date().getTime();
    var countDownDate = new Date().getTime() + 1000 * seconds;
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("output").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("output").innerHTML = "Time out!";
        }
    }, 1000);
}