(function () {
    var app = angular.module("Robot99000", []);
//creating a 2D array function 
    var arrays = Array.matrix = function (numrows, numcols, initial) {
        var arr = [];
        for (var i = 0; i < numrows; i++) {
            var columns = [];
            for (var j = 0; j < numcols; j++) {
                columns[j] = initial;
            }
            arr[i] = columns;
        }
        return arr;
    }

    var MainController = function ($scope, $http, rotate, location, step) {
        $scope.my2Darray = null;
        $scope.error="";
        // creat a matrix function 
        $scope.createMatrix = function (rows, cols, initial) {
            $scope.my2Darray = Array.matrix(rows, cols, initial);
            console.log($scope.my2Darray);
        }
        // clear or empty the matrix
        var clearMatrix = function () {
            for (var i = 0; i < $scope.my2Darray.length; i++) {
                for (var j = 0; j < $scope.my2Darray[0].length; j++) {
                    $scope.my2Darray[i][j] = "0";
                }
            }
        }
        // set the point/robot on a point in the matrix
        $scope.setPointer = function (row, col, dir) {
            clearMatrix();
            $scope.my2Darray[row][col] = dir;
            console.log($scope.my2Darray);
            $scope.currRow = row;
            $scope.currCol = col;
            $scope.currDir = dir;

        }
        var chaOfDirection = [];
        // make an array of the uppercase letters from the directions' order string
        var breakTheorder = function (directionString) {
            var dirToUpp = directionString.toUpperCase();
            for (var i = 0; i < dirToUpp.length; i++) {
                var char = dirToUpp.charAt(i);
                chaOfDirection.push(char);
            }
            /* console.log(chaOfDirection); */
            return chaOfDirection;
        }

       // check every charechter of the directions array and call the suitable function 
        $scope.checkCase = function () {
            var directionString = document.getElementById("directionInput").value;
            breakTheorder(directionString);
            
            for (i = 0; i < chaOfDirection.length; i++) {

                switch (chaOfDirection[i]) {
                    case "R": console.log("Right");
                        var dir = rotate.right($scope.currDir);
                        $scope.setPointer($scope.currRow, $scope.currCol, dir);
                        document.getElementById("error").innerHTML="";                        
                        break;

                    case "L": console.log("Left");
                        var dir = rotate.left($scope.currDir);
                        $scope.setPointer($scope.currRow, $scope.currCol, dir);
                        document.getElementById("error").innerHTML="";                        
                        break;

                    case "F": console.log("Forward");
                    
                        var newlocation = step.forward($scope.currRow, $scope.currCol, $scope.currDir, $scope.my2Darray);
                        $scope.setPointer(newlocation[0], newlocation[1], newlocation[2]);

                        break;
                    default: console.log("wrong letter");
                        break;
                }

            }
            chaOfDirection = [];
        }

        $scope.message = "AB-Robot-99k";
        $scope.currRow ;
        $scope.currCol ;
        $scope.currDir = "";
        $scope.messageError = "GitHub Viewer";
    };
    app.controller("MainController", MainController);
}());