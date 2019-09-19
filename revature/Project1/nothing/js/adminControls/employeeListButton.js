'use strict';

function employeeListButton(){
    console.log('employeebutton works');
    var para = document.createElement("button");
    var node = document.createTextNode("employeeList");
    para.appendChild(node);

    var element = document.getElementById("welcomePage");
    element.appendChild(para);

    let empListBtn = document.querySelector(".workButton + button");
    empListBtn.classList.add("bounceInUp3");
    empListBtn.classList.add("btn");
    empListBtn.classList.add("btn-info");
    empListBtn.classList.add("btn-lg");

    empListBtn.classList.add("workButton");


    empListBtn.classList.add("workButton");
    empListBtn.addEventListener("click", showEmployeeListPage);
}