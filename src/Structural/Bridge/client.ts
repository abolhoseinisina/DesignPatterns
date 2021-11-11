import { Abstraction, ImplemenetationA, ImplemenetationB } from "./Bridge";

const values = ['a', 'b', 'c', 'd'];

let refinedAbstractionA = new Abstraction(new ImplemenetationA());
refinedAbstractionA.method(values);

let refinedAbstractionB = new Abstraction(new ImplemenetationB());
refinedAbstractionB.method(values);