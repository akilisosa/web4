function mutateZData(numCXVariable,numCYVariable,dataset){

    console.log("mutateDataZ works");

    let bottomRightCenterBranch = [numCXVariable,numCYVariable,0,0,0];

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
        //if call the array object and check the checkArroj thing

        //if its a nummber smaller than zero

        var size = Object.size(dataset);
       
        for (var i = 0; i < size; i++) { 
         let position = dataset[i].value[4]- 300;
         dataset[i].value[4] = position;
        }

            var lastKeyValue = dataset[dataset.length - 1].key;
         dataset.push({
            key: lastKeyValue + 1,
            value: bottomRightCenterBranch
                });

                         


}