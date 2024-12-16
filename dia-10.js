/**
 * Los elfos programadores están creando un pequeño ensamblador mágico para controlar las máquinas del taller de Santa Claus.
 * 
 * Para ayudarles, vamos a implementar un intérprete sencillo que soporte las siguientes instrucciones mágicas:
 * 
 * - MOV x y: Copia el valor x (puede ser un número o el contenido de un registro) en el registro y
 * - INC x: Incrementa en 1 el contenido del registro x
 * - DEC x: Decrementa en 1 el contenido del registro x
 * - JMP x y: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.
 * 
 * Comportamiento esperado:
 * - Si se intenta acceder, incrementar o decrementar a un registro que no ha sido inicializado, se tomará el valor 0 por defecto.
 * - El salto con JMP es absoluto y lleva al índice exacto indicado por y.
 * - Al finalizar, el programa debe devolver el contenido del registro A. Si A no tenía un valor definido, retorna undefined.
 */

/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
    let registros  = [
        {
            index: "A",
            value: 0
        }, 
        {
            index: "B",
            value: 0
        }, 
        {
            index: "C",
            value: 0
        }, 
        {
            index: "D",
            value: 0
        }, 
        {
            index: "E",
            value: 0
        }, 
        {
            index: "F",
            value: 0
        }, 
        {
            index: "G",
            value: 0
        }, 
        {
            index: "H",
            value: 0
        }, 
        {
            index: "I",
            value: 0
        },
    ];

    const findValue = (key, value, option = "GET") => {
        let search = registros.findIndex((value) => value.index == key);
        if (search == -1) {
            registros.push({
                index: key,
                value: value
            });
            return {
                index: key,
                value: Number(value)
            };
        } else {
            if (option == "SET") {
                registros[search].value = Number(value);
            }
            return registros[search];
        }
    };

    for (let i = 0; i < instructions.length; i++) {
        const instruction = instructions[i];
        let comand = instruction.split(" ");
        let action = comand[0].toUpperCase();
        let x = comand[1];
        let y = 0;
        switch (action) {
            case "MOV":
                y = comand[2];
                if (!(Number.isInteger(Number(x)) && x != '0')) {
                    x = findValue(x, 0, "GET").value;
                }
                let valueY = findValue(y, x, "SET");
                break;
            case "INC":
                let currentValueInc = findValue(x, 0, "GET").value;
                let newValueInc = findValue(x, currentValueInc+1, "SET");
                break;
            case "DEC":
                let currentValueDec = findValue(x, 0, "GET").value;
                let newValueDec = findValue(x, currentValueDec-1, "SET");
                break;
            case "JMP":
                y = comand[2];
                if (!(Number.isInteger(Number(x)) && x != '0')) {
                    x = findValue(x, 0, "GET").value;
                }

                if (x == 0) {
                    i = Number(y) - 1;
                }
                break;
        }
    }
    return (findValue("A", 0, "GET").value == 0) ? 0 : undefined;
}

const instructions = [
    'MOV -1 C', // copia -1 al registro 'C',
    'INC C', // incrementa el valor del registro 'C'
    'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A', // copia el registro 'C' al registro 'a',
    'INC A' // incrementa el valor del registro 'a'
]

let response = compile(instructions) // -> 2
console.log(response);


/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */