/**
 * Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.
 * 
 * El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:
 * 
 * Recibirás dos parámetros board y mov.
 * 
 * board es un array de strings que representa el tablero:
 * 
 * - @ es la locomotora del tren.
 * - o son los vagones del tren.
 * - * es una fruta mágica.
 * - · son espacios vacíos.
 * 
 * mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:
 * 
 * - 'L': izquierda
 * - 'R': derecha 
 * - 'U': arriba
 * - 'D': abajo.
 * 
 * Con esta información, debes devolver una cadena de texto:
 * 
 * - 'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
 * - 'eat': Si el tren recoge una fruta mágica (*).
 * - 'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
 */

/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  let locomotora = "@", comida = "*", vagon = "o", vacio = "·";
  let ubicacionLocomotora = board.reduce((prev, current, index) => {
    if (current.includes(locomotora)) {
      if (current.length > 1) {
        return [index, current.split("").findIndex((value, index) => value == locomotora)];
      } else {
        return [index, 0];
      }
    } else {
      return prev;
    }
  }, [0, 0]);

  let nuevaUbicacion = [0, 0];
  switch (mov) {
    case "U":
      if (ubicacionLocomotora[0] == 0) {
        return "crash";
      }
      nuevaUbicacion = [ubicacionLocomotora[0] - 1, ubicacionLocomotora[1]];
      break;
    case "D":
      if (ubicacionLocomotora[0] == board.length-1) {
        return "crash";
      }
      nuevaUbicacion = [ubicacionLocomotora[0] + 1, ubicacionLocomotora[1]];
      break;
    case "R":
      if (ubicacionLocomotora[1] == board[ubicacionLocomotora[0]].length - 1) {
        return "crash";
      }
      nuevaUbicacion = [ubicacionLocomotora[0], ubicacionLocomotora[1] + 1];
      break;
    case "L":
      if (ubicacionLocomotora[1] == 0) {
        return "crash";
      }
      nuevaUbicacion = [ubicacionLocomotora[0], ubicacionLocomotora[1] - 1];
      break;
  }

  let item = board[nuevaUbicacion[0]].split("")[nuevaUbicacion[1]];
  if (item == comida) {
    return "eat";
  } else if (item == vacio) {
    return "none";
  } else if (item == vagon) {
    return 'crash';
  }
}

// ==================================================
// ==================== EJEMPLOS ====================
// ==================================================
const board = [
  '·····',
  '*····',
  '····@',
  '·····',
  '·····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha