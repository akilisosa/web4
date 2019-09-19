'use strict';

function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
/* how to use add class
document.getElementById('myButton').onclick = function() {
    addClass(document.documentElement, 'some-class');
}
*/

function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
} 

/* how to use remove
document.getElementById('myButton').onclick = function() {
    removeClass(document.documentElement, 'some-class');
}
*/

function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace( ' ' + className + ' ' , ' ' );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

function signIn() {
//does nothing
}

function signupPortal (){
    //ask them if they want to signup with google or email
    console.log("the signup portal is working");
    
    //login button

    addClass(document.getElementById('btnLoginPortal'), 'fadeOutRight');
    addClass(document.getElementById('btnLoginPortal'), 'd-none');
    removeClass(document.getElementById('btnLoginPortal'), 'fadeOutRight');
    
    //signup button

    addClass(document.getElementById('btnSignup'), 'fadeOutRight');  
    addClass(document.getElementById('btnSignup'), 'd-none');
   
    
    //backward button
      removeClass(document.getElementById('btnBackwardEmail1'), 'd-none');
        addClass(document.getElementById('btnBackwardEmail1'), 'fadeInLeft');
       //trigger back step 
    
    //google button 
        removeClass(document.getElementById('btnGoogle'), 'd-none');
        addClass(document.getElementById('btnGoogle'), 'fadeInLeft');
      

    //txt email

    //or password
    removeClass(document.getElementById('orArrows'), 'd-none');
        addClass(document.getElementById('orArrows'), 'fadeInLeft');
    //email button
        removeClass(document.getElementById('btnEmail'), 'd-none');
        addClass(document.getElementById('btnEmail'), 'fadeInLeft');

  //forward

  removeClass(document.getElementById('userAgreementNotice'), 'd-none');
  addClass(document.getElementById('userAgreementNotice'), 'bounceInDown');

}



function signupPortalBack () {


        //login button
    removeClass(document.getElementById('btnLoginPortal'), 'fadeOutRight');
    removeClass(document.getElementById('btnLoginPortal'), 'd-none');  
    addClass(document.getElementById('btnLoginPortal'), 'fadeInRight');
   
    
    //sign up button
        removeClass(document.getElementById('btnSignup'), 'd-none');
        removeClass(document.getElementById('btnSignup'), 'fadeOutRight');
        addClass(document.getElementById('btnSignup'), 'fadeInRight');


        //backwards button
        removeClass(document.getElementById('btnBackwardEmail1'), 'fadeInLeft');
        addClass(document.getElementById('btnBackwardEmail1'), 'fadeOutLeft');
        addClass(document.getElementById('btnBackwardEmail1'), 'd-none');
        removeClass(document.getElementById('btnBackwardEmail1'), 'fadeOutLeft');

        //google button
        removeClass(document.getElementById('btnGoogle'), 'fadeInLeft');
        addClass(document.getElementById('btnGoogle'), 'fadeOutLeft');
        addClass(document.getElementById('btnGoogle'), 'd-none');
        removeClass(document.getElementById('btnGoogle'), 'fadeOutLeft');
        //txt email

       //or arrows
        removeClass(document.getElementById('orArrows'), 'fadeInLeft');
        addClass(document.getElementById('orArrows'), 'fadeOutLeft');
        addClass(document.getElementById('orArrows'), 'd-none');
    
        //txt password

        //email button
        removeClass(document.getElementById('btnEmail'), 'fadeInLeft');
        removeClass(document.getElementById('btnEmail'), 'fadeInRight');
        addClass(document.getElementById('btnEmail'), 'fadeOutLeft');
        addClass(document.getElementById('btnEmail'), 'd-none');
      
        //forward button
     
    //


}

function signupGoogle(){
    //login
        login++;
    //signup

    googleSignIn();

    //backwards btn
    //needs something here


    //google button

    
    //txt email
    //txt password
   
    //email button
    //hide this

    //forward button

}



function signupEmail(){

    console.log("signup email is working");
    login++;
    //login 
    removeClass(document.getElementById('orArrows'), 'fadeInRight');
    removeClass(document.getElementById('orArrows'), 'fadeInLeft');
    addClass(document.getElementById('orArrows'), 'fadeOutRight');
    addClass(document.getElementById('orArrows'), 'd-none');
    //signup

    
    //backwards
    removeClass(document.getElementById('btnBackwardEmail1'), 'fadeInRight');
    addClass(document.getElementById('btnBackwardEmail1'), 'fadeOutRight');
    addClass(document.getElementById('btnBackwardEmail1'), 'd-none');

    removeClass(document.getElementById('orArrows'), 'fadeInRight');
    removeClass(document.getElementById('btnBackwardEmail2'), 'd-none');
    addClass(document.getElementById('btnBackwardEmail2'), 'fadeInLeft');
    


    //google
    removeClass(document.getElementById('btnGoogle'), 'fadeInLeft');
    addClass(document.getElementById('btnGoogle'), 'fadeOutRight');
    addClass(document.getElementById('btnGoogle'), 'd-none');

    //txt email
    removeClass(document.getElementById('txtEmail'), 'd-none');
    addClass(document.getElementById('txtEmail'), 'fadeInLeft');

    //txt password

    //email button
    removeClass(document.getElementById('btnEmail'), 'fadeInRight');
    removeClass(document.getElementById('btnEmail'), 'fadeInLeft');
    addClass(document.getElementById('btnEmail'), 'fadeOutRight');
    addClass(document.getElementById('btnEmail'), 'd-none');

    //foward
    removeClass(document.getElementById('btnForwardEmail1'), 'd-none');
    addClass(document.getElementById('btnForwardEmail1'), 'fadeInLeft');


}



function signupEmailBack(){
    console.log("signupemailback is working");

    login--;
    //login 

    //signups

    //backward   removeClass(document.getElementyId('btnBackwardEmail2'), 'fadeInLeft');
    addClass(document.getElementById('btnBackwardEmail2'), 'fadeOutLeft');
    addClass(document.getElementById('btnBackwardEmail2'), 'd-none');
    removeClass(document.getElementById('btnBackwardEmail2'), 'fadeOutLeft');

    removeClass(document.getElementById('btnBackwardEmail1'), 'd-none');
    removeClass(document.getElementById('btnBackwardEmail1'), 'fadeOutLeft');
    addClass(document.getElementById('btnBackwardEmail1'), 'fadeInRight');

 
    
    //google
    removeClass(document.getElementById('btnGoogle'), 'fadeOutRight');
    removeClass(document.getElementById('btnGoogle'), 'd-none');
    addClass(document.getElementById('btnGoogle'), 'fadeInRight');
  
    removeClass(document.getElementById('orArrows'), 'd-none');
    removeClass(document.getElementById('orArrows'), 'fadeOutLeft');
    addClass(document.getElementById('orArrows'), 'fadeInRight');

    //txtemail
    removeClass(document.getElementById('txtEmail'), 'fadeInLeft');
    addClass(document.getElementById('txtEmail'), 'fadeOutLeft');
    addClass(document.getElementById('txtEmail'), 'd-none');
    //txt password

    //email btto
    removeClass(document.getElementById('btnEmail'), 'd-none');
    removeClass(document.getElementById('btnEmail'), 'fadeOutRight');
    addClass(document.getElementById('btnEmail'), 'fadeInRight');
 
    //foward button
   
  
    removeClass(document.getElementById('btnForwardEmail1'), 'fadeInLeft');
    addClass(document.getElementById('btnForwardEmail1'), 'fadeOutLeft');
    addClass(document.getElementById('btnForwardEmail1'), 'd-none');



  
   
//remove for back button

    
}

function signupEmailPass(){

    console.log('signupEmail password is working');
    //this needs to do some shit

    
    //login 

    //signup

    //backward

   
    addClass(document.getElementById('btnBackwardEmail2'), 'fadeOutRight');
    addClass(document.getElementById('btnBackwardEmail2'), 'd-none');

    removeClass(document.getElementById('btnBackwardEmail3'), 'd-none');
    addClass(document.getElementById('btnBackwardEmail3'), 'fadeInLeft');
    


    //google

    //txtemail
    removeClass(document.getElementById('txtEmail'), 'fadeInLeft');
    addClass(document.getElementById('txtEmail'), 'fadeOutRight');
    addClass(document.getElementById('txtEmail'), 'd-none');

    //txt password
    removeClass(document.getElementById('txtPassword'), 'd-none');
    addClass(document.getElementById('txtPassword'), 'fadeInLeft');

    //email btto

    //foward button
    removeClass(document.getElementById('btnForwardEmail1'), 'fadeInLeft');
    addClass(document.getElementById('btnForwardEmail1'), 'fadeOutRight');
    addClass(document.getElementById('btnForwardEmail1'), 'd-none');



    //foward button 2
    removeClass(document.getElementById('btnLogin'), 'd-none');
    addClass(document.getElementById('btnLogin'), 'fadeInLeft');

}

function signupEmailPassBack(){
    console.log('signup email back is working');
    //this does something

    //login 

    //signup

    //backward
    
    removeClass(document.getElementById('btnBackwardEmail3'), 'fadeInLeft');
    addClass(document.getElementById('btnBackwardEmail3'), 'fadeOutLeft');
    addClass(document.getElementById('btnBackwardEmail3'), 'd-none');


    removeClass(document.getElementById('btnBackwardEmail2'), 'd-none');
    removeClass(document.getElementById('btnBackwardEmail2'), 'fadeOutRight');
    addClass(document.getElementById('btnBackwardEmail2'), 'fadeInRight');

    //google


    //txtemail
    removeClass(document.getElementById('txtEmail'), 'd-none');
    removeClass(document.getElementById('txtEmail'),'fadeOutRight');
    addClass(document.getElementById('txtEmail'), 'fadeInRight');

    //txt password
    removeClass(document.getElementById('txtPassword'), 'fadeInLeft');
    addClass(document.getElementById('txtPassword'), 'fadeOutLeft'); 
    addClass(document.getElementById('txtPassword'), 'd-none');
    
    //email btton

    
    //foward button
    removeClass(document.getElementById('btnLogin'), 'fadeInLeft');
    addClass(document.getElementById('btnLogin'), 'fadeOutLeft');
    addClass(document.getElementById('btnLogin'), 'd-none');

    removeClass(document.getElementById('btnForwardEmail1'), 'd-none');
    removeClass(document.getElementById('btnForwardEmail1'), 'fadeOutRight');
    addClass(document.getElementById('btnForwardEmail1'), 'fadeInRight');
}

function signupEmailRegister(){
    //this needs to do some shit
    addClass(document.getElementById('userAgreementNotice'), 'hinge');

    console.log("signup email register is doing something");
    
    //login 
    if (login >0 ){
        handleSignUp();
    }else {
        toggleSignIn();
    }
    //signup

    //backward

    //google

    //txtemail

    //txt password

    //email btto

    //foward button
   
}

function loginPortal(){
    //google or email
    login--;
     //ask them if they want to signup with google or email
     console.log("the Login portal is working");
    
     //login button
 
     addClass(document.getElementById('btnLoginPortal'), 'fadeOutLeft');
     addClass(document.getElementById('btnLoginPortal'), 'd-none');

     
     //signup button
 
     addClass(document.getElementById('btnSignup'), 'fadeOutLeft');  
     addClass(document.getElementById('btnSignup'), 'd-none');

    
     
     //backward button
       removeClass(document.getElementById('btnBackwardEmail1'), 'd-none');
         addClass(document.getElementById('btnBackwardEmail1'), 'fadeInRight');
        //trigger back step 
     
     //google button 
         removeClass(document.getElementById('btnGoogle'), 'd-none');
         addClass(document.getElementById('btnGoogle'), 'fadeInRight');
       
 
     //txt email

     removeClass(document.getElementById('orArrows'), 'd-none');
     addClass(document.getElementById('orArrows'), 'fadeInRight');
 
     //txt password
 
     //email button
         removeClass(document.getElementById('btnEmail'), 'd-none');
         addClass(document.getElementById('btnEmail'), 'fadeInRight');
 
   
}