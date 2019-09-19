'use strict';

function viewRiemButton(){
    console.log('view riems works');
    console.log('show make riems');

    var para = document.createElement("button");
    var node = document.createTextNode("Riembursments");
    para.appendChild(node);

    var element = document.getElementById("welcomePage");
    element.appendChild(para);

    let empListBtn = document.querySelector(".workButton + button");
    empListBtn.classList.add("bounceInUp3");
    empListBtn.classList.add("btn");
    empListBtn.classList.add("btn-info");
    empListBtn.classList.add("btn-lg");

    empListBtn.classList.add("RiembursmentsButton");


    empListBtn.classList.add("workButton");
    empListBtn.addEventListener("click", showRiembursementsPage);
}