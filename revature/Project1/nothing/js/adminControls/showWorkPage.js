'use strict';

function showWorkPage() {
    console.log("show work page works!");


    let back = document.getElementById("background");
    back.classList.remove("colorfade");
    back.classList.remove("colorfade1");
    back.classList.remove("colorfade3");
    back.classList.remove("colorfade2");
    back.classList.add("colorfade4");

    let cover = document.querySelector("#welcomePage");

    cover.classList.add('fadeOut1');

    setTimeout(doWork, 490);

    function doWork() {
        cover.classList.add("hide");
    }


    let stage = document.getElementById("workPage");
    stage.classList.remove("hide");
    stage.classList.add("zoomIn");
    pendingClaims = allClaims.filter(d => d.status === 1);
    let tbody = "";
    for (let empObj of pendingClaims) {
        tbody += "<tr>";
        tbody += "<td>" + empObj.tid + "</td>";
        tbody += "<td>" + empObj.user_id + "</td>";
        tbody += "<td>" + empObj.claimAmount + "</td>";
        tbody += "<td>" + empObj.claimDesc + "</td>";
        tbody += "<td>" + empObj.status + "</td>";
        tbody += "<td><button class='btn btn-success' onclick='approve(this," + empObj.tid  + ")'>approve</button></td>";
        tbody += "<td><button class='btn btn-dark' onclick='deny(this," + empObj.tid  + ")'>deny</button></td>";


        tbody += "</tr>";
    }

    document.querySelector("#workTable>tbody").innerHTML = tbody;

console.log('it has got to this point')
console.log(allClaims);
    let tbody2 = "";
    for (let empObj of allClaims) {
        tbody2 += "<tr>";
        tbody2 += "<td>" + empObj.tid + "</td>";
        tbody2 += "<td>" + empObj.user_id + "</td>";
        tbody2 += "<td>" + empObj.claimAmount + "</td>";
        tbody2 += "<td>" + empObj.claimDesc + "</td>";
        tbody2 += "<td>" + empObj.status + "</td>";

        tbody2 += "</tr>";
    }

    document.querySelector("#allClaims>tbody").innerHTML = tbody2;




}