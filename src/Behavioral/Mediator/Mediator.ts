export class Mediator {
    object1: Object1;
    object2: Object2;

    constructor(){
        this.object1 = new Object1();
        this.object2 = new Object2();
    }

    object1Method(){
        this.object1.method();
    }

    object2Method(){
        this.object2.method();
    }
}

class Object1 {
    method(){
        console.log("object 1 method is invoked")
    }   
}

class Object2 {
    method(){
        console.log("object 2 method is invoked")
    }   
}