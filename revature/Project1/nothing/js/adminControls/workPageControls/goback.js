'use strict';

function goback() {

    console.log('go back works! ');
    let back = document.getElementById("background");
    back.classList.remove("colorfade4");
    back.classList.add("colorfade1");

    let work = document.getElementById("workPage");
    work.classList.remove('zoomIn');
    work.classList.add('zoomOutUp');

    setTimeout(doWork, 1400);

    function doWork() {
        work.classList.add("hide");
    }

    let main = document.getElementById("welcomePage");
    main.classList.remove('hide');
    main.classList.add('fadeInUp');
    



}