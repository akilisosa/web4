'use strict';

function noChange(){
    console.log('no change works!');

    document.getElementById("pfName").innerText = "Preferred Name: "+userName;
    document.getElementById("lfName").value = legalFirst;
    document.getElementById("llName").value = legalLast;
    document.getElementById("street").innerText = "Address: "+street;
    document.getElementById("city").innerText= "City: "+city;
    document.getElementById("state").innerText= "State: " + state;
    document.getElementById("zipCode").innerText= "Zip Code: " + zipCode;
    document.getElementById("extraNotes").value= extraNotes;

    let main = document.getElementById("updateInfoPage");
    main.classList.remove("fadeInUp");
    main.classList.add("fadeOutDown");

    let background = document.getElementById('background');
    background.classList.remove('colorfade2');
    background.classList.add('colorfade1');

    setTimeout(myTimeout1, 500);

    function myTimeout1() {
    main.classList.add("hide");
        }



}