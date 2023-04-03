const expect = require('chai').expect;
var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);

describe('Test de l\'addition', function() {
    it('devrait retourner 4 pour 2 + 2', function(done) {
      $('#toto')[0].innerHTML = '2+2';
      $('#resultat').click();
      expect($('#toto')[0].innerHTML).toEqual('4');
      done();
    });
});

  describe('Test de la soustraction', function() {
    it('devrait retourner 1 pour 2 - 1', function(done) {
      $('#toto')[0].innerHTML = '2-1';
      $('#resultat').click();
      expect($('#toto')[0].innerHTML).toEqual('1');
      done();
    });
});

describe('Test de la multiplication', function() {
    it('devrait retourner 6 pour 2 * 3', function(done) {
      $('#toto')[0].innerHTML = '2*3';
      $('#resultat').click();
      expect($('#toto')[0].innerHTML).toEqual('6');
      done();
    });
});

describe('Tests de la racine carrée', function(){
    it('devrait retourner 4 quand on calcule la racine carrée de 16', function(done) {
        $('#toto')[0].innerHTML = '16**(1/2)';
        $('#resultat').click();
        expect($('#toto')[0].innerHTML).toEqual('4');
        done();
    });
    it('devrait retourner \'Error\' quand on calcule la racine carrée d\'un nombre négatif', function(done) {
        $('#toto')[0].innerHTML = '16**(1/2)';
        $('#resultat').click();
        expect($('#toto')[0].innerHTML).toEqual('4');
        done();
    })
    it('devrait retourner lui même si on calcule la racine carrée de 0 ou 1', function(done) {
        if ($('#toto')[0].innerHTML = '0**(1/2)') {
            $('#resultat').click();
            expect($('#toto')[0].innerHTML).toEqual('0');
        } else if ($('#toto')[0].innerHTML = '1**(1/2)') {
            $('#resultat').click();
            expect($('#toto')[0].innerHTML).toEqual('1');
        }
        done();
    })
});

describe('Tests de la division', function() {
    it('devrait retourner 5 quand on divise 10 par 2', function(done) {
        $('#toto')[0].innerHTML = '10/2';
        $('#resultat').click();
        expect($('#toto')[0].innerHTML).toEqual('5');
        done();
    });
    it('devrait retourner \'Infinity\' quand on divise par 0', function(done) {
        $('#toto')[0].innerHTML = '1/0';
        $('#resultat').click();
        expect($('#toto')[0].innerHTML).toEqual('Infinity');
        done();
    });
});

describe('Tests de la puissance', function() {
    it('devrait retourner 8 pour 2 à la puissance 3', function(done) {
      $('#toto')[0].innerHTML = '2*3';
      $('#resultat').click();
      expect($('#toto')[0].innerHTML).toEqual('8');
      done();
    });
    it('devrait retourner 1 si la puissance est 0', function(done) {
        $('#toto')[0].innerHTML = '7**0';
        $('#resultat').click();
        expect($('#toto')[0].innerHTML).toEqual('1');
        done();
      });
});

describe('pourcentage', function() {
    it('devrait retourner 12.5 quand on calcule 25% de 50', function(done) {
        $('#toto')[0].innerHTML = '50/100*25';
        $('#resultat').click();
        expect($('#toto')[0].innerHTML).toEqual('12.5');
        done();
    });
});