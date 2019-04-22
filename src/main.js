import fs from 'fs';
import {Battle} from "./core/battle";
// import { Soldier } from './models/Soldier';

import { ArmyFabric } from './fabrics/ArmyFabric';
import { SquadFabric } from './fabrics/SquadFabric';
import { SoldierFabric } from './fabrics/SoldierFabric';


export class Application {
  async init() {
    let json = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));

    // let soldier = new Soldier(50, 1000);

    // let fabric = SoldierFabric.getInstance();
    // let qqwe = fabric.createSoldier({health: 50, recharge: 500});
    // let qqwe = fabric.createSoldiers([ {health: 100, recharge: 1000}, {health: 50, recharge: 500} ]);
    // console.log(qqwe);


    // let armyFabricInst = ArmyFabric.getInstance();
    // let armies = armyFabricInst.createArmys(json.armies);

    // let squadFabricInst = SquadFabric.getInstance();
    // let squadsItaly = squadFabricInst.createSquads(armies[0].squads);

    // let soldierFabricInst = SoldierFabric.getInstance();
    // let soldiersItaly = soldierFabricInst.createSoldiers(squadsItaly)

    // console.log('main.js qwe: ', squadsItaly);

    const battle = new Battle(json.armies);
    battle.start();
  }
}

