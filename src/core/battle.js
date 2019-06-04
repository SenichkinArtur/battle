import { ArmyFabric } from "../fabrics/ArmyFabric";
import { random } from "../helper/helper";

export class Battle {
    armies = [];
    newArmies = [];

    constructor(armies) {
        this.armies = armies;
    }

    start() {
        this.armies = this.makeArmies(this.armies);
    }

    makeArmies(armies) {
        let armyFabricInst = ArmyFabric.getInstance();
        this.newArmies = armyFabricInst.createArmys(armies);
        this.startFight(this.newArmies);
    }
    

    startFight(armies) {
        let count = 0;
        while(this.newArmies.length > 1) {
            if(count == armies.length) {
                count = 0;
            }

            let target = 0;

            while(target != count) {
                target = random(0, armies.length - 1);
            }

            let attackingSquadIndex = random(0, armies[count].squads.length - 1);
            let defSquadIndex = random(0, armies[target].squads.length - 1);
            if( (armies[count].squads[attackingSquadIndex].attackSuccess() - armies[target].squads[defSquadIndex].attackSuccess()) > 0 ) {
                let dmg = armies[count].squads[attackingSquadIndex].makeDamage();
                armies[target].squads[defSquadIndex].damageReceive(dmg);
            }

            armies[target].squads[defSquadIndex].checkUnits();
            armies[target].checkSquads();

            this.getArmies();
            
            count++;
        }
        console.log(this.newArmies[0].name, ' Won');
    }

    getArmies() {
        this.newArmies = this.newArmies.filter((army) => {
            if (!army.isAlive()) {
                console.log(army.name + ' lost');
            }
            return army.isAlive();
        });
    }
}
