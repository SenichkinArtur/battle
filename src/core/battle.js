import { ArmyFabric } from "../fabrics/ArmyFabric";
import { random } from "../helper/helper";

export class Battle {
    armies = [];
    newArmies = [];

    constructor(armies) {
        this.armies = armies;
    }

    makeArmies() {
        let armyFabricInst = ArmyFabric.getInstance();
        this.newArmies = armyFabricInst.createArmys(this.armies);
        // console.log("this.newArmies: ", this.newArmies[0].squads[0].units[0].operators[0]);
        // this.newArmies[0].squads[0].units[0].operators[0].makeDamage();
        setTimeout(() => {
            this.makeDamage(this.newArmies);
        }, 0);
       
    }

    makeDamage(armies) {
        let count = 0;
        while(count < 5) {
            // console.log(count);
            
            let target = 0;
            // target = Math.round(Math.random() * (armies.length - 1));
            target = random(0, armies.length - 1);
            if(target == count) {
                target = random(0, armies.length - 1);
            }
            // console.log("target: ", target);
            let attackingSquadIndex = Math.round(Math.random() * (armies[count].squads.length - 1));
            // let attackingSquadIndex = random(0, armies[count].squads.length - 1);
            let defSquadIndex = Math.round(Math.random() * (armies[target].squads.length - 1));
            // let defSquadIndex = random(0, armies[target].squads.length - 1)
            // console.log("defSquadIndex: ", defSquadIndex);
            armies[count].squads[attackingSquadIndex].makeDamage();
            // console.log(armies[count].squads[attackingSquadIndex]);
            // console.log("armies[count].squads[attackingSquadIndex].makeDamage();: ", armies[count].squads[attackingSquadIndex].makeDamage());
            // armies[target].squads[defSquadIndex].damageReceive();

            count++;

        }
    }

    start() {
        this.makeArmies();

    }
}
