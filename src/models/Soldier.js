import { Unit } from "./Unit";
import { getAttackSuccess } from "../helper/helper";
import { getDamage } from "../helper/helper";

export class Soldier extends Unit {
    experience = 0;
    constructor(health, recharge) {
        super();
        this.health = health;
        // this.setRecharge(recharge);
        this.recharge = recharge;
    }
    set experience(value) {
        experience = value;
    }
    get experience() {
        return experience;
    }
    isAlive() {
        // if(this.health > 0) {
        //     return true;
        // } else {
        //     return false;
        // }
        return this.health > 0;
    }
    attackSuccess() {
        return getAttackSuccess(this.health, this.experience);
    }
    makeDamage() {
        return getDamage(this.experience);
    }
    isRecharge() {
        let dateNow = Date.now()
        console.log("Soldier is recharge: ", dateNow);
        return true;
    }
    startRecharge() {
        // console.log("soldier startRecharge", this.recharge);
    }
    setHealth() {

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

    damageReceive(value) {
        this.health = this.health - value;
        this.health = Math.round(this.health * 100) / 100;
        // console.log("this.health: ", this.health);
    }

}