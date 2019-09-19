'use strict';

function verify() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPass").value;
 
    var url = "http://localhost:8092/aaaa/login.do";
    var eh = "email=" + email + "&password=" + password;
   // var eh="email=admin@gmail.com&password=admin";
  //  var eh ="email=user@gmail.com&password=user";
    ajaxGET(url, eh).then(function (response) {
        // store it in local storage
        var user = JSON.parse(response);

        userId = user.uid;
        console.log("this is the user id " + userId);
        adminlvl = user.adminlvl;
        if (userId > 0) {
            document.getElementById('signOutBtn').style.display='block';
            introSequence();
        } else {
          loginError();
        }
    }, function (error) {
        console.error("Failed!", error);

    });

}