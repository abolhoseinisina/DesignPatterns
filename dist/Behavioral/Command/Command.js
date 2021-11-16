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
var _Invoker_commands, _Command1_reciever, _Command2_reciever;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command2 = exports.Command1 = exports.Reciever = exports.Invoker = void 0;
class Invoker {
    constructor() {
        _Invoker_commands.set(this, void 0);
        __classPrivateFieldSet(this, _Invoker_commands, {}, "f");
    }
    register(commandName, command) {
        __classPrivateFieldGet(this, _Invoker_commands, "f")[commandName] = command;
    }
    execute(commandName) {
        if (commandName in __classPrivateFieldGet(this, _Invoker_commands, "f")) {
            __classPrivateFieldGet(this, _Invoker_commands, "f")[commandName].execute();
        }
        else {
            console.log("command not registered.");
        }
    }
}
exports.Invoker = Invoker;
_Invoker_commands = new WeakMap();
class Reciever {
    command1() {
        console.log("executing command 1");
    }
    command2() {
        console.log("executing command 2");
    }
}
exports.Reciever = Reciever;
class Command1 {
    constructor(reciever) {
        _Command1_reciever.set(this, void 0);
        __classPrivateFieldSet(this, _Command1_reciever, reciever, "f");
    }
    execute() {
        __classPrivateFieldGet(this, _Command1_reciever, "f").command1();
    }
}
exports.Command1 = Command1;
_Command1_reciever = new WeakMap();
class Command2 {
    constructor(reciever) {
        _Command2_reciever.set(this, void 0);
        __classPrivateFieldSet(this, _Command2_reciever, reciever, "f");
    }
    execute() {
        __classPrivateFieldGet(this, _Command2_reciever, "f").command2();
    }
}
exports.Command2 = Command2;
_Command2_reciever = new WeakMap();
