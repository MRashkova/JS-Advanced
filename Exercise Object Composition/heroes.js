function solve() {
    const fighter = function (name) {
        //различен ситаксис на същото, което го пише по-долу
        //{this.name, this.health, this.stamina} = [name, 100, 100];
        this.name = name;
        this.health = 100;
        this.stamina = 100;

        this.fight = () => {
            this.stamina--;
            console.log(`${this.name} slashes at the foe!`);
        }
    }   
    
    const mage = function (name) {
        this.name = name;
        this.health = 100;
        this.mana = 100;

        this.cast = (spell) => {
            this.mana--;
            console.log(`${this.name} cast ${spell}`);
        }
    }

    return {
        fighter: (name = '') => new fighter (name),
        mage: (name = '') => new mage (name)
    }
}
