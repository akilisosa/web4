'use strict';

function showMakeRiemPage(){
console.log('show RiemPage Works');




let back = document.getElementById("background");
back.classList.remove("colorfade");
back.classList.remove("colorfade1");
back.classList.remove("colorfade3");
back.classList.remove("colorfade2");
back.classList.add("colorfade4");

let cover = document.querySelector("#welcomePage");
cover.classList.remove('show');
cover.classList.add('fadeOut1');

setTimeout(doWork, 490);

function doWork() {
    cover.classList.add("hide");
}

let riemPage = document.getElementById('makeRiemPage');
riemPage.classList.remove('fadeOutDown');
riemPage.classList.remove('hide');
riemPage.classList.add('show');

let riemCard = document.getElementById('makeRiemCard');
riemCard.classList.remove('zoomOutUp');
riemCard.classList.add('fadeInUp');



}