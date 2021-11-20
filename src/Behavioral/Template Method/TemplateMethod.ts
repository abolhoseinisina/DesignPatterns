abstract class AbstractClass {
    stepOne(): void{

    }
    
    abstract stepTwo(): void;
    
    stepThree(): void {
        console.log('step three from abstract class');
    }
    
    templateMethod() {
        this.stepOne();
        this.stepTwo();
        this.stepThree();
    }
}

export class ConcreteClassA extends AbstractClass {
    stepTwo(): void {
        console.log('step two from concrete class A');
    }
}

export class ConcreteClassB extends AbstractClass {
    stepOne(){
        console.log('step one from concrete class B');
    }

    stepTwo(): void {
        console.log('step two from concrete class B');
    }

    stepThree(){
        console.log('step three from concrete class B');
    }
}