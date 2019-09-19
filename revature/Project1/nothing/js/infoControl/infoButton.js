'use strict';

function infoButton() {

    var para = document.createElement("button");
    var node = document.createTextNode("update info");
    para.appendChild(node);

    var element = document.getElementById("welcomePage");
    element.appendChild(para);

    let infBtn = document.querySelector("#welcomePage button");
    infBtn.classList.add("bounceInUp1");
    infBtn.classList.add("btn");
    infBtn.classList.add("btn-warning");
    infBtn.classList.add("btn-lg");

    infBtn.classList.add("updateInfoButton");

    let nickName = userName.split('_');
    userName = nickName.join(' ');
    document.getElementById("pfName").innerText = "Preferred Name: " + userName;
    document.getElementById("lfName").value = legalFirst;
    document.getElementById("llName").value = legalLast;
    let addy = street.split('_');
    street = addy.join(' ');
    document.getElementById("street").innerText = "Address: " + street;
    let town = city.split('_');
    city = town.join(' ');
    document.getElementById("city").innerText = "City: " + city;
    document.getElementById("state").innerText = "State: " + state;
    document.getElementById("zipCode").innerText = "Zip Code: " + zipCode;
    let xNotes = extraNotes.split('_');
    extraNotes = xNotes.join(' ');
    document.getElementById("extraNotes").value = extraNotes;


    infBtn.addEventListener("click", showInfoPage);
}