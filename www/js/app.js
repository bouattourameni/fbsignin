angular.module('ionicApp', ['ionic','ngCordova', 'ngCordovaOauth','ngMaterial'])

.run(function ($ionicPlatform, $rootScope, $cordovaOauth) {
     $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar          above the keyboard
    // for form inputs)
     console.log('run in')
     
     if(window.localStorage.getItem("id") == undefined)  {
      console.log('if structure')
             $cordovaOauth.facebook("838665296203217", ["email"]).then(function(result) {
         
           window.localStorage.setItem("id", result.access_token);
           console.log(result);
           }, function(error) {
           alert('Facebook login failed: ' + error);
        });

         
  }
}); 

})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('list', {
      url: '/list',
      templateUrl: 'template/list.html',
      controller: 'ListController'
    })
    $urlRouterProvider.otherwise('/list');
})
.controller('ListController', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
      console.log('hqhq');
    $http.get('js/event.json').success(function(data) {
      console.log('sucess read json');
      $scope.events = data.events;
      $scope.doRefresh =function() {
      $http.get('js/event.json').success(function(data) {
          $scope.events = data.events;
          $scope.$broadcast('scroll.refreshComplete'); 
        });
      }
    });
}]);


