'use strict';

function showEmployeeListPage(){
    console.log("show employeeList page works!");


    let back = document.getElementById("background");
    back.classList.remove("colorfade");
    back.classList.remove("colorfade1");
    back.classList.remove("colorfade3");
    back.classList.remove("colorfade2");
    back.classList.add("colorfade5");

    let cover = document.querySelector("#welcomePage");

    cover.classList.add('fadeOut1');

    setTimeout(doWork, 490);

    function doWork() {
        cover.classList.add("hide");
    }

    let stage = document.getElementById("employeeListPage");
    stage.classList.remove("hide");
    stage.classList.add("zoomIn");

    data();

}