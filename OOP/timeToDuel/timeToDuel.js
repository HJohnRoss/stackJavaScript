class Unit {
    constructor(cost, power, resilience){
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    attack(defending){
        defending.resilience -= this.power;
        console.log(`defender remaining resilience ${defending.resilience}`)
    }
}


class Effect extends Unit {
    constructor(cost, text, stat, magnitude){
        super();
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat == "resilience") {
                target.resilience += this.magnitude;
            } else {
                target.power += this.magnitude;
            }
        } else {
            console.log("Target must be a unit!" );
        }
    }
}

const redBeltNinja = new Unit(3, 3, 4);
const hardAlgorithm = new Effect(2, "increase target's resilience by 3", "resilience", 3);
hardAlgorithm.play(redBeltNinja);

const blackBeltNinja = new Unit(4, 5, 4);
const unhandedPromiseRejection = new Effect(1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect(3, "increase target's resilience by 2", "resilience", +2);
unhandedPromiseRejection.play(blackBeltNinja);
pairProgramming.play(blackBeltNinja);

redBeltNinja.attack(blackBeltNinja);