/**
 * Created by davidspina on 5/24/14.
 */
var angular4App = angular.module('angular4App', []);


angular4App.config(function($routeProvider)
{
    $routeProvider
        .when('/', {
            controller: 'EmployeeController',
            templateUrl: 'partial/View1.html'
        })
        .when('/partial2', {
            controller: 'EmployeeController',
            templateUrl: 'partial/View2.html'
        })
        .otherwise({redirectTo: '/'});

});

angular4App.controller('EmployeeController', function($scope){

    $scope.employees = [
        {employeeId: 1, lastName: 'Spina', firstName:'David'},
        {employeeId: 2, lastName: 'Hornstein', firstName:'Lee'},
        {employeeId: 3, lastName: 'Ferraro', firstName:'Raymond'}

    ];




});