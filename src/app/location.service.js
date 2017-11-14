(function () {

    var location = function () {

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