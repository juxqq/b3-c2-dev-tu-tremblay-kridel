// Fonction pour l'addition
function addition(a, b) {
    return a + b;
}
    
// Fonction pour la soustraction
function soustraction(a, b) {
    return a - b;
}

// Fonction pour la multiplication
function multiplication(a, b) {
    return a * b;
}

// Fonction pour la division
function division(a, b) {
    if (b === 0) {
        return "Erreur: division par zéro";
    } else {
        return a / b;
    }
}

// Fonction pour le calcul d'un pourcentage
function pourcentage(a, b) {
    return (a * b) / 100;
}

// Fonction pour le calcul de la racine carrée
function racineCarree(nombre) {
    if (nombre < 0) return NaN;
    if (nombre === 0 || nombre === 1) return nombre;
  
    let precision = 0.00001;
    let x = nombre;
    let y = 1;
  
    while (x - y > precision) {
      x = (x + y) / 2;
      y = nombre / x;
    }

    if (Number.isInteger(x)) {
        return x;
      } else {
        return parseFloat(x.toFixed(5));
    }
}

// Fonction pour le calcul de la puissance d'un nombre
function puissance(nombre, puissance) {
    return nombre ** puissance;
}

console.log(racineCarree(99));

// Faire les branches github, develop, features... Puis finir le programme de calculatrice en ligne de commandes