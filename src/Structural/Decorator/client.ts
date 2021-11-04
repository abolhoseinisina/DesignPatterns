import { Value, Add, Sub, Multiply } from "./decorator";

let A = Value(5);
let B = Value(10);
let C = Value(2);

let result = Sub(Multiply(Add(A, B), C), 2);

console.log(result.value);