'use strict';

function submitClaim() {
    console.log('submit request works');

    var claimAmount = document.getElementById('claimAmountIn').value;
    var claimDesc = document.getElementById('claimDescIn').value;

    var description = claimDesc.split(' ');
    claimDesc = description.join('_');

    var url = "http://localhost:8092/aaaa/createClaim.do";
    var eh = "userId=" + userId + "&claimAmount=" + claimAmount + "&claimDesc=" + claimDesc +
        "&claimUrl="+claimDesc;
    console.log(eh);



    // ajaxGET(url, eh).then(function (response) {
    //     // store it in local storage
    //     var user = JSON.parse(response);

       




    // }, function (error) {
    //     console.error("Failed!", error);

    // });


    ajaxGET(url, eh).then(function (response) {
        console.log("success!", response);

        makegoAway();

     



    }, function (error) {
        console.error("Failed!", error);

    });


}