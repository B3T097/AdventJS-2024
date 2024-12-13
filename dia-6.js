/**
 * Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le 
 * ha olvidado revisar si el regalo, representado por un asterisco *, 
 * está dentro de la caja.
 * 
 * La caja tiene un regalo (*) y cuenta como dentro de la caja si:
 * 
 * - Está rodeada por # en los bordes de la caja.
 * - El * no está en los bordes de la caja.
 * 
 * Ten en cuenta entonces que el * puede estar dentro, fuera o 
 * incluso no estar. Y debemos devolver true si el * está dentro 
 * de la caja y false en caso contrario.
 */

/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    let existe = false;
    for (let i = 0; i < box.length; i++) {
        const row = box[i].trim();
        let index = row.indexOf('*');
        if (row.includes("*")) {
            existe = true;
        }
        if (i == 0 || i == (box.length - 1)) {
            if (row.includes('*')) {
                return false;
            }
        }
        if (index == 0 || index == (row.length - 1)) {
            return false;
        }
    }
    if (existe)
        return true;
    return false;
}


// ==================================================
// ==================== EJEMPLOS ====================
// ==================================================
inBox([
    "###",
    "#*#",
    "###"
]) // ➞ true

inBox([
    "####",
    "#* #",
    "#  #",
    "####"
]) // ➞ true

inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
]) // ➞ false

inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
]) // ➞ false