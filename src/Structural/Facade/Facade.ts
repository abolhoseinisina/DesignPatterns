class SubSystemA {
    method() {
        console.log("subsytem A method call.");
    }
}

class SubSystemB {
    method() {
        console.log("subsytem B method call.");
    }
}

class SubSystemC {
    method() {
        console.log("subsytem C method call.");
    }
}

export default class Facade {
    private static instance: Facade;

    private constructor() {
    }

    static GetInstance(): Facade{
        if(this.instance){
            return this.instance;
        }
        this.instance = new Facade();
        return this.instance;
    }

    SubSystemA() {
        new SubSystemA().method();
    }
    SubSystemB() {
        new SubSystemB().method();
    }
    SubSystemC() {
        new SubSystemC().method();
    }
}