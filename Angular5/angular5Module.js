/**
 * Created by davidspina on 5/27/14.
 */

var angular5Mod = angular.module('angular5Mod',[]);


var petFactory = function(){

    var pets = [
        {name: 'Monkey', type:'Kitten'},
        {name: 'Louise', type:'Cat'},
        {name: 'Fedora', type:'Cat'}

    ];

    var factory = {};

    factory.getPets = function(){

        return pets;

    };

    return factory;
};



angular5Mod.factory('petFactory', petFactory);

angular5Mod.controller('DataController', function($scope, petFactory) {

    $scope.people = [
        {lastName: 'Spina', firstName:'David'},
        {lastName: 'Spina', firstName: 'Kate'},
        {lastName: 'Spina', firstName:'Owen'}
    ];

    $scope.pets = petFactory.getPets();

    $scope.addPerson = function(){
      var newPerson = {lastName: $scope.newPerson.lastName, firstName: $scope.newPerson.firstName};
        $scope.people.push(newPerson);

        $scope.newPerson.lastName = '';
        $scope.newPerson.firstName = '';
    };

});