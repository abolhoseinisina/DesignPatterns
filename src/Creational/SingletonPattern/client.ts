import { Game1 } from "./Games";
import { Singleton } from "./Singleton"

let instance1 = new Singleton("instance 1");
let instance2 = new Singleton("instance 2");
console.log("Instances are the same: " + (instance1 === instance2))

const game1 = new Game1();
game1.AddWinner(3,"Nima");

const game2 = new Game1();
game2.AddWinner(1,"Hashem");

const game3 = new Game1();
game3.AddWinner(2,"Sina");

game1.leaderboard.print();
game2.leaderboard.print();
game3.leaderboard.print();
console.log(`All the leaderboards are pointing to the same instance.`)