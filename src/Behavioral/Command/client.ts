import { Reciever, Invoker, Command1, Command2 } from "./Command";
import { switch1 } from "./RadioSwitch";

var reciever = new Reciever();

var invoker = new Invoker();
var command1 = new Command1(reciever);
var command2 = new Command2(reciever);

invoker.register("a", command1);
invoker.register("b", command2);

invoker.execute("a");
invoker.execute("b");
invoker.execute("c");

switch1.swithCommand("on");
switch1.swithCommand("up");
switch1.swithCommand("down");
switch1.swithCommand("down");
switch1.swithCommand("down");
switch1.swithCommand("up");
switch1.swithCommand("down");
switch1.swithCommand("off");
switch1.showHistory();
switch1.undo();
switch1.redo();