'use strict';


function introSequence() {

    let curtain = document.getElementById("poem");
    let curtaindetail = document.getElementById("poemDetail");
    curtain.classList.add("slideOutUp");
    curtaindetail.classList.add("slideOutDown");
    setTimeout(myTimeout1, 2000);


    var url = "http://localhost:8092/aaaa/getUserInfo.do";
    var eh = "userId=" + userId;

    ajaxGET(url, eh).then(function (response) {

        let userDeets = JSON.parse(response);
        handleUserDeets(userDeets);
    }, function (error) {
        console.error("Failed!", error);
    });

    function myTimeout1() {
        curtain.classList.add("hide");
        curtaindetail.classList.add("hide");
    }


}