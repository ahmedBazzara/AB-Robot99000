(function () {
// service to get the location of the pointer/robot
    var location = function () {
// gets the current row the pointer/robot is at by swaping the matrix and look for the point where the robot is at
        var getCurrRow = function (array) {

            var currRow;
            for (var i = 0; i < array.length; ++i) {
                for (var j = 0; j < array[i].length; ++j) {
                    if (array[i][j] == "0") {

                    }
                    else {
                        currRow = i;
                    }
                }
            }
            return currRow;
        };
// gets the current collum the pointer/robot is at by swaping the matrix and look for the point where the robot is at
        var getCurrCol = function (array) {
            var currCol;
            for (var i = 0; i < array.length; ++i) {
                for (var j = 0; j < array[i].length; ++j) {
                    if (array[i][j] == "0") {
                    }
                    else {
                        currCol = j;
                    }
                }
            }
            return currCol;
        };
// gets the current direction the pointer/robot is at by swaping the matrix and look for the point where the robot is at
        var getCurrDirection = function (array) {
            var currDir;
            for (var i = 0; i < arraylength; ++i) {
                for (var j = 0; j < array.length; ++j) {
                    if (array[i][j] == "0") {
                    }
                    else {
                        currDir = array[i][j];
                    }
                }
            }
            return currDir;
        };
        return {
            getCurrRow: getCurrRow,
            getCurrCol: getCurrCol,
            getCurrDirection: getCurrDirection
        };

    };

    var module = angular.module("Robot99000");
    module.factory("location", location);

}());