export class Leaderboard {
    static instance: Leaderboard;
    #table: { [id: number]: string } = {};

    constructor() {
        if (Leaderboard.instance) {
            return Leaderboard.instance;
        }

        Leaderboard.instance = this;
    }

    AddWinner(position: number, name: string): void {
        this.#table[position] = name;
    }

    print(): void {
        console.log("-----------Leaderbord-----------");
        for(let key in this.#table){
            console.log(`|\t${key}\t|\t${this.#table[key]}\t|`);
        }
    }
}