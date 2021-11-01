export class Singleton {
    private static instance: Singleton;
    name: string;

    constructor(name: string){
        this.name = name;
    
        if(Singleton.instance){
            return Singleton.instance;
        }
    
        Singleton.instance = this;
    }
}