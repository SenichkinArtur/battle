import fs from 'fs';
import {Battle} from "./core/battle";
// import { Soldier } from './models/Soldier';

import { ArmyFabric } from './fabrics/ArmyFabric';
import { SquadFabric } from './fabrics/SquadFabric';
import { SoldierFabric } from './fabrics/SoldierFabric';


export class Application {
  async init() {
    let json = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));

    const battle = new Battle(json.armies);
    battle.start();
  }
}

