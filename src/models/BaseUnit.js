export class BaseUnit {

    makeDamage() { 
        throw new Error("Должен быть декларирован");
    }
    isAlive() {
        throw new Error("Должен быть декларирован");
    }
    attackSuccess() { 
        throw new Error("Должен быть декларирован");
    }
    damageReceive() { 
        throw new Error("Должен быть декларирован");
    }
    getPower() {
        throw new Error("Должен быть декларирован");
    }
}