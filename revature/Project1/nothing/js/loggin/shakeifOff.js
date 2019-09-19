function shakeItOff() {
    var x = document.getElementsByClassName("shakes");
    var i;

    for (i = 0; i < x.length; i++) {
        x[i].classList.add("shake");
    }
    setTimeout(myTimeout1, 500);

    function myTimeout1() {
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove("shake");
        }
    }
}