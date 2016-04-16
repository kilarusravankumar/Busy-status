var app=angular.module('main',[]);
var user={ };

app.controller('cntrl',function($scope){
  // $scope.user={fname,lname,usern,pwd}
  // user=$scope.user;
  alert("hello");
$scope.clickFunc=function(){
    alert("Hello "+$scope.fname+" "+$scope.lname+" your user name is "+$scope.usern);
  };

});
