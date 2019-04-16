import { BaseUnit } from "./BaseUnit";

export default class Unit extends BaseUnit {

    constructor(health, recharge) {
        super();
        this.setHealth(health);
        this.setRecharge(recharge);
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
        // boolean
    }
    setRecharge(value) {
        if(value < 100) {
            this.recharge = 100;
        } else if(value > 2000) {
            this.recharge = 2000;
        } else {
            this.recharge = value;
        }
    }
    isRecharged() {
        // boolean
    }
    startRecharge() {

    }
    timeRecharge() {

    }
    getHealth() {
        return this._health;
    }
    setHealth(value) {
        this._health = value;
    }
    getPower() {
        
    }

}