class Ninja {
    constructor(realName, alias, location, speed, strength) {
        this.realName = realName;
        this.alias = alias;
        this.location = location;
        this.nemesis = [];
        this.friends = [];
        this.powers = {
            specialMoves: [],
            speed: speed,
            strength: strength,
            flight: false,
        };
        this.powerLevel = this.powers.speed + this.powers.strength;
        this.powerLevelRead = `It\'s over ${this.powerLevel}`;
        this.fl = { speed, strength};

        
    }
    canFly() {
        this.powers.flight = true; 
    }
    ninjaRank(strength) {
        strength = this.powerLevel;
    if(strength >= 9000) {
        this.rank = "Hokage"
    }
    else if(strength < 9000 || strength >= 7000) {
        this.rank = "Jonin"
    }

}
}

class Hokage extends Ninja {
    constructor(realName, alias, location, speed, strength) {
        super(realName, alias, location, speed, strength);
    }
}

forthHokage = new Hokage("Minato", "The Yellow Flash", "Konoha", 7000, 2500) 
forthHokage.powers.specialMoves.push("Rasengan", "Flying Raijin", "Sealing Jutsu")
sixthHokage = new Hokage("Kakashi", "Copy Ninja", "Konoha", 4000, 5000)
sixthHokage.powers.specialMoves.push("Sharingan", "Chidori", "Kamui")
// forthHokage.powers.speed = 500;
// forthHokage.powers.strength = "Country Level"
console.log(forthHokage);
forthHokage.canFly();
console.log(forthHokage);
forthHokage.ninjaRank();
console.log(forthHokage);
forthHokage.ninjaRank();
console.log(forthHokage);
console.log(forthHokage.powerLevel)
console.log(forthHokage.fl)
console.log(sixthHokage)
sixthHokage.ninjaRank();
console.log(sixthHokage);