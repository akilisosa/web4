'use strict';

function closeRiemPage(){
    console.log('this close riem page works');

    
let back = document.getElementById("background");
back.classList.remove("colorfade4");
back.classList.add("colorfade1");



let riemPage = document.getElementById('makeRiemPage');
riemPage.classList.remove('show');

riemPage.classList.add('fadeOutDown');

setTimeout(doWork, 490);

function doWork() {
    riemPage.classList.add("hide");
}

let riemCard = document.getElementById('makeRiemCard');
riemCard.classList.remove('fadeInUp');


let cover = document.querySelector("#welcomePage");
cover.classList.remove('hide');
cover.classList.remove('fadeOut1');
cover.classList.add('show');








}