/**
 * ¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo 
 * desastre ha montado. Ha cambiado el orden de algunos paquetes, 
 * por lo que los envíos no se pueden realizar.
 * 
 * Por suerte, el elfo Pheralb ha detectado el patrón que ha 
 * seguido el grinch para desordenarlos. Nos ha escrito las reglas 
 * que debemos seguir para reordenar los paquetes. 
 * Las instrucciones que siguen son:
 * 
 * Recibirás un string que contiene letras y paréntesis.
 * Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
 * Si hay paréntesis anidados, resuelve primero los más internos.
 * Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
 * Nos ha dejado algunos ejemplos:
 */

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    let verify = (string) => {
        let array = string.split('');
        let stringAux = "";

        for (let index = 0; index < array.length; index++) {
            const letter = array[index];
            if (letter == '(') {
                let stringInvert = verify(string.slice(index + 1, string.length));
                stringAux += stringInvert[0];
                index += stringInvert[1];

            } else if (letter == ')') {
                let corte = invertir(stringAux);
                return [corte, string.slice(0, index).length + 1];
            } else {
                stringAux += letter;
            }
        }
        return [stringAux, 0];
    };

    let invertir = (cadena) => {
        return cadena.split("").reverse().join("");
    };

    return verify(packages)[0];
}


// ==================================================
// ==================== EJEMPLOS ====================
// ==================================================

fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"