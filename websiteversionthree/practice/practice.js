let terms=  ["ice", "ice", "seals", "ice", "polar", "polar", "polar", "polar", "polar", "polar", "polar", "bears", "bears", "bears", "bears", "bears", "bears", "bears", "nbsp", "why", "why", "part", "part", "russia", "russia", "state", "state", "emergency", "emergency", "over", "over", "polar", "polar", "polar", "polar", "polar", "polar", "bears", "bears", "bears", "bears", "bears", "bears", "spring", "polar", "polar", "polar", "polar", "polar", "bears", "bears", "bears", "bears", "bears", "why", "part", "russia", "state", "emergency", "over", "polar", "polar", "polar", "polar", "bears", "bears", "bears", "bears", "polar", "polar", "polar", "bears", "bears", "bears", "object", "invasion", "invasion", "polar", "polar", "bears", "bears", "bbc", "bbc", "news", "news", "invasion", "polar", "bears", "bbc", "news"];

let searchTerms =[];

for(i=0;i<terms.length;i++){
let count = 0;
  for (b=i+1;b<terms.length;b++){
    if(terms[i] == terms[b]){
        count++;                                                                                                                                    }
                             }
  searchTerms.push([terms[i],count]);
                            }    
let finalFour = [];

for (i=0;i<searchTerms.length;i++){
  for(b=0; b<searchTerms.length;b++){
    if (searchTerms[i][0]==searchTerms[b][0]){
      searchTerms.splice(b,1);
    }
  }
}
console.log(searchTerms);

let ordered = searchTerms.sort(function(a,b){
  return b[1] - a[1];
});
console.log("this is ordered",ordered);

for (i=0;i<ordered.length;i++){
  for(b=i+1; b<ordered.length;b++){
    if (ordered[i][0]==ordered[b][0]){
      console.log("its a match!");
      console.log(ordered[i][0],ordered[b][0]);
      ordered.splice(b,1);
    }
  }
}

/* var replace = "regex";
var re = new RegExp(replace,"g");
mystring".replace(re, "newstring"); */

finalFour.push(ordered[0]);
finalFour.push(ordered[1]);
finalFour.push(ordered[2]);
finalFour.push(ordered[3]);

console.log("this is the final four",finalFour);




