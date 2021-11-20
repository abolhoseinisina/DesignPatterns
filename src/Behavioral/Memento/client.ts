import { CareTaker, Originator } from "./Memento";

let originator = new Originator();
let careTaker = new CareTaker(originator);

originator.state = 'state 1';
originator.state = 'state 2';
careTaker.create();

originator.state = 'state 3';
careTaker.create();

originator.state = 'state 4';
console.log(originator.state);

careTaker.restore(0);
console.log(originator.state);

careTaker.restore(1);
console.log(originator.state);