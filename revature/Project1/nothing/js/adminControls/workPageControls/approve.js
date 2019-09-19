'use strict';

function approve(row, tid){
    console.log('approve works');

    var i = row.parentNode.parentNode.rowIndex;
 
    document.getElementById("workTable").deleteRow(i);

    for (var i = 0; i < allClaims.length; i++) {
        if (allClaims[i].tid == tid) {
          allClaims[i].status = 3;
          break;
        }
      }

    var url = "http://localhost:8092/aaaa/updateClaims.do";
    var eh = "rid=" + tid + "&status=" +3;

    ajaxGET(url, eh).then(function (response) {
        console.log("success!", response);

        var claimDeets = JSON.parse(response);
        console.log(claimDeets);

        

    }, function (error) {
        console.error("Failed!", error);

    });



}