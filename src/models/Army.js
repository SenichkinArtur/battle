export class Army {
    constructor(squads, strategy, name) {
        this.squads = squads;
        this.strategy = strategy;
        this.name = name;
    }
    isAlive() {
        // console.log(this.name, " squads: ", this.squads.length);
        // if(this.squads.length > 0) {
        //     return true;
        // } else {
        //     return false;
        // }

        // let newSquads = this.squads.filter(item => item.isAlive());
        // this.squads = newSquads;
        return this.squads.some(e => e.isAlive());
    }
    checkSquads() {
        this.squads = this.squads.filter(e => e.isAlive());
    }
    
}