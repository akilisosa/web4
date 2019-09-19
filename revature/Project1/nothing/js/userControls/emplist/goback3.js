'use strict';

function goback3(){
    

    let back = document.getElementById("background");
    
    back.classList.remove("colorfade5");
    back.classList.add("colorfade1");

    let stage = document.getElementById("employeeListPage");
    stage.classList.remove("show");
    stage.classList.remove("zoomIn");
    //stage.classList.add("");
    stage.classList.add("hide");

    let cover = document.querySelector("#welcomePage");
    cover.classList.remove("hide");




    setTimeout(doWork, 490);

    function doWork() {
        stage.classList.add("hide");
    }





}