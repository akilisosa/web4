'use strict';

function makegoAway(){

       let back = document.getElementById("background");
        back.classList.remove("colorfade4");
        back.classList.add("colorfade1");

        let riemCard = document.getElementById('makeRiemCard');
        riemCard.classList.remove('fadeInUp');
        riemCard.classList.add('zoomOutUp');

        let riemPage = document.getElementById('makeRiemPage');

        setTimeout(doWork, 1490);

        function doWork() {
            riemPage.classList.remove("show");
            riemPage.classList.add("hide");
        }

        let cover = document.querySelector("#welcomePage");
cover.classList.remove('hide');
cover.classList.remove('fadeOut1');
cover.classList.add('show');
}