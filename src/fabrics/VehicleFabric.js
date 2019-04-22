import { Vehicle } from "../models/Vehicle";
import { SoldierFabric } from "../fabrics/SoldierFabric";

// let instance = null;

export class VehicleFabric {
    constructor() {
        // if(instance) {
        //     this.instance = instance;
        // } else {
        //     instance = this;
        // }
    }
    static getInstance() {
        return new VehicleFabric();
    }
    createVehicle(data) {
        // console.log(data);
        let soldierFabricInst = SoldierFabric.getInstance();
        let soldiers = data.operators.map((item) => {
            return soldierFabricInst.createSoldier(item);
        })
        return new Vehicle(soldiers, data.recharge, data.health);
    }
    createVehicles(arr) {
        return arr.map((item) => {
            return this.createVehicle(item);
        })
    }

}