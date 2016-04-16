var app=angular.module('main',[]);


app.controller('cntrl',function($scope){

$scope.clickFunc=function(){
    alert("Hello "+$scope.user.firstName+" "+$scope.user.lastName+" your user name is "+$scope.user.userName);


  };


});
