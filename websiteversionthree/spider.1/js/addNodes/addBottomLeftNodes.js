function addBottomLeftNodes(dataset){
    let newBottomLeftCircle = d3.select("#circle"+ ( dataset.length -3))
    .style("border","5px solid #be29ec")
                        .on("click", bottomLeftWeb)
                        .style("display","block")
                        .style("box-shadow", "10px 10px 5px rgb(102, 0, 102, .5)");
    
    let newBottomTopLeftCircle = d3.select("#circle"+ ( dataset.length -2))
    .style("border","5px solid #36802d")
                        .on("click", topLeftWeb)
                        .style("display","block")
                        .style("box-shadow", "10px 10px 5px rgb(35, 77, 32, .5)");
    let newBottomRightCircle = d3.select("#circle"+ ( dataset.length -1))
                        .style("border","5px solid 	#f48020")
                        .on("click", bottomRightWeb)
                        .style("display","block")
                        .style("box-shadow", "10px 10px 5px rgb(199,103,6, .5)");
    }