import { BaseUnit } from "./BaseUnit";

export class Unit extends BaseUnit {

    constructor(health, recharge) {
        super();
        // this.setHealth(health);
        // this.setRecharge(recharge);
        this.health = health;
        this.recharge = recharge;
    }

    makeDamage() { 
        // number
    }
    attackSuccess() { 
        // number
    }
    damageReceive() { 
        // number
    }

    isAlive() {
        return this.health > 0;
    }
    // setRecharge(value) {
    //     if(value < 100) {
    //         this.recharge = 102;
    //     } else if(value > 2000) {
    //         this.recharge = 2000;
    //     } else {
    //         this.recharge = value;
    //     }
    // }
    isRecharged() {
        // boolean
    }
    startRecharge() {

    }
    timeRecharge() {

    }
    getHealth() {
        return this.health;
    }
    setHealth(value) {
        this.health = value;
    }
    getPower() {
        
    }

}