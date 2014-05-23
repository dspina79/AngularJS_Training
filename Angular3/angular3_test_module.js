/**
 * Created by davidspina on 5/23/14.
 */

var angular3Module = angular.module('angular3Module', []);

angular3Module.controller('PersonController', function($scope){

    $scope.people = [

        {id:1, lastName:'Spina', firstName:'Dave', title:'Director of Development'},
        {id:2, lastName:'Austin-Spina', firstName:'Kate', title:'Teacher'},
        {id:3, lastName:'Spina', firstName:'Owen', title:'Son'},
        {id:4, lastName:'Austen', firstName:'Heather', title:'Director of Operations'},
        {id:5, lastName:'Redus', firstName:'Norman', title:'Kick-ass Actor'},

    ];

});