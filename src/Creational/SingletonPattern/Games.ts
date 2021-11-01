import IGame from "./IGame";
import { Leaderboard } from "./Leaderboard";

export class Game1 implements IGame {
    leaderboard: Leaderboard;

    constructor() {
        this.leaderboard = new Leaderboard();
    }

    AddWinner(position: number, name: string): void {
        this.leaderboard.AddWinner(position, name);
    }
}

export class Game2 implements IGame {
    leaderboard: Leaderboard;

    constructor() {
        this.leaderboard = new Leaderboard();
    }

    AddWinner(position: number, name: string): void {
        this.leaderboard.AddWinner(position, name);
    }
}

export class Game3 implements IGame {
    leaderboard: Leaderboard;

    constructor() {
        this.leaderboard = new Leaderboard();
    }

    AddWinner(position: number, name: string): void {
        this.leaderboard.AddWinner(position, name);
    }
}