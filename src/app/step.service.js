(function () {
 /* service to move the pointer/robot towards the wished direction by checking if the robot will be in 
 the matrix border after the movment or not */
    var step = function () {
        var forward = function (currRow, currCol, currDir, array) {
            var newRow;
            var newCol;
            var newPointers = [];
            var errMsg = document.getElementById("error");
            errMsg.innerHTML = "";
            switch (currDir) {
                case "S":
                    try {
                        if (+currRow == 0) throw "Can't go more South!";
                        newRow = +currRow - 1;
                        errMsg.innerHTML = "";                        
                        return newPointers = [+newRow, +currCol, currDir];

                    }
                    catch (err) {
                        errMsg.innerHTML = err;
                        return newPointers = [+currRow, +currCol, currDir];

                    }
                    break;
                case "N":
                    try {
                        if (+currRow == array.length - 1) throw "Can't go more North!";
                        newRow = +currRow + 1;
                        errMsg.innerHTML = "";                        
                        
                        return newPointers = [+newRow, +currCol, currDir];

                    }
                    catch (err) {
                        errMsg.innerHTML = err;
                        
                        return newPointers = [+currRow, +currCol, currDir];

                    }
                    break;
                case "E":

                    try {
                        if (currCol == array[0].length - 1) throw "Can't go more East!";
                        newCol = +currCol + 1;
                        errMsg.innerHTML = "";                        
                        
                        return newPointers = [+currRow, +newCol, currDir];

                    }
                    catch (err) {
                        errMsg.innerHTML = err;
                        return newPointers = [+currRow, +currCol, currDir];

                    }
                    break;
                case "W":
                    try {
                        if (currCol == 0) throw "Can't go more West!";
                        newCol = +currCol - 1;
                        errMsg.innerHTML = "";                        
                        
                        return newPointers = [+currRow, +newCol, currDir];

                    }
                    catch (err) {
                        errMsg.innerHTML = err;
                        return newPointers = [+currRow, +currCol, currDir];

                    }
                    break;
            }
        };


        return {
            forward: forward
        };

    };

    var module = angular.module("Robot99000");
    module.factory("step", step);

}());