class Hero {
    constructor(realName, alias, location, pl) {
        this.realName = realName;
        this.alias = alias;
        this.location = location;
        this.nemesis = [];
        this.friends = [];
        this.powerLevel = `It's over ${pl}`;
        this.powers = {
            specialMoves: [],
            speed: 0,
            strength: 0,
            flight: false,
        };
    }
    canFly() {
        this.powers.flight = true;
    }
}

forthHokage = new Hero("Minato", "Obito", "Konoha", 9000);
console.log(forthHokage);
forthHokage.canFly();
console.log(forthHokage);