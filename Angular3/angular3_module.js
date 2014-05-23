/**
 * Created by davidspina on 5/23/14.
 */

// second parameter is a listing of dependecies on modules
var demoApp = angular.module('demoApp', []);


demoApp.controller('SimpleController', function($scope){

    $scope.individuals = [
        {lastName: 'Spina', firstName: 'David', age:34},
        {lastName: 'Austin-Spina', firstName: 'Kate', age:34}
    ];

});