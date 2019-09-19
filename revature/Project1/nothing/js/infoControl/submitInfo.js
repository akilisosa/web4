'use strict';

function submitInfo() {
    console.log('submitInfo works!');

    var input1 = document.getElementById("pfName").innerText;
    var nickName = input1.substr(16);
    userName = nickName;

    var input2 = document.getElementById("street").innerText;
    var address = input2.substr(9);
    street = address;

    var input3 = document.getElementById("city").innerText;
    var town = input3.substr(6);
    city = town;

    var input4 = document.getElementById("state").innerText;
    var tx = input4.substr(7);
    state = tx;

    var input5 = document.getElementById("zipCode").innerText;
    var zip = input5.substr(10);
    zipCode = zip;

    var input6 = document.getElementById("extraNotes").value;
    extraNotes = input6;


    let url = "http://localhost:8092/aaaa/updateUserInfo.do";
    var eh = "preferedName=" + userName + "&legalFirstName=" + legalFirst + "&legalLastName=" + legalLast + "&Street=" + street + "&city=" + city + "&state=" + state + "&zipCode=" + zipCode + "&extraNotes=" + extraNotes + "&userId=" + userId;
 var bleh = eh.split(' ').join('_');
  var eh = bleh;


    

    ajaxGET(url, eh).then(function (response) {
    
        document.querySelector('#welcomePage p').innerText = 'Hey '+userName;
        let main = document.getElementById("updateInfoPage");
        main.classList.remove("fadeInUp");
        main.classList.add("fadeOutUp");
    
        let background = document.getElementById('background');
        background.classList.remove('colorfade2');
        background.classList.add('colorfade1');
    
        setTimeout(myTimeout1, 500);
    
        function myTimeout1() {
        main.classList.add("hide");
            }

    }, function (error) {
        console.error("Failed!", error);

    });

}