<?php
require "header.php"
?>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="Sosa Animation Studios is an independently run company that specializes in hand drawn animations, svg graphic animations, and much more! sometimes we are asked why don't you do things like  walt disney animation studios. or nickelodeon animation? and to this we just say hey ! we are just here doing our own thing.">
        <meta name="author" content="Akili Sosa">
        <meta name="generator" content="Jekyll v3.8.5">
        
      
    <!--this is the little part that goes in the top tab-->
    <title>Sosa Animation Studios</title>
     
    <!-- this links the stylesheet to the page to tell it what do -->
    
    <style>
    #email{
        color:white;
        z-index: 3;
    }
    </style>
    
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="manifest" href="manifest.json">

<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="application-name" content="Space Missions">
<meta name="apple-mobile-web-app-title" content="Space Missions">
<meta name="theme-color" content="#FF9800">
<meta name="msapplication-navbutton-color" content="#FF9800">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="msapplication-starturl" content="/index.html">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link rel="icon" sizes="128x128" href="/images/sosaanimationstudios/logo/sosawhite.svg">
<link rel="apple-touch-icon" sizes="128x128" href="/images/sosaanimationstudios/logo/sosawhite.svg">
<link rel="icon" sizes="192x192" href="/images/sosaanimationstudios/logo/sosawhite.svg">
<link rel="apple-touch-icon" sizes="192x192" href="/images/sosaanimationstudios/logo/sosawhite.svg">
<link rel="icon" sizes="256x256" href="/images/sosaanimationstudios/logo/sosawhite.svg">
<link rel="apple-touch-icon" sizes="256x256" href="/images/sosaanimationstudios/logo/sosawhite.svg">
<link rel="icon" sizes="384x384" href="/images/sosaanimationstudios/logo/sosawhite.svg">
<link rel="apple-touch-icon" sizes="384x384" href="/images/sosaanimationstudios/logo/sosawhite.svg">
<link rel="icon" sizes="512x512" href="/images/sosaanimationstudios/logo/sosawhite.svg">
<link rel="apple-touch-icon" sizes="512x512" href="/images/sosaanimationstudios/logo/sosawhite.svg">
   </head>

<body>
<main id="background">
       
       <div id="imagecontainer" class="container-fluid" style="padding:0px">
           <div class="container-fluid" style="padding:0px" id="backgroundGif">
            <img src='input.gif' id='giffy'/>
           </div>
   </div>
            <script>

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('user has signed in');// User is signed in.
    document.getElementById("spaceship").style.animationName = "none";
    document.getElementById("spaceship").style.animationName = "orbitIn";
    document.getElementById("gear").classList.remove("brain");
    document.getElementById("gear").className = "brainIn";


  } else {
    console.log('user is logged out');// No user is signed in.
    document.getElementById("spaceship").style.animationName = "none";
    document.getElementById("spaceship").style.animationName = "orbit";
    document.getElementById("gear").classList.remove("brainIn");
    document.getElementById("gear").className = "brain";

  }
});
</script>
             <div>
                    
                     
                     <svg  id="spaceship" alt="image of a satellite" transform="rotate(310)" height="15%" width="15%" xmlns="http://www.w3.org/2000/svg"  
                     version="1.1" id="Layer_1" viewBox="245 10 250 150">
                        <style type="text/css">
                           .st0{fill:seagreen;}
                           .st1{fill:royalblue;}
                           .st2{fill:hotpink}
                           .st3{fill:indianred}
                           .st4{fill:indigo}
                           .st5{fill:mediumpurple}
                           .st6{fill:mediumturquoise}
                           .st7{fill:olive}
                           .st8{fill:orangered}
                           .st9{fill:powderblue}
                        </style>
                    <a href="satellite/index.html">     
                        <g>
                           <g>
                             <path d="M368.1,65.5c0.2,12.1,4.3,22.5,10.7,32.3c-0.3,0.3-0.5,0.6-0.8,0.7c-22.3,4.8-44.6,9.6-66.9,14.5    c-3.5,0.8-5.6-0.5-6.9-3.4c-3-7.1-3.5-14.3-0.4-21.4c0.5-1.1,1.8-2.1,3-2.5c19.9-6.7,39.8-13.2,59.7-19.8    C366.8,65.6,367.3,65.6,368.1,65.5z M344.7,94.5c0.7,0.1,1.7,0.5,1.9,0.2c3.3-4.8,6.4-9.6,9.6-14.4c-0.2-0.2-0.5-0.3-0.7-0.5    c-1,0.8-2,1.6-3,2.4c-1.1-0.2-2.3-0.7-3.3-0.4c-11.6,3.2-23.2,6.7-34.9,9.8c-3.7,1-4.3,2.7-3.4,5.8c1.1,4,3.5,5.8,6.7,4.9    c7.6-1.9,15.2-3.8,22.8-5.8C341.9,96.2,343.2,95.2,344.7,94.5z M364.4,90.5c-1.8-3.8-3.4-7.2-5.2-11c-3.2,4.9-6.1,9.5-9.5,14.8    C355.1,92.9,359.8,91.7,364.4,90.5z"/>
                              <path d="M424.3,18c-7.2,10.8-9,23-9.3,35.4c-0.4,14,1.1,27.9,6.6,41.1c1.5,3.7,3.3,7.3,5.7,10.5c1.9,2.5,4.9,4.3,7.5,6.5    c-0.2,0.1-1,0.9-2,1.2c-11.5,3.5-19.2,2.2-24.9-8.5c-10-18.5-12.1-38.2-9.4-58.5C400.5,30.8,411.5,23.3,424.3,18z M403.7,90.6    c1.5,3.6,2.9,6.9,4.3,10.3c3.9-1.2,7.4-2.3,11.2-3.5c-1.1-3.3-2-6.3-3-9.6C412.1,88.7,408.3,89.6,403.7,90.6z M400.3,67.6    c3.8-1.2,6.9-2,9.9-3.1c0.8-0.3,1.7-1.5,1.8-2.3c0.1-2.8-0.2-5.6-0.3-8.7c-4.1,1.3-7.9,2.5-11.8,3.8    C399.9,60.7,400.1,63.8,400.3,67.6z M400.6,50.8c10.7-2.6,13.1-5.5,11.7-14.3C401,39.6,400.4,40.3,400.6,50.8z M403.3,83.9    c3.9-1,7.3-1.8,10.8-2.7c-0.6-3.1-1.2-5.7-1.8-8.6c-3.7,1-7.2,1.9-10.8,2.8C402.1,78.2,402.6,80.7,403.3,83.9z M427.5,110.7    c-4.6-7.5-6-7.8-13.7-3.1C417,113.6,421.8,113.4,427.5,110.7z M415.4,24.6c-3.3,2.6-6.2,4.8-9.9,7.6    C412.5,32.2,414.2,30.8,415.4,24.6z"/>
                              <path d="M274.1,92c0.2-0.5,0.4-1.1,0.6-1.6c4.6,2.8,6.6,9.6,4.7,14.3c-1,2.6-1.4,5.6-1.3,8.3c0.1,1.4,2,2.8,3,4.1    c0.5-0.1,1.1-0.3,1.6-0.4c-0.7,3-1.5,5.9-2.2,8.9c-0.4,0-0.9-0.1-1.3-0.1c-3.2-8.4-4-17.4-5.1-26.5c-1.4,7.4,2.2,26.1,6.5,31.6    c1.2,1.6,3.6,3,5.5,3.2c1,0.1,2.9-2.7,3.3-4.4c1-4.5,1.4-9.1,2.1-13.6c0.2-1,0.7-2,1-3c0.3,0.1,0.6,0.1,0.9,0.2    c0.2,0.5,0.5,1.1,0.4,1.6c-0.9,6.7-1.8,13.3-2.8,20c-0.1,0.6-0.3,1.3-0.6,1.7c-1.8,2.1-3.3,5.2-5.6,5.9c-3.3,1-5.1-2.4-6.6-5    c-5.4-9-7.5-19-8.8-29.2C268,96.6,267.3,85.2,270,74c0.6-2.6,1.6-5.2,2.5-7.8c0.9-2.5,2.9-4.2,5.4-3.8c1.8,0.3,3.8,1.7,4.9,3.3    c5.1,7.3,7.3,15.8,8.9,24.4c0.4,2.2,0.8,4.4,0.9,6.7c0,0.8-0.9,1.7-1.4,2.5c-0.6-0.7-1.4-1.3-1.6-2.1c-1.2-4.3-2.1-8.7-3.4-13    c-0.8-2.3-2-4.6-3.5-6.5c-2.1-2.7-5-2.5-6.3,0.5c-1.7,4.3-2.4,9-3.6,13.5C273.2,91.8,273.6,91.9,274.1,92z"/>
                              <path d="M270.2,64.9c-0.9,7-2.4,14-2.7,21.1c-0.3,7.6,0.2,15.2,1.1,22.7c1.1,9.5,3.1,19,7.9,27.5c1.4,2.6,3.5,4.8,5.2,7    c-2.5,0.6-5.4,1.6-8.3,2c-1.6,0.2-3.8-0.3-5-1.3c-2.2-1.8-4.4-3.9-5.7-6.3c-8.7-16.5-12.7-34-9.9-52.7c1-6.5,4-12.4,8.9-16.9    c2-1.8,4.9-2.6,7.3-3.9C269.4,64.4,269.8,64.7,270.2,64.9z M254.5,90.7c0,3.5,0,6.7,0,10.1c3-0.6,5.8-1.2,8.9-1.8    c-0.2-3.2-0.4-6.2-0.7-9.4C259.7,90,257.3,90.3,254.5,90.7z M265.2,116.4c-0.6-3.5-1.1-6.5-1.7-9.9c-3,0.8-5.5,1.4-8.2,2.1    c0.6,3.2,1.2,6.2,1.8,9.4C259.9,117.5,262.3,117,265.2,116.4z M265.8,123.6c-2.3,0.7-4.4,1.3-6.7,2c1.1,2.7,2,5,3,7.3    c2.4-0.6,4.5-1.1,6.8-1.7C267.8,128.5,266.9,126.2,265.8,123.6z M256,82.3c7.7-1,7.7-1,8.2-8.3C257.8,74.6,257.7,74.7,256,82.3z     M267.8,140.2c1.5,4,4.3,3.7,7.4,2.3C272.6,137.6,272.6,137.6,267.8,140.2z M265.7,102.5c0.1,0,0.2,0,0.3,0c0-6.9,0-13.8,0-20.8    c-0.1,0-0.2,0-0.3,0C265.7,88.7,265.7,95.6,265.7,102.5z"/>
                              <path d="M448.2,79.6c-2.2,0.9-4,1.6-5.7,2.4c0.4,0.2,0.8,0.5,1.2,0.7c-1.4-11-2.4-22-4.4-32.9c-0.9-5.1-3.1-10.1-5.5-14.6    c-1.8-3.4-5-6.1-8.1-9.7c0.6-1.7,2-4.4,5.4-5c3.4-0.6,5.2,1.8,7,4.2c4.8,6.4,7.1,13.9,8.1,21.5c1.3,10.2,1.6,20.6,2.3,30.9    C448.6,78.1,448.2,79.2,448.2,79.6z M433.4,31.3c1.4,2.3,2.7,4.3,3.9,6.4c1.5-0.8,2.6-1.3,3.9-2c-1-2.2-1.9-4.3-2.9-6.6    C436.6,30,435.1,30.6,433.4,31.3z M441.3,49.5c1.4-0.6,2.6-1.1,3.9-1.6c-0.3-1.6-0.6-3-1-4.7c-1.7,0.6-3.1,1-4.5,1.5    C440.4,46.4,440.8,47.8,441.3,49.5z M447,60.5c-0.3-1.8-0.5-3.2-0.8-4.7c-1.5,0.4-2.5,0.7-3.8,1.1c0.2,1.6,0.5,3,0.7,4.6    C444.6,61.2,445.6,60.9,447,60.5z M446.9,68.8c-3.1-0.4-3.3,1.6-2.8,3.5c0.2,0.7,1.5,1.2,2.8,2.1    C446.9,71.8,446.9,70.3,446.9,68.8z"/>
                              <path d="M446.9,98.5c-2.6,2.9-4.8,6.3-7.8,8.6c-3.8,2.9-6.8,2.6-9.2-1.5c-3.8-6.4-7.6-13-9.7-20.1c-4.8-16.3-5.4-33-1.6-49.6    c1.2-5,3.3-10,5.8-14.4c3.8-6.5,9.5-7,14.3-1.1c3.1,3.8,5.6,8.3,7.3,12.9c4.2,11.3,5.8,23.2,5.3,35.3c-0.1,2.6-0.7,5.2-1.1,8.7    c1-14-0.4-27-4.2-39.6c-1.6-5.4-4.3-10.7-7.4-15.3c-3.8-5.7-9.9-5.6-13.3,0.3c-2.6,4.7-4.6,10-5.4,15.3c-2.9,19.1-1.8,37.9,6,55.8    c1.4,3.3,3.8,6.5,6.5,9c3.9,3.6,7.6,2.9,10.8-1.4c1-1.3,1.8-2.7,2.7-4C446.2,97.8,446.6,98.2,446.9,98.5z"/>
                              <path d="M289.5,101.2c1.5-0.2,2.4-0.4,3.5-0.6c-0.3,3.5-0.6,6.9-0.9,10.7c-2,0.6-4.3,1.4-6.6,2.1c-2.1-3.2-2-4,1.5-12.3    c-1.1-0.1-2.1-0.3-3.2-0.4c-0.7-2.5-1-5.2-2.1-7.5c-1.4-2.9-3.5-5.6-5.2-8.4c-0.4-0.6-1-1.7-0.8-2.1c1-2,2.4-3.9,3.6-5.8    c1.5,1.4,3.8,2.6,4.5,4.4c1.8,4.3,3,8.9,4.4,13.4C288.6,96.9,289,98.9,289.5,101.2z"/>
                              <path d="M420.7,51c6.8,6.2,9.8,26.9,5.1,38.5C421.8,76.4,419.5,64.1,420.7,51z"/>
                              <path d="M416,115.6c-3.8,0.1-6.9-2.9-9.4-6.9c-9.5-15.1-12.6-31.8-12.1-49.4c0.2-6,1.1-12,2.4-17.8c-0.2,8.7-0.8,17.4-0.6,26    c0.4,13.7,3.9,26.7,11.1,38.4C409.7,109.8,413.4,112.8,416,115.6z"/>
                              <path d="M383.4,88.9c0,2.1,0.2,4.2-0.1,6.3c-0.3,2.4-1.7,2.9-3.6,1.2c-0.5-0.5-1.1-1.1-1.5-1.7c-4.5-7.7-7.8-15.8-8.7-24.8    c-0.2-1.8,0.2-3.6,0.3-5.3c0.5-0.2,1-0.4,1.5-0.6c2,2.6,4,5.1,6,7.7c-3.7,2.9-4.7,7.9-2.8,12.5C376.6,88.2,378.8,89.6,383.4,88.9z    "/>
                              <path d="M425.2,27.6c1.9,1.5,4.6,2.7,5.5,4.6c3.2,6.7,6.5,13.5,8.3,20.6c3.3,13.2,4.2,26.6,0.5,39.9c-0.7,2.5-2,4.8-3.3,7    c-0.5,0.8-1.9,1.1-3.2,1.3c7.1-8.1,7.5-17.8,7.4-27.5c-0.1-10.6-1.7-20.9-5.5-30.8c-2.2-5.6-4.8-10.9-10.6-13.9    C424.6,28.5,424.9,28,425.2,27.6z"/>
                              <path d="M290.9,114c-1,5.5-1.8,10.8-3,16.1c-0.3,1.4-1,3.7-3.6,2.4c-2-1-3-2.1-1.9-4.7c1.1-2.7,2.1-5.7,2.1-8.6    C284.7,115.2,286.6,114,290.9,114z"/>
                              <path d="M255.6,72.8c-9.6,22.7-3.7,43.6,5.4,64.9C251.7,125.1,242.9,89.1,255.6,72.8z"/>
                              <path d="M389.6,85.5c-1.6,0-4.4,0.8-5.4-0.2c-3.2-3.1-4.5-7.3-3.1-11.6c0.4-1.3,2.8-2.1,3.8-2.7C386.5,75.9,387.9,80.3,389.6,85.5    z"/>
                              <path d="M392.8,67.4c0.7,5.7,1.3,9.9,1.7,14c0.1,0.7-0.5,2.1-1,2.2c-0.7,0.2-1.9-0.2-2.4-0.8c-2.8-3.1-4.3-6.9-3.3-11    C388.2,70.3,390.7,69.3,392.8,67.4z"/>
                              <path d="M378.3,73.8c1.3,4.6,2.6,8.9,3.8,13.3c-2.9,1.3-4.7,0.3-6.2-4.1C374.4,78.4,375.6,74.5,378.3,73.8z"/>
                              <path d="M298.9,99.3c-0.3,3.2-0.7,6.5-1.1,10.4c-0.6,0.2-1.9,0.6-3.3,0.9C292.5,104.7,294.8,99.2,298.9,99.3z"/>
                              <path d="M283.7,103.1c-0.3,3.2-0.5,6.3-0.9,9.3c-0.1,1-1,1.9-1.7,3.2C277.9,110.3,279.7,104,283.7,103.1z"/>
                              <path d="M445.7,92.5c-1.9,0-3.1,0-4.7,0c0.4-2.3,0.8-4.4,1.2-6.5c1.7,0,3.1,0,5.2,0C446.7,88.5,446.1,90.8,445.7,92.5z"/>
                              <path d="M437.1,101.1c1.2-2.7,2.2-5.5,6-3.4C442.3,100.7,440.7,102.4,437.1,101.1z"/>
      <g id="nameplate">
                              <path class="st1" d="M344.7,94.5c-1.4,0.7-2.8,1.7-4.3,2c-7.6,2-15.2,3.9-22.8,5.8c-3.3,0.8-5.6-0.9-6.7-4.9    c-0.9-3.1-0.3-4.9,3.4-5.8c11.7-3,23.3-6.6,34.9-9.8c1-0.3,2.2,0.3,3.3,0.4C349.8,86.3,347.3,90.4,344.7,94.5z"/>
                              
                              <path class="st1" d="M364.4,90.5c-4.6,1.2-9.2,2.3-14.7,3.7c3.4-5.3,6.3-9.9,9.5-14.8C361,83.3,362.6,86.7,364.4,90.5z"/>
                              
                              <path class="st1" d="M344.7,94.5c2.6-4.1,5.2-8.2,7.8-12.3c1-0.8,2-1.6,3-2.4c0.2,0.2,0.5,0.3,0.7,0.5c-3.2,4.8-6.3,9.7-9.6,14.4    C346.4,95,345.3,94.6,344.7,94.5z"/>
                           </g>     
                              <!--right side-->
                              <!--one-->
                              <path class="st1" d="M427.5,110.7c-5.7,2.8-10.5,2.9-13.7-3.1C421.6,102.8,422.9,103.1,427.5,110.7z">
                                 <animate id="spaceball9"
                                 attributeName="opacity"
                                 attributeType="XML"
                                 from="0"
                                 to="0" 
                                 begin="0;spaceball10.end" dur=".5"
                                 />
                                 <animate id="spaceball10"
                                 attributeName="opacity"
                                 attributeType="XML"
                                  begin="spaceball9.end"
                                  from="1"
                                 to="1"
                                 dur="6s" />
                             <!--two-->
                           </path>
                              <path class="st1" d="M403.7,90.6c4.6-1,8.3-1.8,12.5-2.8c1,3.2,2,6.2,3,9.6c-3.7,1.2-7.2,2.3-11.2,3.5    C406.6,97.4,405.2,94.2,403.7,90.6z">
                              <animate id="spaceball1"
                              attributeName="opacity"
                              attributeType="XML"
                              from="1"
                              to="1" 
                              begin="0;spaceball2a.end" dur=".5"
                              />
                              <animate id="spaceball2"
                              attributeName="opacity"
                              attributeType="XML"
                               begin="spaceball1.end"
                               from="0"
                              to="0"
                              dur=".5s" />
                              <animate id="spaceball2a"
                              attributeName="opacity"
                              attributeType="XML"
                               begin="spaceball2.end"
                               from="1"
                              to="1"
                              dur="5.5s" />
                             
                        </path>
                        <!--four-->
                              <path class="st5" d="M400.3,67.6c-0.2-3.7-0.3-6.9-0.5-10.3c4-1.3,7.7-2.5,11.8-3.8c0.1,3.1,0.4,5.9,0.3,8.7c0,0.8-1,2-1.8,2.3    C407.1,65.6,404,66.4,400.3,67.6z">
                              <animate id="spaceball3"
                              attributeName="opacity"
                              attributeType="XML"
                              from="1"
                              to="1" 
                              begin="0;spaceball4a.end" dur="1.5"
                              />
                              <animate id="spaceball4"
                              attributeName="opacity"
                              attributeType="XML"
                               begin="spaceball3.end"
                               from="0"
                              to="0"
                              dur=".5s" />
                              <animate id="spaceball4a"
                              attributeName="opacity"
                              attributeType="XML"
                               begin="spaceball4.end"
                               from="1"
                              to="1"
                              dur="4.5s" />
                              
                        </path>
      <!--three-->
                        <path class="st1" d="M403.3,83.9c-0.7-3.2-1.2-5.7-1.8-8.5c3.6-0.9,7.1-1.8,10.8-2.8c0.6,2.9,1.1,5.5,1.8,8.6    C410.5,82.1,407.1,82.9,403.3,83.9z">
                           <animate id="spaceball7"
                           attributeName="opacity"
                           attributeType="XML"
                           from="1"
                           to="1" 
                           begin="0;spaceball8a.end" dur="1"
                           />
                           <animate id="spaceball8"
                           attributeName="opacity"
                           attributeType="XML"
                            begin="spaceball7.end"
                            from="0"
                           to="0"
                           dur=".5s" />
                           <animate id="spaceball8a"
                           attributeName="opacity"
                           attributeType="XML"
                            begin="spaceball8.end"
                            from="1"
                           to="1"
                           dur="5s" />
                          
                     </path>
                     <!--path 5-->
                              <path class="st1" d="M400.6,50.8c-0.2-10.4,0.3-11.1,11.7-14.3C413.7,45.3,411.3,48.2,400.6,50.8z">
                              <animate id="spaceball5"
                              attributeName="opacity"
                              attributeType="XML"
                              from="1"
                              to="1" 
                              begin="0;spaceball6a.end" dur="2"
                              />
                              <animate id="spaceball6"
                              attributeName="opacity"
                              attributeType="XML"
                               begin="spaceball5.end"
                               from="0"
                              to="0"
                              dur=".5s" />
                              <animate id="spaceball6a"
                              attributeName="opacity"
                              attributeType="XML"
                               begin="spaceball6.end"
                               from="1"
                              to="1"
                              dur="4s" />
                        </path>
                            <!--top--> 
                     <path class="st1" d="M415.4,24.6c-1.2,6.2-2.8,7.6-9.9,7.6C409.1,29.4,412,27.2,415.4,24.6z">
                              <animate id="spaceball11"
                              attributeName="opacity"
                              attributeType="XML"
                              from="1"
                              to="1" 
                              begin="0;spaceball12a.end" dur="2.5"
                              />
                              <animate id="spaceball12"
                              attributeName="opacity"
                              attributeType="XML"
                               begin="spaceball11.end"
                               from="0"
                              to="0"
                              dur=".5s" />
                              <animate id="spaceball12a"
                              attributeName="opacity"
                              attributeType="XML"
                               begin="spaceball12.end"
                               from="1"
                              to="1"
                              dur="3.5s" />
                        </path>
                              <!--behind one-->
                              <path class="st4" d="M433.4,31.3c1.7-0.7,3.1-1.4,5-2.2c1,2.3,1.9,4.4,2.9,6.6c-1.3,0.7-2.4,1.2-3.9,2    C436.1,35.7,434.8,33.6,433.4,31.3z">
                              <animate id="spaceball15"
                              attributeName="opacity"
                              attributeType="XML"
                              from="1"
                              to="1" 
                              begin="0;spaceball16a.end" dur="3.5"
                              />
                              <animate id="spaceball16"
                              attributeName="opacity"
                              attributeType="XML"
                               begin="spaceball15.end"
                               from="0"
                              to="0"
                              dur=".5s" />
                              <animate id="spaceball16a"
                              attributeName="opacity"
                              attributeType="XML"
                               begin="spaceball16.end"
                               from="1"
                              to="1"
                              dur="2.5s" />
                     </path>
      <!--behind two-->
                     <path class="st3" d="M441.3,49.5c-0.5-1.6-1-3-1.5-4.8c1.4-0.5,2.7-0.9,4.5-1.5c0.4,1.7,0.6,3.1,1,4.7    C444,48.4,442.8,48.9,441.3,49.5z">
                           <animate id="spaceball35ze"
                           attributeName="opacity"
                           attributeType="XML"
                           from="1"
                           to="1" 
                           begin="0;spaceball36aze.end" dur="4"
                           />
                           <animate id="spaceball36ze"
                           attributeName="opacity"
                           attributeType="XML"
                            begin="spaceball35ze.end"
                            from="0"
                           to="0"
                           dur=".5s" />
                           <animate id="spaceball36aze"
                           attributeName="opacity"
                           attributeType="XML"
                            begin="spaceball36ze.end"
                            from="1"
                           to="1"
                           dur="2s" />
                           </path>
                              <!--behind three-->
                           <path class="st5" d="M447,60.5c-1.5,0.4-2.5,0.6-3.9,1c-0.2-1.6-0.5-3-0.7-4.6c1.3-0.4,2.4-0.7,3.8-1.1    C446.5,57.3,446.8,58.7,447,60.5z">
                                 <animate id="spaceball35z"
                                 attributeName="opacity"
                                 attributeType="XML"
                                 from="1"
                                 to="1" 
                                 begin="0;spaceball36az.end" dur="4.5"
                                 />
                                 <animate id="spaceball36z"
                                 attributeName="opacity"
                                 attributeType="XML"
                                  begin="spaceball35z.end"
                                  from="0"
                                 to="0"
                                 dur=".5s" />
                                 <animate id="spaceball36az"
                                 attributeName="opacity"
                                 attributeType="XML"
                                  begin="spaceball36z.end"
                                  from="1"
                                 to="1"
                                 dur="1.5s" />
                             
                         
                           </path>
      <!--four-->
                           <path class="st4" d="M446.9,68.8c0,1.5,0,2.9,0,5.6c-1.3-0.9-2.7-1.4-2.8-2.1C443.6,70.4,443.8,68.4,446.9,68.8z">
                                 <animate id="spaceball35"
                                 attributeName="opacity"
                                 attributeType="XML"
                                 from="1"
                                 to="1" 
                                 begin="0;spaceball36a.end" dur="5"
                                 />
                                 <animate id="spaceball36"
                                 attributeName="opacity"
                                 attributeType="XML"
                                  begin="spaceball35.end"
                                  from="0"
                                 to="0"
                                 dur=".5s" />
                                 <animate id="spaceball36a"
                                 attributeName="opacity"
                                 attributeType="XML"
                                  begin="spaceball36.end"
                                  from="1"
                                 to="1"
                                 dur="1s" />
                              </path>
                   
                 
                             
                              <!--left side-->
                                  <!--top-->
                                  <path class="st4" d="M256,82.3c1.7-7.6,1.8-7.7,8.2-8.3C263.7,81.4,263.7,81.4,256,82.3z">
                                       <animate id="spaceball120"
                                    attributeName="opacity"
                                    attributeType="XML"
                                    from="1"
                                    to="1" 
                                    begin="0;spaceball120a.end" dur="3.25s"
                                    />
                                    <animate id="spaceball121"
                                    attributeName="opacity"
                                    attributeType="XML"
                                     begin="spaceball120.end"
                                     from="0"
                                    to="0"
                                    dur=".5s" />
                                    <animate id="spaceball120a"
                                    attributeName="opacity"
                                    attributeType="XML"
                                     begin="spaceball121.end"
                                     from="1"
                                    to="1"
                                    dur=".25s" />
                                 </path>
                            
                              <!--2nd top-->
                              <path class="st4" d="M254.5,90.7c2.8-0.4,5.2-0.7,8.2-1.1c0.2,3.2,0.4,6.2,0.7,9.4c-3.1,0.6-5.9,1.2-8.9,1.8    C254.5,97.4,254.5,94.2,254.5,90.7z">
                                    <animate id="spaceball108"
                                    attributeName="opacity"
                                    attributeType="XML"
                                    from="1"
                                    to="1" 
                                    begin="0;spaceball108a.end" dur="3s"
                                    />
                                    <animate id="spaceball109"
                                    attributeName="opacity"
                                    attributeType="XML"
                                     begin="spaceball108.end"
                                     from="0"
                                    to="0"
                                    dur=".5s" />
                                    <animate id="spaceball108a"
                                    attributeName="opacity"
                                    attributeType="XML"
                                     begin="spaceball109.end"
                                     from="1"
                                    to="1"
                                    dur=".5s" />
                                 </path>
                           >
                              <!--third top-->
                              <path class="st4" d="M265.2,116.4c-2.9,0.6-5.3,1.1-8.1,1.7c-0.6-3.2-1.2-6.2-1.8-9.4c2.8-0.7,5.3-1.4,8.2-2.1    C264,109.9,264.6,112.9,265.2,116.4z">
                                    <animate id="spaceball106"
                                    attributeName="opacity"
                                    attributeType="XML"
                                    from="1"
                                    to="1" 
                                    begin="0;spaceball106a.end" dur="2.75s"
                                    />
                                    <animate id="spaceball107"
                                    attributeName="opacity"
                                    attributeType="XML"
                                     begin="spaceball106.end"
                                     from="0"
                                    to="0"
                                    dur=".5s" />
                                    <animate id="spaceball106a"
                                    attributeName="opacity"
                                    attributeType="XML"
                                     begin="spaceball107.end"
                                     from="1"
                                    to="1"
                                    dur=".75s" />
                                 </path>
                              <!--four top-->
                              <path class="st4" d="M265.8,123.6c1,2.6,2,4.9,3.1,7.6c-2.4,0.6-4.5,1.1-6.8,1.7c-1-2.4-1.9-4.6-3-7.3    C261.4,124.9,263.5,124.3,265.8,123.6z">
                                    <animate id="spaceball104"
                                    attributeName="opacity"
                                    attributeType="XML"
                                    from="1"
                                    to="1" 
                                    begin="0;spaceball104a.end" dur="2.5"
                                    />
                                    <animate id="spaceball105"
                                    attributeName="opacity"
                                    attributeType="XML"
                                     begin="spaceball104.end"
                                     from="0"
                                    to="0"
                                    dur=".5s" />
                                    <animate id="spaceball104a"
                                    attributeName="opacity"
                                    attributeType="XML"
                                     begin="spaceball105.end"
                                     from="1"
                                    to="1"
                                    dur="1s" />
                                 </path>
                         
                         
                              <!--bottom-->
                              <path class="st4" d="M267.8,140.2c4.7-2.5,4.8-2.5,7.4,2.3C272.1,143.8,269.3,144.2,267.8,140.2z">
                                    <animate id="spaceball102"
                                    attributeName="opacity"
                                    attributeType="XML"
                                    from="1"
                                    to="1" 
                                    begin="0;spaceball102a.end" dur="2.25"
                                    />
                                    <animate id="spaceball103"
                                    attributeName="opacity"
                                    attributeType="XML"
                                     begin="spaceball102.end"
                                     from="0"
                                    to="0"
                                    dur=".5s" />
                                    <animate id="spaceball102a"
                                    attributeName="opacity"
                                    attributeType="XML"
                                     begin="spaceball103.end"
                                     from="1"
                                    to="1"
                                    dur="1.25s" />
                                 </path>
                           
                             
                      
                             
                           
                           
                           </g>
                           <path
                           style="fill:none;"
                           d="M 343.5,83 c -1.858376,-4.5041 -5.133996,-7.77973 -8.283844,-9.57519 -3.149848,-1.79547 -6.173261,-2.11041 -9.102845,0.59846 -2.929584,2.70887 -5.763928,8.44054 -5.291522,15.65433 0.472406,7.21379 4.251832,15.90647 8.504291,19.30823 4.252458,3.40177 8.977077,1.51192 11.874789,-1.03951 2.897711,-2.55143 3.968644,-5.76423 4.283584,-10.23663 0.314939,-4.47239 -0.126077,-10.2056 -1.984453,-14.70969 z"
                            id="spacejunk1"
                        />
      
                       
      
                      
                    <circle cx="0" cy="0" r="2" fill="#04396c">
                                     <animateMotion  dur="6s" begin="0" repeatDur="indefinite" rotate="auto">                     
                                       <mpath  from="1" to="6" xlink:href="#spacejunk1"/>                        
                                     </animateMotion>
                                     <animate attributeType="XML" attributeName="fill"             
                                               from="0" to="5"
                                               dur="6s" repeatCount="indefinite" />   
                                               <animate id="spaceballf1"
                                               attributeName="fill-opacity"
                                               attributeType="XML"
                                               from="1"
                                               to="1" 
                                               begin="0;spaceballf2.end" dur="5"
                                               />
                                               <animate id="spaceballf2"
                                               attributeName="fill-opacity"
                                               attributeType="XML"
                                                begin="spaceballf1.end"
                                                from="0"
                                               to="0"
                                               dur="1s" />
                                 </circle>
                                 <path
                                 style="fill:none;"
                                 d=" M 343.5,76 c -1.379114,-2.70883 -3.074012,-5.92162 -5.41413,-8.0949 -2.340118,-2.17328 -5.325517,-3.30717 -7.86347,-3.6537 -2.537952,-0.34652 -4.628155,0.0944 -6.578511,2.8033 -1.950357,2.70889 -3.760006,7.68485 -4.423535,12.50444 -0.66353,4.81959 -0.180481,9.48094 0.735877,14.52075 0.916358,5.03981 2.265907,10.45725 3.983608,14.48909 1.717701,4.03185 3.803397,6.67762 6.216392,8.37856 2.412995,1.70094 5.153124,2.4569 7.709209,2.11037 2.556085,-0.34653 4.928235,-1.79551 6.461752,-4.28377 1.533517,-2.48825 2.228829,-6.01634 2.535532,-11.46516 0.306702,-5.44881 0.224901,-12.82001 -0.347674,-17.60761 -0.572575,-4.7876 -1.635936,-6.99254 -3.01505,-9.70137 z"
                                 id="spacejunk2"/> 
                              <circle cx="0" cy="0" r="5" fill="#000000">
                                   <animateMotion  dur="9s" begin="0" repeatDur="indefinite" rotate="auto">                     
                                     <mpath  from="0" to="8" xlink:href="#spacejunk2"/>                                
                                   </animateMotion>  
                                             <animate id="spaceballg3"
                                             attributeName="fill-opacity"
                                             attributeType="XML"
                                             from="1"
                                             to="1" 
                                             begin="0;spaceballg5.end" dur="7.25s"
                                             />
                                             <animate id="spaceballg4"
                                             attributeName="fill-opacity"
                                             attributeType="XML"
                                              begin="spaceballg3.end"
                                              from="0"
                                             to="0"
                                             dur="1.5s" />
                 
                                             <animate id="spaceballg5"
                                             attributeName="fill-opacity"
                                             attributeType="XML"
                                              begin="spaceballg4.end"
                                              from="1"
                                             to="1"
                                             dur=".25s" />
                               </circle>
                              </g>
                               <path
                               style="fill:none;"
                               d="M 346,64 c -6.762227,-7.06055 -15.766414,-12.76137 -22.656696,-13.32845 -6.890283,-0.56708 -11.664928,3.99975 -15.515508,9.85589 -3.850579,5.85614 -6.775879,13.00013 -7.531714,22.18075 -0.755836,9.18061 0.658141,20.39653 3.795865,29.62177 3.137724,9.22524 7.999119,16.45915 14.684982,19.56167 6.685863,3.10251 15.195923,2.07359 21.378227,-1.81398 6.182303,-3.88756 10.036563,-10.63316 13.256379,-18.13919 3.219814,-7.50602 5.805034,-15.77195 4.837724,-24.11495 -0.96732,-8.34299 -5.487032,-16.76295 -12.249259,-23.82351 z"
                               id="spacejunk3"/>
                        <circle cx="0" cy="0" r="3" fill="#000000">
                                 <animateMotion  dur="13s" begin="0" repeatDur="indefinite" rotate="auto">                     
                                   <mpath  from="0" to="8" xlink:href="#spacejunk3"/>                
                                 </animateMotion>  
                                           <animate id="spaceballh6"
                                           attributeName="fill-opacity"
                                           attributeType="XML"
                                           from="1"
                                           to="1" 
                                           begin="0;spaceballh8.end" dur="10.75s"      />
                                           <animate id="spaceballh7"
                                           attributeName="fill-opacity"
                                           attributeType="XML"
                                            begin="spaceballh6.end"
                                            from="0"
                                           to="0"
                                           dur="1.5s" />
                                           <animate id="spaceballh8"
                                           attributeName="fill-opacity"
                                           attributeType="XML"
                                            begin="spaceballh7.end"
                                            from="1"
                                           to="1"
                                           dur=".75s" />
                             </circle>
                             <path
                             style="fill:none; stroke:#000"
                             d="m 85,155 c -10.26832,-7.30753 -22.174457,-14.23703 -33.608241,-13.48121 -11.433784,0.75583 -22.39499,9.19722 -26.6158514,21.22969 -4.220861,12.03247 -1.7011325,27.65479 11.2133874,37.23047 12.91452,9.57567 36.222679,13.10339 50.7117,8.37857 14.489021,-4.72482 20.15872,-17.70212 18.678249,-28.0333 -1.48047,-10.33119 -10.110925,-18.0167 -20.379244,-25.32422 z"
                             id="spacejunk4"
                          />
                          <circle cx="0" cy="0" r="2.5" fill="#000000">
                               <animateMotion  dur="17s" begin="0" repeatDur="indefinite" rotate="auto">                     
                                 <mpath  from="0" to="8" xlink:href="#spacejunk4"/>                
                               </animateMotion>  
                                         <animate id="spaceballj9"
                                         attributeName="fill-opacity"
                                         attributeType="XML"
                                         from="1"
                                         to="1" 
                                         begin="0;spaceballj11.end" dur="14"
                                         />
                  
                                         <animate id="spaceballj10"
                                         attributeName="fill-opacity"
                                         attributeType="XML"
                                          begin="spaceballj9.end"
                                          from="0"
                                         to="0"
                                         dur="1.5s" />
                 
                                         <animate id="spaceballj11"
                                         attributeName="fill-opacity"
                                         attributeType="XML"
                                          begin="spaceballj10.end"
                                          from="1"
                                         to="1"
                                         dur="1.5s" />
                           </circle>
                 <g>
                           <path
                           style="fill:none;"
                           d="m 23,165 c -1.133843,4.15742 -2.267704,8.31491 -2.364453,14.2425 -0.09675,5.92759 0.843745,13.62373 2.327591,19.42294 1.483846,5.79921 3.510987,9.70081 5.538168,13.60249"
                           id="spacejunk5" />
                           </g></a>
                        </svg>   
                    
             </div>

             <div >
                <a href="spider/index.php"><img class="brain" id="gear" src='images/sosaanimationstudios/logo/icons/sosabrainwhite.svg' alt="image of a brain" width="100%" height="100%" style="height:12vw;width:12vw;border-radius: 50%;"/></a>
            </div>

        <div id="headerContainer" syle="background-color:black;">
         <h1 id="header">akili@sosaanimationstudios.com</h1>
         <br>
        </div>

    </div>
    </main>


</body>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  
<link rel="stylesheet" type="text/css" href="css/main.css">
<script>
   if ('serviceWorker' in navigator) {
     window.addEventListener('load', function() {
       navigator.serviceWorker.register('service-worker.js')
         .then(reg => {
           console.log('Service worker registered! 😎', reg);
         })
         .catch(err => {
           console.log('😥 Service worker registration failed: ', err);
         });
     });
   }
   </script>
<?php

require 'footer.php';
?>




