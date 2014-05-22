/**
 * Created by davidspina on 5/22/14.
 */
function CustomerController($scope)
{
    $scope.customers = [

        {lastName:'Spina', firstName:'David', dateOfBirth:'10/04/1979', gender:'Male'},
        {lastName:'Austin-Spina', firstName:'Kathryn', dateOfBirth:'09/12/1979', gender:'Female'},
        {lastName:'Spina', firstName:'Owen', dateOfBirth:'06/18/2012', gender:'Male'}

    ];
}