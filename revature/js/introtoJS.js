function doHomework(subject, callback){
alert(`Starting my ` + subject + `homework`);

alert(`starting my ${subject} homework.`);
callback();
}

function alertFinished(){
    alert(`finsihed my homework`);
}

doHomework(`js`, alertFinished);