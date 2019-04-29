import { Unit } from './Unit';
import { random } from "../helper/helper";

export class Vehicle extends Unit {
    constructor(operators, recharge, health) {
        super();
        this.operators = operators; // Soldier [0...3];
        // this.setRecharge(recharge);
        this.recharge = recharge;
        this.health = health;
        
    }

    isAlive() {
        // console.log("this.health: ", this.health)
        // if(this.health > 0 && this.operators.length > 0) {
        //     let newOperators = this.operators.filter((item) => item.isAlive())
        //     this.operators = newOperators;
        //     return newOperators;

        // } else {
        //     return false;
        // }

        return this.health > 0;
        
    }

    attackSuccess() {
        let sum = 1;
        this.operators.map((item) => {
            sum = sum * item.attackSuccess();
        });
        let geometricAverage = Math.pow(sum, 1 / this.operators.length);
        geometricAverage = Math.round(geometricAverage * 100) / 100;
        let vehicleAttackSuccess = 0.5 * (1 + this.health / 100) * geometricAverage;
        return vehicleAttackSuccess;
    }

    makeDamage() { 
        let sum = 0;
        this.operators.map((item) => {
            sum = sum + item.experience / 100;
        })
        let vehicleDamage = 0.1 + sum;
        vehicleDamage = Math.round(vehicleDamage * 100) / 100;
        return vehicleDamage;
    }

    isRecharge() {
        let dateNow = Date.now()
        console.log("vehicle isRecharge: ", dateNow);
        return true;
    }

    startRecharge() {
        // console.log("vehicle startRecharge:", this.recharge);
    }


    setRecharge(value) {
        
        if(value < 1000) {
            this.recharge = 1000;
        } else {
            this.recharge = value;
        }
    }

    increaseExperienceVehicle() {
        this.operators.map((item) => {
            item.experience = item.experience < 50 ? ++item.experience : item.experience;
        });
    }

    getTotalHealth() {
        let vehicleTotalHealth = 0;
        let operatorsHealthSum = 0;
        this.operators.map((item) => {
            operatorsHealthSum += item.health;
        })
        vehicleTotalHealth = (operatorsHealthSum + this.health) / (this.operators.length + 1);
        return vehicleTotalHealth;
    }

    damageReceive(value) {
        let damage = Math.round(value * 100) / 100; 
        let vehicleDamage = damage * 0.6;
        let randOperatorDamage = damage * 0.2;
        let operatorIndex = random(0, this.operators.length - 1);
        let leftDamage = (damage - vehicleDamage - randOperatorDamage) / (this.operators.length - 1);

        this.health = this.health - vehicleDamage;
        this.health = Math.round(this.health * 100) / 100; 
        this.operators[operatorIndex].damageReceive(randOperatorDamage);
        this.operators.map((item, i) => {
            if(i != operatorIndex) {
                item.damageReceive(leftDamage);
            } 
        })
        // console.log("this.health: ", this.health);
    }

}