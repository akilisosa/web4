'use strict';

function pfKeyUp(){
    console.log('pfKeyUp Works');
    let input = document.getElementById('pfNameIn').value;
    document.getElementById("pfName").innerText = "Preferred Name: "+input;

}

function addressKeyUp(){
    let input = document.getElementById('streetIn').value;
    document.getElementById("street").innerText = "Address: "+input;
}

function cityKeyUp(){
    let input = document.getElementById('cityIn').value;
    document.getElementById("city").innerText = "City: "+input;
}

function stateKeyUp(){
    let input = document.getElementById('stateIn').value;
    document.getElementById("state").innerText = "State: "+input;
}

function zipKeyUp(){
    let input = document.getElementById('zipIn').value;
    document.getElementById("zipCode").innerText = "Zip Code: "+input;
}