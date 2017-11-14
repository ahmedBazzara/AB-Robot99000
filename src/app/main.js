(function () {
    var app = angular.module("Robot99000", []);
    
    var MainController = function ($scope) {
        var chaOfDirection=[];
        $scope.directionTable = [
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