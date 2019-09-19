'use strict';

function riemButton(){
    console.log('riembutton works');

    var para = document.createElement("button");
    var node = document.createTextNode("make Claim");
    para.appendChild(node);

    var element = document.getElementById("welcomePage");
    element.appendChild(para);

    let workBtn = document.querySelector(".updateInfoButton + button");
    workBtn.classList.add("bounceInUp2");
    workBtn.classList.add("btn");
    workBtn.classList.add("btn-danger");
    workBtn.classList.add("btn-lg");

    workBtn.classList.add("riemButton");


    workBtn.classList.add("workButton");
    workBtn.addEventListener("click", showMakeRiemPage);
}