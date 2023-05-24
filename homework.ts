/*

-Design a flexible OOP system to describe characters in a RPG game

-There are 4 Unique Characters which use Different Types of Attacking mechanisms and Defending mechanisms.

--Orges - fights with club and defends with shield

--Peons - fights with club and defends with shield

--Knights - fights with a Sword and defends with Armor

--Archer - fights with Bow and Arrow and has only is tunic to protect them

--All Characters can collect gold and this will always be the same for every new type of character

-At the end of this each character should be able to attack and defend and collect gold. If needed any character should be able to change his fighting style, say if a knight losing his sword, but finds a club he should be able to change his fighting mechanism to use the club

-Hint: To complete this assignment you will need multiple classes and interfaces and an Abstract class

-You can use our Final Rubber Ducky Walkthrough example as a guide

*/


//==================Main Class============================

abstract class RPGChar {
    constructor(protected $charId: number,
            protected $gold: number ){}
    get gold(): number { 
        return this.$gold 
    }
    set gold(amount: number) {
        this.$gold = amount
    } 
    attack(){}
    defend(){}
    dropWeapon(){}
    pickupWeapon(newWeapon: string){}
    collectGold(getGold: number){}
}

//==================Interfaces===========================

interface collected {
    collectGold(getGold: number):void
}

interface attacked {
    attack():void
}

interface defended {
    defend():void
}


//=================Class extension OGRE===================
//  Orges - fight with club and defend with shield

class Ogre extends RPGChar implements attacked, defended, collected {

    public static RPGClassName: string = "Ogre"
    protected $Weapon: string = "Club"
    protected $Defense: string = "Shield"

    constructor(charid: number, 
                gold: number
        ){
            super(charid, gold)
            this.gold = 0
        }
    get Weapon(): string {
        return this.$Weapon
    }
    get Defense(): string {
        return this.$Defense
    }
    public override attack(): void {
        if (this.$Weapon) {
            console.log(`Attacked using your ${this.$Weapon}.`)
        } else {
            console.log(`You don't have a weapon silly!`)
        }
    }
    public override dropWeapon(): void {
        if (this.$Weapon) {
            console.log(`You dropped your ${this.$Weapon}. Hope you're good with your fists!`)
            this.$Weapon = ""
        } else {
            console.log(`You either dropped your weapon already, or you forgot it.  So sad.`)
        }
    }
    public override pickupWeapon(newWeapon: string): void {
        if (this.$Weapon) {
            let ogWeapon = this.$Weapon
            this.$Weapon = newWeapon
            console.log(`You dropped your ${ogWeapon}...but you now have a ${this.$Weapon}! Exciting!`)
        } else {
            this.$Weapon = newWeapon
            console.log(`You picked up a ${this.$Weapon}!`)
        }
    }
    public override defend(): void {
        console.log(`You are defending with a ${this.$Defense}.`)
    }
    public override collectGold(getGold: number): void {
        this.gold += getGold
        console.log(`So good fortune! You picked up ${getGold} gold! Your satchel has ${this.gold}!`)
    }
}

//===================Class Extension KNIGHT===============================
//     Knights - fights with a Sword and defends with Armor

class Knight extends RPGChar implements attacked, defended, collected {

    public static RPGClassName: string = "Knight"
    protected $Weapon: string = "Sword"
    protected $Defense: string = "Armor"

    constructor(charid: number, 
                gold: number
        ){
            super(charid, gold)
            this.gold = 0
        }
    get Weapon(): string {
        return this.$Weapon
    }
    get Defense(): string {
        return this.$Defense
    }
    public override attack(): void {
        if (this.$Weapon) {
            console.log(`Attacked with Lordly honor using your ${this.$Weapon}.`)
        } else {
            console.log(`What kind of alleged-knight has no weapon??  YOU!`)
        }
    }
    public override dropWeapon(): void {
        if (this.$Weapon) {
            console.log(`You dropped your ${this.$Weapon} because a REAL knight IS the weapon!!`)
            this.$Weapon = ""
        } else {
            console.log(`You dishonor the Kingdom. You dropped or forgot your weapon already.`)
        }
    }
    public override pickupWeapon(newWeapon: string): void {
        if (this.$Weapon) {
            let ogWeapon = this.$Weapon
            this.$Weapon = newWeapon
            console.log(`You wisely upgraded your ${ogWeapon} for a ${this.$Weapon}! Cheers good sir!`)
        } else {
            this.$Weapon = newWeapon
            console.log(`You picked up a ${this.$Weapon}, and partially restored your dignity.`)
        }
    }
    public override defend(): void {
        console.log(`Defend yourself with honor, and your ${this.$Defense}.`)
    }
    public override collectGold(getGold: number): void {
        this.gold += getGold
        console.log(`In the King's Name, you gathered ${getGold} gold! Your bounty is now ${this.gold}!`)
    }
}

//===================Class Extension PEON========================================
//     Peons - fight with club and defend with shield

class Peon extends RPGChar implements attacked, defended, collected {

    public static RPGClassName: string = "Peon"
    protected $Weapon: string = "Club"
    protected $Defense: string = "Shield"

    constructor(charid: number, 
                gold: number
        ){
            super(charid, gold)
            this.gold = 0
        }
    get Weapon(): string {
        return this.$Weapon
    }
    get Defense(): string {
        return this.$Defense
    }
    public override attack(): void {
        if (this.$Weapon) {
            console.log(`You attacked using your ${this.$Weapon}.`)
        } else {
            console.log(`You don't have a weapon silly!`)
        }
    }
    public override dropWeapon(): void {
        if (this.$Weapon) {
            console.log(`You dropped your ${this.$Weapon}. Hope you're good with your fists!`)
            this.$Weapon = ""
        } else {
            console.log(`You either dropped your weapon already, or you forgot it.  So sad.`)
        }
    }
    public override pickupWeapon(newWeapon: string): void {
        if (this.$Weapon) {
            let ogWeapon = this.$Weapon
            this.$Weapon = newWeapon
            console.log(`You dropped your ${ogWeapon}...but you now have a ${this.$Weapon}! Exciting!`)
        } else {
            this.$Weapon = newWeapon
            console.log(`You found a ${this.$Weapon}!`)
        }
    }
    public override defend(): void {
        console.log(`You are defending with a ${this.$Defense}.`)
    }
    public override collectGold(getGold: number): void {
        this.gold += getGold
        console.log(`So good fortune! You picked up ${getGold} gold! Your satchel has ${this.gold}!`)
    }
}

//=====================Class Extension ARCHER =================================
//  Archer - fights with Bow and Arrow and has only is tunic to protect them

class Archer extends RPGChar implements attacked, defended, collected {

    public static RPGClassName: string = "Archer"
    protected $Weapon: string = "Bow & Arrows"
    protected $Defense: string = "Tunic"

    constructor(charid: number, 
                gold: number
        ){
            super(charid, gold)
            this.gold = 0
        }
    get Weapon(): string {
        return this.$Weapon
    }
    get Defense(): string {
        return this.$Defense
    }
    public override attack(): void {
        if (this.$Weapon) {
            console.log(`You swiftly attacked using your ${this.$Weapon}.`)
        } else {
            console.log(`You don't have any arrows!  Or a bow to shoot them with!`)
        }
    }
    public override dropWeapon(): void {
        if (this.$Weapon) {
            console.log(`You dropped your ${this.$Weapon}. You plan on fighting with your tunic??`)
            this.$Weapon = ""
        } else {
            console.log(`You either dropped your weapon already, or you forgot it.`)
        }
    }
    public override pickupWeapon(newWeapon: string): void {
        if (this.$Weapon) {
            let ogWeapon = this.$Weapon
            this.$Weapon = newWeapon
            console.log(`You decided to swap your ${ogWeapon} for a ${this.$Weapon}!`)
        } else {
            this.$Weapon = newWeapon
            console.log(`You picked up a ${this.$Weapon}!`)
        }
    }
    public override defend(): void {
        console.log(`You are defending with your....${this.$Defense}? Good luck with that!`)
    }
    public override collectGold(getGold: number): void {
        this.gold += getGold
        console.log(`You have brought honor to your family with ${getGold} gold! Your satchel has ${this.gold}!`)
    }
}

//All Characters can collect gold and this will always be the same for every new type of character