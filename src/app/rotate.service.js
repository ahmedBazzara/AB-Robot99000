(function () {
/* service to rotate the pointer/robot right or left by checking its current direction (from the direction service)
 and which way to rotate then compare them with the direction table */
    var rotate = function () {
        var directionTable = [
            { name: "N", value: 0 },
            { name: "E", value: 1 },
            { name: "S", value: 2 },
            { name: "W", value: 3 }];
        var left = function (currDir) {
            var newDirVal;
            var newDirNam;
            for (var i = 0; i < directionTable.length; i++) {
                if (currDir == directionTable[i].name) {
                    if (directionTable[i].value > 0) {
                        newDirVal = directionTable[i].value - 1;

                        for (var j = 0; j < directionTable.length; j++) {
                            if (newDirVal == directionTable[j].value) {
                                newDirNam = directionTable[j].name;
                            }
                        }
                        return  newDirNam;

                    }
                    else if (directionTable[i].value == 0) {
                        newDirVal = 3;
                        newDirNam = "W";

                        return newDirNam;
                    }
                }

            }
        };

        var right = function (currDir) {
            var newDirVal;
            var newDirNam;
            for (var i = 0; i < directionTable.length; i++) {
                if (currDir == directionTable[i].name) {
                    if (directionTable[i].value < 3) {
                        newDirVal = directionTable[i].value + 1;
    
                        for (var j = 0; j < directionTable.length; j++) {
                            if (newDirVal == directionTable[j].value) {
                                newDirNam = directionTable[j].name;
                            }
                        }
                        return  newDirNam;
    
                    }
                    else if (directionTable[i].value == 3) {
                        newDirVal = 0;
                        newDirNam = "N";
    
                        return  newDirNam;
                    }
                }
    
            }
        };

        
        return {
            left: left,
            right: right
        };

    };

    var module = angular.module("Robot99000");
    module.factory("rotate", rotate);

}());