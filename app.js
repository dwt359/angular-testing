angular.module('gameApp', [])
    .controller('GameListController', function() {
        var gameList = this;
        gameList.games = [
            {name: "Legend of Zelda: Ocarina of Time", system: "N64"},
            {name: "Portal", system: "PC"},
            {name: "Gladius", system: "Gamecube"},
            {name: "Pikmin", system: "Gamecube"}
        ];

    });
