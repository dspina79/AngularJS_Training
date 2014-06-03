/**
 * Created by davidspina on 5/29/14.
 */
var angular6Mod = angular.module('angular6Mod', []);


angular6Mod.controller('DataController', function($scope, $http) {


        $scope.contacts = [];
        try {
            $http.get('http://209.123.243.156/DataTestingApi/api/contacts').then(function(result) {

                    $scope.contacts = result.data;

                });

        }
    catch(e){
        alert('Exception: ' + e);
    }



});