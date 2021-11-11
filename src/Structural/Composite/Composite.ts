import { toUnicode } from "punycode";

interface IComposite {
    referenceToParent?: IComposite,
    name: string,
    method(): void,
    detach(): void
}

export class Leaf implements IComposite {
    referenceToParent?: Composite = undefined;
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    method(): void {
        const parent = this.referenceToParent ? this.referenceToParent.name : "none";
        console.log(`<Leaf>\t\tname:${this.name}\tparent:${parent}`)
    }

    detach(): void {
        if(this.referenceToParent){
            this.referenceToParent.delete(this);
        }
    }
}

export class Composite implements IComposite {
    referenceToParent?: Composite;
    name: string;
    components: IComposite[];

    constructor(name: string){
        this.name = name;
        this.components = []
    }

    method(): void {
        const parent = this.referenceToParent ? this.referenceToParent.name : 'none';
        console.log(`<Composite>\tname:${this.name}\tParent:\t${parent}\tComponents:${this.components.length}`);
        this.components.forEach((component) => {
            component.method()
        })
    }

    detach(): void {
        if (this.referenceToParent) {
            this.referenceToParent.delete(this)
            this.referenceToParent = undefined
        }
    }
    
    attach(component: IComposite): void {
        component.detach()
        component.referenceToParent = this
        this.components.push(component)
    }

    delete(component: IComposite): void {
        const index = this.components.indexOf(component)
        if (index > -1) {
            this.components.splice(index, 1)
        }
    }
}