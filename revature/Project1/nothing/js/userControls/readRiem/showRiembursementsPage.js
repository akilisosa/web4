'use strict';

function showRiembursementsPage(){
    console.log('show riembursumentspage had better work');
    //make ajax call create a table to populate

    var url = "http://localhost:8092/aaaa/showMyClaims.do";
    var eh = "userId=" + userId;

    ajaxGET(url, eh).then(function (response) {
        console.log("success!", response);

        var claimDeets = JSON.parse(response);
        console.log(claimDeets);

        allClaims = claimDeets;
        pendingClaims = allClaims.filter(d => d.status === 1);

        populateTable();

    }, function (error) {
        console.error("Failed!", error);

    });
}