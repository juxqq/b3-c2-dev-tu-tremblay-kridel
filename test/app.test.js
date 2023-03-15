const expect = require('chai').expect;

// Test pour l'addition
describe('addition', function() {
    it('should return 5 when adding 2 and 3', function(done) {
        expect(addition(2, 3)).toEqual(5);
        done();
    });
});

// Test pour la soustraction
describe('soustraction', function() {
    it('should return 2 when subtracting 3 from 5', function(done) {
        expect(soustraction(5, 3)).toEqual(2);
        done();
    });
});

// Test pour la multiplication
describe('multiplication', function() {
    it('should return 24 when multiplying 4 and 6', function(done) {
        expect(multiplication(4, 6)).toEqual(24);
        done();
    });
});

// Tests pour la division
describe('division', function() {
    it('should return 5 when dividing 10 by 2', function(done) {
        expect(division(10, 2)).toEqual(5);
        done();
    });
    it('should return "Erreur: division par zéro" when dividing by 0', function(done) {
        expect(division(10, 0)).toEqual("Erreur: division par zéro");
        done();
    });
});

// Test pour le calcul d'un pourcentage
describe('pourcentage', function() {
    it('should return 12.5 when calculating 25% of 50', function(done) {
        expect(pourcentage(50, 25)).toEqual(12.5);
        done();
    });
});

// Test pour le calcul de la racine carrée
describe('racine carrée', function(){
    it('should return 4.00 when calculating the square root of 16', function(done) {
        expect(squareRoot(16)).toEqual(4.00);
        done();
    });
    it('should return NaN when calculating the square root of a negative number', function(done) {
        expect(squareRoot(-1)).toEqual(NaN);
        done();
    })
    it('should return itself when calculating the square root of 0 or 1', function(done) {
        expect(squareRoot(0)).toEqual(0);
        expect(squareRoot(1)).toEqual(1);
        done();
    })
});

// Test pour le calcul de la puissance d'un nombre
describe('puissance', function(){
    it('should return 8 when calculating the power of 2^3', function(done) {
        expect(puissance(2, 3)).toEqual(8);
        done();
    });
})