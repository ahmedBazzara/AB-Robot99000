(function () {

    var step = function () {

        var forward = function ( currRow, currCol,currDir,array) {
            var newRow;
            var newCol;
            var newPointers =[];
            switch (currDir) {
                case "N":
                    if (currRow > 0) {
                        newRow = currRow - 1;
                        newPointers=[newRow, currCol, currDir];
                        return newPointers;
                    }
                    else if (currRow == 0) {
                        console.log("cant go more up !");
                    }
                    break;

                case "S":
                    if (currRow < array.length - 1) {
                        newRow = currRow + 1;
                        newPointers=[newRow, currCol, currDir];
                        return newPointers ;
                    }
                    else if (currRow == array.length - 1) {
                        console.log("cant go more down !");
                    }
                    break;
                case "E":
                    if (currCol < array[1].length - 1) {
                        newCol = currCol + 1;
                        newPointers=[currRow, newCol, currDir];
                        return newPointers ;
                    }
                    else if (currCol == array[i].length - 1) {
                        console.log("cant go more East !");
                    }
                    break;
                case "W":
                    if (currCol > 0) {
                        newCol = currCol - 1;
                        newPointers=[currRow, newCol, currDir];
                        return newPointers ;
                    }
                    else if (currCol == 0) {
                        console.log("cant go more West !");
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