import { MyClass, CloneType } from "./Prototype";

let object = new MyClass("test class", [1,2,3,4]);
let clonedObject = object.clone(CloneType.deep);

clonedObject.array[0] = 100;

console.log(object.array);
console.log(clonedObject.array);
