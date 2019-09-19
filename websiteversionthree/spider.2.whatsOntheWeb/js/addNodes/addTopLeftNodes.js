function addTopLeftNodes(dataset){
    
    let newTopLeftCircle = d3.select("#circle"+ ( dataset.length -3))
    .style("border","5px solid #36802d")
            .on("click", topLeftWeb)
            .style("display","block")
            .style("box-shadow", "10px 10px 5px rgb(35, 77, 32, .5)");
    
    let newTopRightCenterCircle = d3.select("#circle"+ ( dataset.length -2))
    .style("border","5px solid #b20000")
                                    .on("click", topRightWeb)	
                                    .style("display","block").attr("class", "shadow")
                                    .style("box-shadow", "10px 10px 5px rgb(96, 16, 16, .5)");
    let newBottomRightCenterCircle = d3.select("#circle"+ ( dataset.length -1))
                                    .style("border","5px solid #be29ec")
                                    .on("click", bottomLeftWeb)
                                    .style("display","block").attr("class", "shadow")
                                    .style("box-shadow", "10px 10px 5px rgb(102, 0, 102, .5)");
    
                                 
    }