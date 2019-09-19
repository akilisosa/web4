'use strict';

function welcome(){
    let main = document.getElementById("background");
    main.classList.add("colorfade");

    let para = document.createElement("p");
    let node = document.createTextNode("Hey " + userName);
   // let node = document.classList.add("centerAbsolute");
    para.appendChild(node);
    

    let element = document.getElementById("welcomePage");

    element.appendChild(para);
    para.classList.add("bounceInRight");

   //node.classList.add("bounceInRight");
  
    

    if (adminlvl == 2) {
        adminControls();
    } else {
        userControls();
    }
}