/* eslint-disable no-undef */
var app = angular.module('myApp', []);

app.controller('colorPickerController', ['$scope', function ($scope) {
    $scope.colorMinRange = 0;
    $scope.colorMaxRange = 255;

    $scope.R = 255, $scope.G = 255, $scope.B = 255;
    $scope.resultColor = 'rgb(0,0,0)';

    $scope.colorchange = function () {
        $scope.resultColor = 'rgb(' + $scope.R + ',' + $scope.G + ',' + $scope.B + ')'
    }
    $scope.colorchange();
}]);