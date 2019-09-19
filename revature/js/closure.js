/*

A closure is the comination of a function and the lexical 
environment within which that function was declared.

*/

function init(){
    var name = "Mozilla"; //local variable to init
    
    //inner functions have access to outer function not vice versa
    function displayName(){
        alert(name);
    }
    displayName();

}

init();

//mpw cpmsoder tjos
function makeFunc(){
    var name="Mozilla";
    function displayName(){
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

//truthy vs falsey
//falsey : false/0/''/"/undefined/NaN"
//truethy: everything else true/'0'/'false'/{}/{}/function(){}

//operators
//opperators
// this is the default operator  ||
//  a||b will return if a is truthy
//

var a=0;
var b=1;
var c=false;
console.log('defaultoperator: '+ (a||b)); //will return the first truthy value
console.log('default operator: ' + (a || c)); // or the last falsey value. 

// gaurd: && 
//if the value on the left is falsey, it is returned.
//if the value of the left is truthy , coninue evaluating.
//if the last is reached return no matter what it is.


console.log('gaurd operator ' + (0 && 1)); //returns 0
console.log('gaurd operator ' + (1 && null && 2)); //returns null
console.log('guard operator ' + (1 && 1 && 2));  //returns 2

