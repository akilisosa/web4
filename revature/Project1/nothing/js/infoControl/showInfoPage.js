'use strict';

function showInfoPage(){
    console.log("show info page works");

    let back = document.getElementById("background");
    back.classList.remove("colorfade");
    back.classList.remove("colorfade3");
    back.classList.add("colorfade2");


    let main = document.getElementById("updateInfoPage");
    main.classList.remove("hide");
    main.classList.remove("fadeOutDown");
    main.classList.remove("fadeOutUp");
    main.classList.add("fadeInUp");

  

}