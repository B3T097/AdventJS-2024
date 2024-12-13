/**
 * ¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea 
 * especial. Vamos a crear una función que recibe la altura del árbol (un entero 
 * positivo entre 1 y 100) y un carácter especial para decorarlo.
 * 
 * La función debe devolver un string que represente el árbol de Navidad, 
 * construido de la siguiente manera:
 * 
 * El árbol está compuesto de triángulos de caracteres especiales.
 * Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
 * Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
 * El árbol siempre debe tener la misma longitud por cada lado.
 * Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
 */

/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    let tronco = "#";
    let salto = "\n";
    let espacio = "_";
    let max = (2 * height) - 1;
    
    // let arbol = "/*" + salto;
    let arbol = "";
    for (let i = 0; i < height; i++) {
      let linea = espacio.repeat(height - i - 1) + ornament.repeat((2 * i) + 1) + espacio.repeat(height - i - 1) + salto;
      arbol += linea;
    }
    let troncoLinea = espacio.repeat(height - 1) + tronco + espacio.repeat(height - 1);
    arbol += troncoLinea + salto + troncoLinea;
    
    // arbol += "*/";
    
    return arbol;
  }