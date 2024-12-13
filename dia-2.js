/**
 * Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su 
 * taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es 
 * ayudar a los elfos a generar este marco mágico.
 * 
 * Reglas:
 * 
 * Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
 * Cada nombre debe estar en una línea, alineado a la izquierda.
 * El marco está construido con * y tiene un borde de una línea de ancho.
 * La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
 */

/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    const rows = new Array(names.length + 2).fill(0);
    const numColumns = names.reduce((prevName, currentName) => (prevName > currentName.length) ? prevName : currentName.length, 0);
    const columns = new Array(numColumns + 4).fill(0);

    let marco = "";
    for (let i = 0; i < rows.length; i++) {
        if (i == 0 || i == rows.length - 1) {
            marco += columns.map((column) => "*").join("");
        } else {
            let name = names[i - 1];
            let numName = (!!name) ? name.length : 0;
            let numEspacios = columns.length - numName - 4;
            numEspacios = (numEspacios >= 0) ? numEspacios : 0;
            let espacios = new Array(numEspacios).fill(' ');
            marco += "* " + name + espacios.join('') + " *";
        }

        if (rows.length - 1 != i) {
            marco += "\n";
        }
    }

    return marco;
}


