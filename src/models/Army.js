export class Army {
    constructor(squads, strategy, name) {
        this.squads = squads;
        this.strategy = strategy;
        this.name = name;
    }
    isAlive() {
        if(this.squads.length > 1) {
            return true;
        } else {
            return false;
        }
        return this.squads.length ? true : false;
    }
    checkSquads() {
        this.squads = this.squads.filter(e => e.isAlive());
    }
    
}