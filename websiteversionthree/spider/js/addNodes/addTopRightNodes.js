function addTopRightNodes(dataset){
    
    var key = function(d) {
        return d.key;
    };

    function addNodeOne(){
let newTopLeftCenterCircle = d3.select("#circle"+ ( dataset.length -3))
.style("border","5px solid #b20000")
                                .on("click", topRightWeb)
                                .style("display","block")
                                .style("box-shadow", "10px 10px 5px rgb(96,16,16, .5)");  
    }

    function addNodeTwo(){
                    
let newTopLeftCircle = d3.select("#circle"+ ( dataset.length -2))
.style("border","5px solid #36802d")
                                .on("click", topLeftWeb)
                                .style("display","block")
                                .style("box-shadow", "10px 10px 5px rgb(35, 77, 32, .5)");
    }

    function addNodeThree(){
let newBottomRightCircle = d3.select("#circle"+ ( dataset.length -1))
.style("border","5px solid 	#f48020")
                                .on("click", bottomRightWeb)
                                .style("display","block")
                                .style("box-shadow", "10px 10px 5px rgb(199,103,6, .5)");
    }

   addNodeOne();
   addNodeTwo();
   addNodeThree();


return dataset;
}