/**
 * Created by davidspina on 6/3/14.
 */
var angular7mod = angular.module('angular7mod', []);

angular7mod.controller('PetController', function($scope) {


    $scope.pets = [

        {name:'Fedora', animalType:'cat'},
        {name:'Abby', animalType:'cat'},
        {name:'Tavish', animalType:'cat'},
        {name:'Maverick', animalType:'cat'},
        {name:'Louise', animalType:'cat'},
        {name:'Monkey', animalType:'kitten'}
    ];

    $scope.addPet = function(){
      var newPet = {name:$scope.newPet.name, animalType:$scope.newPet.animalType};
        $scope.pets.push(newPet);
    };


});

var headerTextDirective = function() {

    return {
        restrict: 'E',
        replace: 'true',
        template: '<div class="headerText">Please review the listing of items from the controller below.</div>'
    };

};

angular7mod.directive('headerText', headerTextDirective);

angular7mod.directive('instructionText', function(){

    return {
        restrict: 'E',
        replace: 'true',
        template: '<div class="instrText">Add a new record below.</div>'

    };

});