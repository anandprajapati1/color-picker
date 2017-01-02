var app = angular.module('myApp', []);

app.controller('colorPickerController', ['$scope',function($scope) {
    $scope.colorMinRange= 0;
    $scope.colorMaxRange= 255;
    
    $scope.R=120,$scope.G=120,$scope.B=120;
    $scope.resultColor='rgb(0,0,0)';

    $scope.colorchange=function () {  
        $scope.resultColor='rgb('+$scope.R+','+$scope.G+','+$scope.B+')'
    }
    $scope.colorchange();
}]);