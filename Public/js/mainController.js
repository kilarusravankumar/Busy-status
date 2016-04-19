var app = angular.module('todoApp', []);

app.controller('mainController', function($scope){
  $scope.posts = [];
 emptyPost = {todo: '', text: '', created_at: ''};

  $scope.post = function(){
    $scope.newPost.created_at = Date.now();
    $scope.posts.push($scope.newPost);
    $scope.newPost = emptyPost;
  };
});

app.controller('authController',function($scope){
    $scope.user={username:'',password:''};
    $scope.errorMsg='';
    $scope.register=function(){
        $scope.errorMsg="your registered as "+ $scope.user.username;
        $scope.user={username:'',password:''};
    }
    $scope.login=function(){
        $scope.errorMsg="login request for "+$scope.user.username;
}
})
