export class BaseUnit {

    constructor() {
        
    }

    makeDamage() { 
        throw new Error("method must be declared");
    }
    isAlive() {
        throw new Error("method must be declared");
    }
    attackSuccess() { 
        throw new Error("method must be declared");
    }
    damageReceive() { 
        throw new Error("method must be declared");
    }
    getPower() {
        throw new Error("method must be declared");
    }
}