"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Games_1 = require("./Games");
const Singleton_1 = require("./Singleton");
let instance1 = new Singleton_1.Singleton("instance 1");
let instance2 = new Singleton_1.Singleton("instance 2");
console.log("Instances are the same: " + (instance1 === instance2));
const game1 = new Games_1.Game1();
game1.AddWinner(3, "Nima");
const game2 = new Games_1.Game1();
game2.AddWinner(1, "Hashem");
const game3 = new Games_1.Game1();
game3.AddWinner(2, "Sina");
game1.leaderboard.print();
game2.leaderboard.print();
game3.leaderboard.print();
console.log(`All the leaderboards are pointing to the same instance.`);
