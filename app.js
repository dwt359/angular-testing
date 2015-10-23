gameApp = angular.module('gameApp', ['ngRoute']);

gameApp.controller('GameListController', function($scope, $http) {
    $http.get('games.json').success(function(data) {
        $scope.games = data;
    });
});
gameApp.controller('GameViewController', function($scope, $routeParams, $http){
    $scope.gameId = $routeParams.gameId;
    $http.get('games.json').success(function(data) {
        $scope.games = data;
        $scope.game = null;
        angular.forEach($scope.games, function(scopeGame){
            if(scopeGame.gameId == $scope.gameId){
                $scope.game = scopeGame;
            }
        });
    });
});

gameApp.config(function($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'GameListController'
        }).
        when('/game/:gameId', {
            templateUrl: 'partials/game.html',
            controller: 'GameViewController'
        }).
        otherwise({
            redirectTo: '/home'
        });
});



