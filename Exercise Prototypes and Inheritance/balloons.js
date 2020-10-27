function solve() {
    class Balloon {
        constructor(color, gasWeight ) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    
    class PartyBalloon extends Balloon {
        constructor (color, gasWeight, ribbonColor, ribbonLength) {
            super (color, gasWeight);
            this._ribbon = {color: ribbonColor, length: ribbonLength};
        }

        get ribbon () {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor (color, gasWeight, ribbonColor, ribbonLenght, text) {
            super (color, gasWeight, ribbonColor, ribbonLenght);
            this._text = text;
        };

        get text () {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}
