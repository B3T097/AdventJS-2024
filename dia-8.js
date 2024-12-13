/**
 * ¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
 * Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles 
 * están en mejor forma.
 * 
 * Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.
 * 
 * La información que recibes:
 * 
 * - indices: Un array de enteros que representan el progreso de cada reno en la pista:
 * - 0: El carril está vacío.
 * - Número positivo: La posición actual del reno desde el inicio de la pista.
 * - Número negativo: La posición actual del reno desde el final de la pista.
 * - length: La longitud de cada carril.
 * 
 * Devuelve un string que represente la pista de la carrera:
 * 
 * - Cada carril tiene exactamente length posiciones llenas de nieve (~).
 * - Cada reno se representa con la letra r.
 * - Los carriles están numerados al final con /1, /2, etc.
 * - La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.
 */

/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let race = [];
    let espacios = indices.length -1;
    indices.forEach((posicion, carril) => {
        race[carril] = "~".repeat(length);

        if (posicion > 0) {
            let separacion = race[carril].split("");
            separacion[posicion] = "r";
            race[carril] = separacion.join("");
        }

        if (posicion < 0) {
            let separacion = race[carril].split("").reverse();
            separacion[Math.abs(posicion + 1)] = "r";
            race[carril] = separacion.reverse().join("");
        }

        race[carril] += " /" + (carril + 1);
        race[carril] = " ".repeat(espacios) + race[carril];
        espacios--;
    });
    return race.join("\n");
}


// ==================================================
// ==================== EJEMPLOS ====================
// ==================================================
console.log(drawRace([0, 5, -3], 10));
console.log("==================================================");

/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8));
console.log("==================================================");
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12));
console.log("==================================================");

/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/