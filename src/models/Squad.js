import { BaseUnit } from "./BaseUnit";
import { getAttackSuccess } from "../helper/helper";

export class Squad  extends BaseUnit {
    constructor(units, type) {
        super();
        this.units = units; // units
        this.type = type;
    }

    isAlive() {
        if(this.units.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    attackSuccess() {
        let sum = 1;
        this.units.map((item) => {
            sum = sum * item.attackSuccess();
            let geometricAverage = Math.pow(sum, 1 / this.units.length);
            geometricAverage = Math.round(geometricAverage * 100) / 100;
            return geometricAverage;
        });
    }

    makeDamage() {
        let totalDamage = 0;
        this.units.map((item) => {
            if(this.type == "soldiers") {
                totalDamage = totalDamage + item.makeDamage();
            } else if(this.type == "vehicles") {
                totalDamage = totalDamage + item.makeDamage();
            }
        });
        totalDamage = Math.round(totalDamage * 100) / 100;
        this.increaseExperienceSquad();
        console.log(this.isRecharge());
        return totalDamage;
    }

    isRecharge() {
        this.units.map((item) => {
            if(this.type == "soldiers") {
                item.isRecharge();
            } else if(this.type == "vehicles") {
                // console.log("return: ", item.isRecharge());
                item.isRecharge();
            }
        })
    }

    increaseExperienceSquad() {
        this.units.map((item) => {
            if(this.type == "soldiers") {
                item.experience = item.experience < 50 ? ++item.experience : item.experience;
            } else if(this.type == "vehicles") {
                item.increaseExperienceVehicle();
            }
        })
    }

    damageReceive(value) {
        let damage = value / this.units.length;
        this.units.map((item) => {
            if(this.type == "soldiers") {
                item.damageReceive(damage);
            } else if(this.type == "vehicles") {
                item.damageReceive(damage);
            }
        })
    }

}