class animal{
    constructor(pet, color){
        this.pet = pet
        this.color = color
    }
    run(){
        console.log(this.pet + "Runnig")
    }
    shout(){
        console.log(this.pet + "Shouting")
    }
}

class monkey extends animal{
    banana(){
        console.log(this.pet + "is eating banana and color of chimpu is " + this.color)
    }
    hide(){
        console.log(`${this.pet} is hiding`)
    }
}

let bru = new animal('bruno ', "white")
let mon = new monkey("chimpu ", "brown")

bru.shout()
mon.banana()
mon.hide()
