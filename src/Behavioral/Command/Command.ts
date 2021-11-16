interface ICommand {
    execute(): void
}

export class Invoker {
    #commands: { [id: string]: ICommand };
    
    constructor() {
        this.#commands = {};
    }
    
    register(commandName: string, command: ICommand) {
        this.#commands[commandName] = command;
    }
    
    execute(commandName: string) {
        if (commandName in this.#commands) {
            this.#commands[commandName].execute();
        } else {
            console.log("command not registered.")
        }
    }
}

export class Reciever {
    command1(){
        console.log("executing command 1");
    }
    command2(){
        console.log("executing command 2");
    }
}

export class Command1 implements ICommand {
    #reciever: Reciever;

    constructor(reciever: Reciever) {
        this.#reciever = reciever;
    }

    execute(): void {
        this.#reciever.command1();
    }
}

export class Command2 implements ICommand {
    #reciever: Reciever;

    constructor(reciever: Reciever) {
        this.#reciever = reciever;
    }

    execute(): void {
        this.#reciever.command2();
    }
}