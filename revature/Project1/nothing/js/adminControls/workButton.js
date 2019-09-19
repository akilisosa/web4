'use strict';

function workButton(){
    
    var para = document.createElement("button");
    var node = document.createTextNode("work");
    para.appendChild(node);

    var element = document.getElementById("welcomePage");
    element.appendChild(para);

    let workBtn = document.querySelector(".updateInfoButton + button");
    workBtn.classList.add("bounceInUp2");
    workBtn.classList.add("btn");
    workBtn.classList.add("btn-danger");
    workBtn.classList.add("btn-lg");

    workBtn.classList.add("workButton");


    workBtn.classList.add("workButton");
    workBtn.addEventListener("click", showWorkPage);
    
    var url = "http://localhost:8092/aaaa/showAllClaims.do";
    var eh = "usrId=" + userId;

    ajaxGET(url, eh).then(function (response) {
        console.log("success!", response);

        var claimDeets = JSON.parse(response);
        console.log(claimDeets);

        allClaims = claimDeets;
        pendingClaims = allClaims.filter(d => d.status === 1);

    }, function (error) {
        console.error("Failed!", error);

    });
}