'use strict';

function handleUserDeets(userDeets) {
    let info = userDeets;
    userName = userDeets.preferedName;
    legalFirst = info.firstName;
    legalLast = userDeets.lastName;
    street = userDeets.Street;
    city = userDeets.city;
    state = userDeets.state;
    zipCode = userDeets.zipCode;
    extraNotes = userDeets.extraNotes;

    welcome();
    
}