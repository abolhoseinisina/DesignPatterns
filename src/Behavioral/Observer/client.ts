import { Subject, Observer } from "./Observer";

const subject = new Subject();

let observer1 = new Observer(subject);
let observer2 = new Observer(subject);

subject.notify(['this','is','a','test','args']);