"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game3 = exports.Game2 = exports.Game1 = void 0;
const Leaderboard_1 = require("./Leaderboard");
class Game1 {
    constructor() {
        this.leaderboard = new Leaderboard_1.Leaderboard();
    }
    AddWinner(position, name) {
        this.leaderboard.AddWinner(position, name);
    }
}
exports.Game1 = Game1;
class Game2 {
    constructor() {
        this.leaderboard = new Leaderboard_1.Leaderboard();
    }
    AddWinner(position, name) {
        this.leaderboard.AddWinner(position, name);
    }
}
exports.Game2 = Game2;
class Game3 {
    constructor() {
        this.leaderboard = new Leaderboard_1.Leaderboard();
    }
    AddWinner(position, name) {
        this.leaderboard.AddWinner(position, name);
    }
}
exports.Game3 = Game3;
