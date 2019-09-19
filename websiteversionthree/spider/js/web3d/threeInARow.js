function threeInARow(){
    
 if(inARow.length == 3){
    if (inARow[0]==inARow[1] && inARow[1]==inARow[2]){
     console.log("SOMETHING SUPER COOL") 
     return true;
     //do something cool
    }else{
    inARow.shift();
    return false}
 }
}