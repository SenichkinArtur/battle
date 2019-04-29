import { ArmyFabric } from "../fabrics/ArmyFabric";
import { random } from "../helper/helper";

export class Battle {
    armies = [];
    newArmies = [];

    constructor(armies) {
        this.armies = this.makeArmies(armies);
    }

    makeArmies(armies) {
        let armyFabricInst = ArmyFabric.getInstance();
        this.newArmies = armyFabricInst.createArmys(armies);
        this.startFight(this.newArmies);
    }

    startFight(armies) {
        let count = 0;

        while(true) {
            if(count == armies.length) {
                count = 0;
            }
            if(armies.length == 1) {
                console.log(armies[0].name, "WON!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                break;
            }
            let target = 0;

            while(target != count) {
                target = random(0, armies.length - 1);
            }

            console.log("armies[count]: ", armies[count]);

            let attackingSquadIndex = random(0, armies[count].squads.length - 1);
            let defSquadIndex = random(0, armies[target].squads.length - 1);
            // console.log("attack success: ", attackingSquadIndex, " : ", armies[count].squads[attackingSquadIndex].attackSuccess());
            if( (armies[count].squads[attackingSquadIndex].attackSuccess() - armies[target].squads[defSquadIndex].attackSuccess()) > 0 ) {
                let dmg = armies[count].squads[attackingSquadIndex].makeDamage();
                armies[target].squads[defSquadIndex].damageReceive(dmg);
            }

            // armies[count].squads = armies[count].isAlive();
            // armies[count].checkSquads();

            armies[target].squads[defSquadIndex].checkUnits();
            armies[target].checkSquads();

            this.getArmies();

            // if(armies[count].squads === undefined || armies[count].squads.length == 0) {
            //     armies[count].splice(count, 1);
            // } 

            // console.log("armies[count].isAlive(): ", armies[count].isAlive());
            

            // for(let i = 0; i < armies.length; i++) {
            //     if(armies[i].squads.length < 1) {
            //         console.log(armies[i].name, " lost");
            //         armies.splice(i, 1);
            //         continue;
            //     }
            //     if(armies[i].squads.length > 0) {
            //         for(let k = 0; k < armies[i].squads.length; k++) {
            //             if(armies[i].squads[k].units.length < 1) {
            //                 armies[i].squads.splice(k, 1);
            //                 break;
            //             }
            //             if(armies[i].squads[k].units.length > 0) {
            //                 for(let j = 0; j < armies[i].squads[k].units.length; j++) {
                                
            //                     if(armies[i].squads[k].units[j].operators) {
                                    
            //                         for(let l = 0; l < armies[i].squads[k].units[j].operators.length; l++) {
            //                             if(!armies[i].squads[k].units[j].operators.length < 1) {
            //                                 armies[i].squads[k].units[j].operators.splice(l, 1);
            //                                 continue;
            //                             }
            //                         }
            //                     }   
            //                     if(!armies[i].squads[k].units.length < 1) {
            //                         armies[i].squads[k].units.splice(j, 1);
            //                         continue;
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // }


            count++;
            
            if(armies.length < 1) {
                break;
            }
        }
    }

    getArmies() {
        this.armies = this.armies.filter(e => e.isAlive());
      }

    start() {
        this.makeArmies();

    }
}
