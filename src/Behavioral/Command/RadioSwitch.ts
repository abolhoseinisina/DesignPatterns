interface ISwitch {
    switch(): void,
}

class Switch {
    static position: number = -1;
    
    #commands: { [id: string]: ISwitch };
    #history: [number, string][]

    constructor() {
        this.#commands = {}
        this.#history = [];
    }

    register(commandName: string, command: ISwitch): void {
        this.#commands[commandName] = command;
    }

    swithCommand(commandName: string): void {
        if (commandName in this.#commands) {
            this.#commands[commandName].switch();
            this.#history.push([Date.now(), commandName]);
            if(Switch.position != -1){
                this.#history = this.#history.slice(
                    0,
                    this.#history.length + Switch.position
                );
                Switch.position = -1;
            }
        } else {
            console.log("command not available.");
        }
    }

    showHistory(): void {
        for(let i=0; i<this.#history.length; i++){
            let item = this.#history[i];
            console.log(`${item[0]}: ${item[1]}`);
        }
    }

    undo(): void {
        if(Switch.position * (-1) > this.#history.length){
            return;    
        }

        let undoCommandName = this.#history[this.#history.length + Switch.position][1];
        this.#commands[undoCommandName].switch();
        Switch.position--;
    }

    redo(): void {
        if(Switch.position >= -2){
            return;
        }
        
        let redoCommandName = this.#history[this.#history.length + Switch.position + 2][1];
        this.#commands[redoCommandName].switch();
        Switch.position++;
    }
}

class TurnOn implements ISwitch {
    #radio: Radio;

    constructor(radio: Radio) {
        this.#radio = radio;
    }

    switch(): void {
        this.#radio.TurnOn();
    }
}

class TurnOff implements ISwitch {
    #radio: Radio;

    constructor(radio: Radio) {
        this.#radio = radio;
    }

    switch(): void {
        this.#radio.TurnOff();
    }
}

class TurnDown implements ISwitch {
    #radio: Radio;

    constructor(radio: Radio) {
        this.#radio = radio;
    }

    switch(): void {
        this.#radio.TurnDown();
    }
}

class TurnUp implements ISwitch {
    #radio: Radio;

    constructor(radio: Radio) {
        this.#radio = radio;
    }

    switch(): void {
        this.#radio.TurnUp();
    }
}

class Radio {
    TurnOn() {
        console.log("Radio is ON!");
    }

    TurnUp() {
        console.log("Turning up ...");
    }

    TurnDown() {
        console.log("Turning down ...");
    }

    TurnOff() {
        console.log("Bye :)");
    }
}

let radio = new Radio();

let turnOn = new TurnOn(radio);
let turnOff = new TurnOff(radio);
let turnUp = new TurnUp(radio);
let turnDown = new TurnDown(radio);

export let switch1 = new Switch();
switch1.register("on", turnOn);
switch1.register("off", turnOff);
switch1.register("up", turnUp);
switch1.register("down", turnDown);