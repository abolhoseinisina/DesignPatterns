"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observer_1 = require("./Observer");
const subject = new Observer_1.Subject();
let observer1 = new Observer_1.Observer(subject);
let observer2 = new Observer_1.Observer(subject);
subject.notify(['this', 'is', 'a', 'test', 'args']);
