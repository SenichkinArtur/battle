import { Army } from "../models/Army";
import { SquadFabric } from "../fabrics/SquadFabric";
import { StrategyFabric } from "../fabrics/StrategyFabric";

// let instance = null;

export class ArmyFabric {
    // constructor() {
    //     if(instance) {
    //         this.instance = instance;
    //     } else {
    //         instance = this;
    //     }
    // }
    static getInstance() {
        return new ArmyFabric();
    }
    createArmy(data) {
        let squadFabricInst = SquadFabric.getInstance();
        let squads = data.squads.map((item) => {
            return squadFabricInst.createSquad(item);
        })

        // console.log("strategy: ", data.strategy);
        return new Army(squads, data.strategy, data.name);
    }
    createArmys(data) {
        return data.map((item) => {
            return this.createArmy(item);
        })
    }

}