'use strict'
function data(){
var url = "http://localhost:8092/aaaa/readAllUsers.do";
    var eh = "userId="+userId;

    ajaxGET(url, eh).then(function (response) { 
        console.log("success!", response);
        var claimDeets = JSON.parse(response);
      console.log(claimDeets);
        let tbody = "";
        for(let empObj of claimDeets){
            tbody +="<tr>";
            tbody +="<td>" + empObj.email + "</td>";
            tbody +="<td>" + empObj.password + "</td>";
            tbody +="</tr>";
        }
        console.log(tbody);
        document.querySelector("#employeeTb>tbody").innerHTML  = tbody;

    
        }, function(error) {
          console.error("Failed!", error);
          
        });

    }

