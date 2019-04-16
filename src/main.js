import fs from 'fs';
import {Battle} from "./core/battle";
import { Soldier } from './models/Soldier';
import { SoldierFabric } from './fabrics/SoldierFabric';


export class Application {
  async init() {
    let json = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));

    let soldier = new Soldier(50, 1000);
    let fabric = SoldierFabric.getInstance();
    // fabric.createSoldier();
    console.log(fabric);

    const battle = new Battle(json.armies);
    battle.start();
  }
}

