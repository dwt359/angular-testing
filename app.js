gameApp = angular.module('gameApp', ['ngRoute']);

gameApp.controller('GameListController', function($scope) {
    $scope.games = [
        {gameId: 1, name: "Legend of Zelda: Ocarina of Time", system: "N64", desc: "Link saves zelda and stuff"},
        {gameId: 2, name: "Portal", system: "PC", desc: "Shoot some holes in walls to solve puzzles"},
        {gameId: 3, name: "Gladius", system: "Gamecube", desc: "Like fire emblem but weirder and awesome"},
        {gameId: 4, name: "Pikmin", system: "Gamecube", desc: "Command a bunch of carrot-shaped weirdos as a tiny spaceman"}
    ];
});
gameApp.controller('GameViewController', function($scope, $routeParams){
    $scope.gameId = $routeParams.gameId;
    $scope.games = [
        {gameId: 1, name: "Legend of Zelda: Ocarina of Time", system: "N64", desc: "Link saves zelda and stuff"},
        {gameId: 2, name: "Portal", system: "PC", desc: "Shoot some holes in walls to solve puzzles"},
        {gameId: 3, name: "Gladius", system: "Gamecube", desc: "Like fire emblem but weirder and awesome"},
        {gameId: 4, name: "Pikmin", system: "Gamecube", desc: "Command a bunch of carrot-shaped weirdos as a tiny spaceman"}
    ];
    $scope.game = null;
    angular.forEach($scope.games, function(scopeGame){
        if(scopeGame.gameId == $scope.gameId){
            $scope.game = scopeGame;
        }
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



