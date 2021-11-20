"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("./Command");
const RadioSwitch_1 = require("./RadioSwitch");
var reciever = new Command_1.Reciever();
var invoker = new Command_1.Invoker();
var command1 = new Command_1.Command1(reciever);
var command2 = new Command_1.Command2(reciever);
invoker.register("a", command1);
invoker.register("b", command2);
invoker.execute("a");
invoker.execute("b");
invoker.execute("c");
RadioSwitch_1.switch1.swithCommand("on");
RadioSwitch_1.switch1.swithCommand("up");
RadioSwitch_1.switch1.swithCommand("down");
RadioSwitch_1.switch1.swithCommand("down");
RadioSwitch_1.switch1.swithCommand("down");
RadioSwitch_1.switch1.swithCommand("up");
RadioSwitch_1.switch1.swithCommand("down");
RadioSwitch_1.switch1.swithCommand("off");
RadioSwitch_1.switch1.showHistory();
RadioSwitch_1.switch1.undo();
RadioSwitch_1.switch1.redo();