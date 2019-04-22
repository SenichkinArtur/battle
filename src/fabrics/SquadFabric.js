import { Squad } from "../models/Squad";
import { SoldierFabric } from "../fabrics/SoldierFabric";
import { VehicleFabric } from "../fabrics/VehicleFabric";

// let instance = null;

export class SquadFabric {
    // constructor() {
        // if(instance) {
        //     this.instance = instance;
        // } else {
        //     instance = this;
        // }
    // }

    static getInstance() {
        return new SquadFabric();
    }
    createSquad(data) {
        // console.log(data);
        if(data.type == "soldiers") {
            let soldierFabricInst = SoldierFabric.getInstance();
            let soldiers = data.units.map((item) => {
                return soldierFabricInst.createSoldier(item);
            })
            return new Squad(soldiers, data.type);
        } else if(data.type == "vehicles") {
            let VehicleFabricInst = VehicleFabric.getInstance();
            let vehicles = data.units.map((item) => {
                return VehicleFabricInst.createVehicle(item);
            })
            return new Squad(vehicles, data.type);
        }
        // return new Squad(data.units, data.type);
    }
    createSquads(arr) {
        return arr.map((item) => {
            return this.createSquad(item);
        })
    }

}