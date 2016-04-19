var app=angular.module('main',['ngResource'])


app.controller('cntrl',function($scope){




  });

app.controller('signUp',['$resource','$scope',function($scope,$resource){
    var todo=$resource('/todolists');
    $scope.clickFunc=function(){
    alert("Hello "+$scope.user.firstName+" "+$scope.user.lastName+" your user name is "+$scope.user.userName);

$scope.user.$save();
  };

}])



