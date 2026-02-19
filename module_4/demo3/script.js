var Chocolate = /** @class */ (function () {
    function Chocolate(cacaoLvl, color) {
        this.color = color;
        this.name = "";
        this.color2 = {
            nuance: 'vert',
            origin: 'violet'
        };
        this.cacaoLvl = cacaoLvl;
    }
    Chocolate.prototype.display = function () {
        console.log("".concat(this.cacaoLvl, " %, Couleur : ").concat(this.color, ", Origine : ").concat(this.origin));
    };
    return Chocolate;
}());
var choco = new Chocolate(90, 'black');
choco.color = 'vert';
choco.origin = 'Pérou';
console.log(choco.color2.nuance);
choco.display();
var crunch = {
    name: "Crunch",
    color2: {
        nuance: 'marron bleu clair',
        origin: 'Eurasien'
    }
};
