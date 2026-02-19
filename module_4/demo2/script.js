var _a, _b, _c;
//declarations de variables comme JS avec des types
var age = 22;
// age = "coucou";
var message = 'coucou';
// message = 12
var all = 12;
all = 'coucou';
//fonctions
function hello(name) {
    return "Hello ".concat(name);
}
console.log(hello('Michel'));
//nullité
var firstname = null;
console.log(firstname !== null && firstname !== void 0 ? firstname : 'Michel');
var lastname;
lastname = 'Robot';
lastname = 123;
var user = {
    firstname: 'Michel',
    // adress: null,
    adress: {
        street: 'Machin'
    }
};
console.log((_b = (_a = user.adress) === null || _a === void 0 ? void 0 : _a.street) !== null && _b !== void 0 ? _b : 'Rue des lilas');
console.log((_c = user.adress.street) !== null && _c !== void 0 ? _c : 'Rue des lilas');
