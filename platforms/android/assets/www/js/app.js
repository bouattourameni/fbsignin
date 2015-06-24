angular.module('ionicApp', ['ionic','ngCordova', 'ngCordovaOauth'])
.controller('SignInCtrl', function($scope, $state, $cordovaOauth) {
  
  $scope.signIn = function(user) {

    
    $cordovaOauth.facebook("838665296203217", ["email"]).then(function(result) {
         
           window.localStorage.setItem("id", user.id);
          window.localStorage.setItem("pwd", user.pwd);
            $state.go('root.home');
        }, function(error) {
           alert('Facebook login failed: ' + error);
        });
    console.log("sucess");
  }
  $scope.isSignIn = function(user) {

  /* if((window.localStorage.getItem("id") == undefined) || (window.localStorage.getItem("pwd") == undefined)) {
            return true;
        } else {
            return false;
        }*/
        return false;
  }
});


var user = {
  id : '',
  pwd : ''
}
