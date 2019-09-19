function myExternalFunction(){
    var element = document.getElementById("demo");
    element.innerText = "Paragraph changed to something differnt!";
}

function changeParagraphBackground(){
    var elements = document.getElementsByClassName("paragraphs")
    for (var i=0; i<elements.length; i++){
        elements[i].setAttribute("style","background-color:blue;")
        elements[i].style.cssText = "color:green";

    }

}

function changeFirstName(){
    var element = document.getElementById('fname');
    element.value = element.value.toUpperCase();
}