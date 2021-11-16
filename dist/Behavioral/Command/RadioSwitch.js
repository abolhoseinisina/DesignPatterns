"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Switch_commands, _Switch_history, _TurnOn_radio, _TurnOff_radio, _TurnDown_radio, _TurnUp_radio;
Object.defineProperty(exports, "__esModule", { value: true });
exports.switch1 = void 0;
class Switch {
    constructor() {
        _Switch_commands.set(this, void 0);
        _Switch_history.set(this, void 0);
        __classPrivateFieldSet(this, _Switch_commands, {}, "f");
        __classPrivateFieldSet(this, _Switch_history, [], "f");
    }
    register(commandName, command) {
        __classPrivateFieldGet(this, _Switch_commands, "f")[commandName] = command;
    }
    swithCommand(commandName) {
        if (commandName in __classPrivateFieldGet(this, _Switch_commands, "f")) {
            __classPrivateFieldGet(this, _Switch_commands, "f")[commandName].switch();
            __classPrivateFieldGet(this, _Switch_history, "f").push([Date.now(), commandName]);
            if (Switch.position != -1) {
                __classPrivateFieldSet(this, _Switch_history, __classPrivateFieldGet(this, _Switch_history, "f").slice(0, __classPrivateFieldGet(this, _Switch_history, "f").length + Switch.position), "f");
                Switch.position = -1;
            }
        }
        else {
            console.log("command not available.");
        }
    }
    showHistory() {
        for (let i = 0; i < __classPrivateFieldGet(this, _Switch_history, "f").length; i++) {
            let item = __classPrivateFieldGet(this, _Switch_history, "f")[i];
            console.log(`${item[0]}: ${item[1]}`);
        }
    }
    undo() {
        if (Switch.position * (-1) > __classPrivateFieldGet(this, _Switch_history, "f").length) {
            return;
        }
        let undoCommandName = __classPrivateFieldGet(this, _Switch_history, "f")[__classPrivateFieldGet(this, _Switch_history, "f").length + Switch.position][1];
        __classPrivateFieldGet(this, _Switch_commands, "f")[undoCommandName].switch();
        Switch.position--;
    }
    redo() {
        if (Switch.position >= -2) {
            return;
        }
        let redoCommandName = __classPrivateFieldGet(this, _Switch_history, "f")[__classPrivateFieldGet(this, _Switch_history, "f").length + Switch.position + 2][1];
        __classPrivateFieldGet(this, _Switch_commands, "f")[redoCommandName].switch();
        Switch.position++;
    }
}
_Switch_commands = new WeakMap(), _Switch_history = new WeakMap();
Switch.position = -1;
class TurnOn {
    constructor(radio) {
        _TurnOn_radio.set(this, void 0);
        __classPrivateFieldSet(this, _TurnOn_radio, radio, "f");
    }
    switch() {
        __classPrivateFieldGet(this, _TurnOn_radio, "f").TurnOn();
    }
}
_TurnOn_radio = new WeakMap();
class TurnOff {
    constructor(radio) {
        _TurnOff_radio.set(this, void 0);
        __classPrivateFieldSet(this, _TurnOff_radio, radio, "f");
    }
    switch() {
        __classPrivateFieldGet(this, _TurnOff_radio, "f").TurnOff();
    }
}
_TurnOff_radio = new WeakMap();
class TurnDown {
    constructor(radio) {
        _TurnDown_radio.set(this, void 0);
        __classPrivateFieldSet(this, _TurnDown_radio, radio, "f");
    }
    switch() {
        __classPrivateFieldGet(this, _TurnDown_radio, "f").TurnDown();
    }
}
_TurnDown_radio = new WeakMap();
class TurnUp {
    constructor(radio) {
        _TurnUp_radio.set(this, void 0);
        __classPrivateFieldSet(this, _TurnUp_radio, radio, "f");
    }
    switch() {
        __classPrivateFieldGet(this, _TurnUp_radio, "f").TurnUp();
    }
}
_TurnUp_radio = new WeakMap();
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
exports.switch1 = new Switch();
exports.switch1.register("on", turnOn);
exports.switch1.register("off", turnOff);
exports.switch1.register("up", turnUp);
exports.switch1.register("down", turnDown);
