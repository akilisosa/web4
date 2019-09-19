    function mutateTopRightData(numCXVariable,numCYVariable){ 
      
      
        //key function
        var key = function(d) {
            return d.key;       };
            //returns object size function
        Object.size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };
        // Get the size of an object

    function addRightCenterBranch(){
        let rightCenterBranch = [ 300, numCYVariable-300, numCXVariable,0,0 ];
        var size = Object.size(dataset);
      
        function checkDatasetOne (){   
      
            for (let i = 0; i < size; i++) {
                if (          
                    ((dataset[i].value[0]+dataset[i].value[2] )== (rightCenterBranch[0]+rightCenterBranch[2]))
                &&  ((dataset[i].value[1]+dataset[i].value[3]) == (rightCenterBranch[1]+rightCenterBranch[3])) )
                    return true;      
                 }return false;}
               
               //actual function part 
            if (checkDatasetOne(rightCenterBranch)==false){
                var lastKeyValue = dataset[dataset.length - 1].key;
                 dataset.push({
                        key: lastKeyValue + 1,
                        value: rightCenterBranch
                    });
                    return dataset;
                    }        

                   else{
                    var size = Object.size(dataset);
                    
                  
                    for (var i = 0; i < size; i++) {              
                    if((dataset[i].value[1]+dataset[i].value[3] ) >= (rightCenterBranch[1]+rightCenterBranch[3])){
                     
                    let position = dataset[i].value[1]+300;
                    dataset[i].value[1] = position;
                   }}

                   for (var i = 0; i < size; i++) {    
                       if((dataset[i].value[0]+dataset[i].value[2] ) <= (rightCenterBranch[0]+rightCenterBranch[2])){                
                    
                    let position = dataset[i].value[2]-300;
                    dataset[i].value[2] = position;
                   }}

                   var lastKeyValue = dataset[dataset.length - 1].key;
                   dataset.push({
                          key: lastKeyValue + 1,
                          value: rightCenterBranch
                      });
                      return dataset;

                }
                return dataset;
            }
       
    function addRightLeftBranch(){
            
        let rightLeftBranch = [0,numCYVariable-300,numCXVariable, 0,0];
            var size = Object.size(dataset);
      
            function checkDatasetTwo (){   
                 
                for (let i = 0; i < size; i++) {
                    if ( 
                        ((dataset[i].value[0]+dataset[i].value[2] )== (rightLeftBranch[0]+rightLeftBranch[2]))
                    &&  ((dataset[i].value[1]+dataset[i].value[3]) == (rightLeftBranch[1]+rightLeftBranch[3])) )
                        return true;
                         } return false;}
                     
                   

            //function part

        if (checkDatasetTwo(rightLeftBranch)==false){

            var lastKeyValue = dataset[dataset.length - 1].key;
                     dataset.push({
                    key: lastKeyValue + 1,
                    value: rightLeftBranch
                });
                    return dataset;
                    } 
                    else{
                        
                   for (var i = 0; i < size; i++) {
                       
                    if ((dataset[i].value[1]+dataset[i].value[3] ) >= (rightLeftBranch[1]+rightLeftBranch[3])){
                    
                    let position = dataset[i].value[1]+300;
                    dataset[i].value[1] = position;
                   }}

                    dataset=[];
                    dataset = newDataset.slice();
                    var lastKeyValue = dataset[dataset.length - 1].key;
                 dataset = dataset.concat({
                        key: lastKeyValue + 1,
                        value: rightLeftBranch
                    });         
                    return dataset;
                    }
                    
                }





                
    function addRightBottomBranch(){
    let rightBottomBranch = [300,numCYVariable,numCXVariable, 0,0];  
    var size = Object.size(dataset);

    function checkDatasetThree (){   

                for (var i = 0; i <size ; i++) {                 
                    if (    
                        ((dataset[i].value[0]+dataset[i].value[2] )== (rightBottomBranch[0]+rightBottomBranch[2]))
                    &&  ((dataset[i].value[1]+dataset[i].value[3]) == (rightBottomBranch[1]+rightBottomBranch[3])) ){
                        return true;
                         }else{return false;}
                     }
                   }


        if (checkDatasetThree(rightBottomBranch,dataset)==false){
            var lastKeyValue = dataset[dataset.length - 1].key;
            dataset.push({
                    key: lastKeyValue + 1,
                    value: rightBottomBranch
                });
                    return dataset;
                    }       
                     else{
                        for (var i = 0; i < size; i++) {
                       
                            if ((dataset[i].value[0]+dataset[i].value[2] ) >= (rightLeftBranch[0]+rightLeftBranch[2])){
                      
                            let position = dataset[i].value[1]+300;
                            dataset[i].value[1] = position;
                           }}
        
                            
               
                    var lastKeyValue = dataset[dataset.length - 1].key;
               dataset.push({
                        key: lastKeyValue + 1,
                        value: rightBottomBranch
                    });          
                    return dataset;
                    }
                }

                function checkLeft(){
                    let bottomLeftCenterBranch = [numCXVariable-300, 0, 0, numCYVariable+300,0]; 
                    var size = Object.size(dataset);
               
                    function checkDatasetLeft (){   
              
                        for (let i = 0; i < size; i++) {
                            if (      
                                ((dataset[i].value[0]+dataset[i].value[2] ) <= (0)) )
                                return true;
                                 } 
                              return false; 
                             }
                           
                             if (checkDatasetLeft() ==true){
                                for (var i = 0; i < size; i++) {    
                                    let position = dataset[i].value[2]+300;
                                    dataset[i].value[2] = position;
                                   }
                             }

                 
                
                    return dataset;
                }


    function shiftDown(){
        
        let rightCenterBranch = [ 300, numCYVariable-300, numCXVariable,0,0 ];
        var size = Object.size(dataset);

        if((rightCenterBranch[1]+rightCenterBranch[3] <= 0)){
           
                for (var i = 0; i < size; i++) {                    
                       
                    let position = dataset[i].value[1]+300;
                    dataset[i].value[1] = position;
                }
            return dataset;
        }};

        addRightCenterBranch();

        addRightLeftBranch();

        addRightBottomBranch();
 
        shiftDown();
        checkLeft();
    
        return dataset;
    }
        
        
