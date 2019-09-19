<!DOCTYPE html>
<html lang="en">
  <head>
    
  <link rel="shortcut icon" href="sosablack.ico" type="image/x-icon" />
<link rel="apple-touch-icon" href="apple-touch-icon.png"  type="image/x-icon"/>
<script src="https://www.gstatic.com/firebasejs/5.9.3/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.9.3/firebase-auth.js"></script>
<script>
  // Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD93kuomvc3PTypbrUKyBRqPaj5UGH0KF4",
    authDomain: "sosa-studios-spider.firebaseapp.com",
    databaseURL: "https://sosa-studios-spider.firebaseio.com",
    projectId: "sosa-studios-spider",
    storageBucket: "sosa-studios-spider.appspot.com",
    messagingSenderId: "184669899397"
  };
  firebase.initializeApp(config);
</script>

    <meta charset="utf-8">
    <meta name="robots" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Akili Sosa">
    <meta name="generator" content="Jekyll v3.8.5">
    <meta name="hubtraffic-domain-validation"  content="b369374f2b771d9f" />
    <title>Sosa Studios:The Studio</title>
    
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" href="css/animation.css">

    <!-- Custom styles for this template -->

    <script src="spider/js/fire/main.js"></script>
      <script src="spider/js/fire/signIn.js"></script>
      <script src="spider/js/fire/header.js"></script>

    <script>

      login=0;

      </script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
  </head>


  <body>
    <header>
       <div class="collapse bg-dark" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4 class="text-white">About</h4>
                <p class="text-muted">This is Akili's studio their more personal part of the web. In it you can find some of the services we offer, artwork, and more.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container d-flex d-inline-flex flex-row">
            <!--what I want everything to be in line with-->
            <div class="navbar-brand d-inline-flex flex-row">
           <div class="container">
             <div class="row">
             <div class="d-row-inline">
            <div class="navbar-brand d-inline-flex flex-row">     
            <a href="../index.php">

                    <div class="anim-object active" id="card-object-vf" style="margin-right:5px;animation: rotate-vert-center 4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite normal forwards running;">
                      <img src="images/sosaanimationstudios/logo/sosawhite.svg" width="30" height="30" alt=""/>
                    </div>

                  </a> 
                  
                  <div>
                  <a href="satellite/index.html" class="d-none d-sm-block"  style="text-decoration:none; color:white;">
                   <strong style="padding-left:5px"> Sosa Studios</strong>
                  </a>  
                  </div>


            <div class="d-inline-flex signUpStuff">
                <div class="d-inline sosaStudiosText">
                   <button type="submit" id='btnLoginPortal' onclick="loginPortal()" class="btn btn-secondary mb-2 ">Login</button>
                </div>
    
                <div class="d-inline">
                  <button type="submit" id='btnSignup' onclick="signupPortal()" class="btn btn-secondary mb-2">Signup</button>
                </div>
            </div>
  
      <div class="justify-content-end align-items-stretch align-self-end signUpStuff">
                   <div class="d-inline-flex">
                            
                            <div class="d-inline justify-content-end" style="width:27px">
                                <button type="submit" id='btnBackwardEmail2' onclick="signupEmailBack()" class="btn d-none btn-secondary col-sm-1 mb-2"><i class="fas fa-angle-left"></i></button>
                            </div>
      
                            <div class="d-inline ">
                  
                                <input type="email" class="d-none form-control" style="width: 146px;" id="txtEmail" autocomplete='on'  placeholder="Email...">
               
                              </div>
      
                            <div class="d-inline align-self-end">
                             <button type="submit" id='btnForwardEmail1' onclick="signupEmailPass()" class="btn  d-none btn-secondary col-sm-1 mb-2"><i class="fas fa-angle-right"></i></button>
                            </div>
              </div>      
                         
        </div>

                    <div class="d-inline-flex signUpStuff">
                            <div class="d-inline" style="width:27px">
                                <button type="submit" id='btnBackwardEmail3' onclick="signupEmailPassBack()" class="btn d-none btn-secondary col-sm-1 mb-2"><i class="fas fa-angle-left"></i></button>
                            </div>
      
                            <div class="d-inline">
                                <input type="password" class="d-none form-control"  id="txtPassword" style="width: 146px;" autocomplete='on'  placeholder="Password ">
                            </div>
      
                            <div class="d-inline">
                             <button type="submit" id='btnLogin' onclick="signupEmailRegister()" class="btn  d-none btn-secondary col-sm-1 mb-2"><i class="fas fa-angle-right"></i></button>
                            </div>
                    
                         
                    </div>

    
                    <div class="d-inline-flex signUpStuff">
                     <div class="d-inline">
                        <button type="submit" id='btnBackwardEmail1' onclick="signupPortalBack()" class="btn d-none btn-secondary mb-2="><i class="fas fa-angle-left"></i></button>
                      </div>
                    <div class="d-inline">
                        <button type="submit" id='btnGoogle' onclick="signupGoogle()" class="btn d-none btn-secondary mb-2"><i class="fab fa-google"></i></button>
                      </div>
                      <div class="d-inline">
                        <div id="orArrows" class="btn d-none btn-outline mb-2="><i style="color:white" class="fas fa-arrows-alt-h"></i></div>
                      </div>
                      <div class="d-inline">
                        <button type="submit" id='btnEmail' onclick="signupEmail()" class="btn d-none btn-secondary mb-2"><i class="far fa-envelope"></i></button>
                      </div>
                  </div>

                <div class="d-inline-flex">
                <div class="d-inline justify-contents-end container">
                  <button hidden type="submit" id="btnSignOut" onclick="toggleSignIn()" class="btn btn-secondary"><i class="fas fa-sign-out-alt"></i></button>
  </div>
</div>

                  <script>

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //user is logged in
    console.log("user is logged in");
    document.getElementById("btnLoginPortal").hidden = true;
    document.getElementById("btnSignup").hidden = true;
    document.getElementById("btnBackwardEmail2").hidden = true;
    document.getElementById("btnBackwardEmail1").hidden = true;
    document.getElementById("orArrows").hidden = true;
    document.getElementById("txtEmail").hidden = true;
    document.getElementById("btnForwardEmail1").hidden = true;
    document.getElementById("btnBackwardEmail3").hidden = true;
    document.getElementById("txtPassword").hidden = true;
    document.getElementById("btnLogin").hidden = true;
    document.getElementById("btnGoogle").hidden = true;
    document.getElementById("btnEmail").hidden = true;
    document.getElementById("userAgreementNotice").hidden = true;
  
    document.getElementById("btnSignOut").hidden= false;

  } else {
    document.getElementById("btnLoginPortal").hidden = false;
    document.getElementById("btnSignup").hidden = false;
    document.getElementById("btnBackwardEmail2").hidden = false;
    document.getElementById("txtEmail").hidden = false;
    document.getElementById("btnForwardEmail1").hidden = false;
    document.getElementById("btnBackwardEmail3").hidden = false;
    document.getElementById("txtPassword").hidden = false;
    document.getElementById("btnLogin").hidden = false;
    document.getElementById("btnGoogle").hidden = false;
    document.getElementById("btnEmail").hidden = false;
    document.getElementById("btnBackwardEmail1").hidden = false;
    document.getElementById("orArrows").hidden = false;

  
    document.getElementById("btnSignOut").hidden= true;
  }
});
</script>
         <!-- i don't know what the fuck this is for -->
         <div id="user-container">
              <div hidden id="user-pic"></div>
              <div hidden id="user-name"></div>
              <button hidden id="sign-out" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
                Sign-out
              </button>
              <button hidden id="sign-in" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
                <i class="material-icons">account_circle</i>Sign-in with Google
              </button>
              </div> 

            </div> <!-- this does not sow anywhere -->
            </div>
            <div id="userAgreementNotice" style="color:black; position:absolute; top:25vw; left:5vw;" class="d-none">
                <h4>Signing up means <br>
                you agree to our <br>
               terms and <br>
               user agreement. </h4>
                     </div>
             <div style="z-index:3;">
            
</header>
