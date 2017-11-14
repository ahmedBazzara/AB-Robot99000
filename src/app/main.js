(function () {
    var app = angular.module("Robot99000", []);

    var arrays = Array.matrix = function (numrows, numcols, initial) {
        var arr = [];
        for (var i = 0; i < numrows; ++i) {
            var columns = [];
            for (var j = 0; j < numcols; ++j) {
                columns[j] = initial;
            }
            arr[i] = columns;
        }
        
        return arr;
        
    }
    
    var MainController = function ($scope) {
        $scope.createMatrix = function(rows,cols,initial){
            var my2Darray = Array.matrix(rows,cols,initial);
            console.log(my2Darray);
        }
        var chaOfDirection=[];
        var directionTable = [
            { name: "N", value: 0 },
            { name: "E", value: 1 },
            { name: "S", value: 2 },
            { name: "W", value: 3 }];
        var breakTheorder = function(directionString){
            var dirToUpp = directionString.toUpperCase();
            for (var i = 0; i < dirToUpp.length; i++) {
                var char = dirToUpp.charAt(i);
                chaOfDirection.push(char);
            }
            /* console.log(chaOfDirection); */
            return chaOfDirection;
        }
        var getCurrRow = function () {
            var currRow;
            for (var i = 0; i < my2Darray.length; ++i) {
                for (var j = 0; j < my2Darray[i].length; ++j) {
                    if (my2Darray[i][j] == "0") {
    
                    }
                    else {
                        currRow = i;
                    }
                }
            }
            console.log("curr row" + currRow);
            return currRow;
        }
        var getCurrCol = function () {
            var currCol;
            for (var i = 0; i < my2Darray.length; ++i) {
                for (var j = 0; j < my2Darray[i].length; ++j) {
                    if (my2Darray[i][j] == "0") {
                    }
                    else {
                        currCol = j;
                    }
                }
            }
            console.log("curr col" + currCol);
            return currCol;
        }
        var getCurrDirection = function () {
            var currDir;
            for (var i = 0; i < my2Darray.length; ++i) {
                for (var j = 0; j < my2Darray[i].length; ++j) {
                    if (my2Darray[i][j] == "0") {
                    }
                    else {
                        currDir = my2Darray[i][j];
                    }
                }
            }
            console.log("curr dire" + currDir);
            return currDir;
        }
        var rotate = {
            goLeft: function () {
                var currDir = getCurrDirection();
                var currRow = getCurrRow();
                var currCol = getCurrCol();
                var newDirVal;
                var newDirNam;
                for (var i = 0; i < directionTable.length; i++) {
                    if (currDir == directionTable[i].name) {
                        if (directionTable[i].value > 0) {
                            newDirVal = directionTable[i].value - 1;
    
                            for (var j = 0; j < directionTable.length; j++) {
                                if (newDirVal == directionTable[j].value) {
                                    newDirNam = directionTable[j].name;
                                    console.log(newDirNam);
                                }
                            }
                            /*  console.log(newDirVal);
                             console.log(newDirNam); */
                            setPointer(currRow, currCol, newDirNam);
                            console.log(my2Darray);
    
                            return newDirVal, newDirNam;
    
                        }
                        else if (directionTable[i].value == 0) {
                            newDirVal = 3;
                            newDirNam = "W";
                            /* console.log(newDirVal);
                            console.log(newDirNam); */
                            setPointer(currRow, currCol, newDirNam);
                            console.log(my2Darray);
    
                            return newDirVal, newDirNam;
                        }
                    }
    
                }
            },
    
            goRight: function () {
                var currDir = getCurrDirection();
                var currRow = getCurrRow();
                var currCol = getCurrCol();
                var newDirVal;
                var newDirNam;
                for (var i = 0; i < directionTable.length; i++) {
                    if (currDir == directionTable[i].name) {
                        if (directionTable[i].value < 3) {
                            newDirVal = directionTable[i].value + 1;
    
                            for (var j = 0; j < directionTable.length; j++) {
                                if (newDirVal == directionTable[j].value) {
                                    newDirNam = directionTable[j].name;
                                    console.log(newDirNam);
                                }
                            }
                            console.log(newDirVal);
                            console.log(newDirNam);
                            setPointer(currRow, currCol, newDirNam);
                            return newDirVal, newDirNam;
    
                        }
                        else if (directionTable[i].value == 3) {
                            newDirVal = 0;
                            newDirNam = "N";
                            console.log(newDirVal);
                            console.log(newDirNam);
                            setPointer(currRow, currCol, newDirNam);
                            return newDirVal, newDirNam;
                        }
                    }
    
                }
            }
        }
        $scope.checkCase = function(directionString){
            breakTheorder(directionString);
            for (i = 0; i < chaOfDirection.length; i++) {
                
                switch (chaOfDirection[i]) {
                    case "R": console.log("Right");
/*                         rotate.goRight();
 */                        break;

                    case "L": console.log("Left");
/*                         rotate.goLeft();
 */                        break;

                    case "F": console.log("Forward");
/*                         goForward();
 */                        break;
                    default:console.log("wrong letter");
                        break;
                }
            }
        }
        $scope.message = "GitHub Viewer";
        
    };
    app.controller("MainController", ["$scope", "$http", MainController]);
    
}());