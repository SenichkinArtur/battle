import { Soldier } from "../models/Soldier";

// let instance = null;

export class SoldierFabric {
    constructor() {
        // if(instance) {
        //     this.instance = instance;
        // } else {
        //     instance = this;
        // }
    }
    static getInstance() {
        return new SoldierFabric();
    }
    createSoldier(data) {
        return new Soldier(data.health, data.recharge);
    }
    createSoldiers(arr) {
        return arr.map((item) => {
            return this.createSoldier(item);
        })
    }

}