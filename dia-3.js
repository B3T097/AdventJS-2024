/**
 * Santa Claus 🎅 está revisando el inventario de su taller para preparar la 
 * entrega de regalos. Los elfos han registrado los juguetes en un array de 
 * objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa 
 * a organizar el inventario.
 * 
 * Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:
 * name: el nombre del juguete (string).
 * quantity: la cantidad disponible de ese juguete (entero).
 * category: la categoría a la que pertenece el juguete (string).
 * 
 * Escribe una función que procese este array y devuelva un objeto que organice 
 * los juguetes de la siguiente manera:
 * 
 * Las claves del objeto serán las categorías de juguetes.
 * Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
 * Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
 * Si el array está vacío, la función debe devolver un objeto vacío {}.
 */

/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    let filter = (category, inventory) => {
        let toysForCategory = inventory.filter((value) => value.category == category);
        let sumToys = [];
        toysForCategory.forEach((toy) => {
            let find = sumToys.findIndex((toySum) => toySum.name == toy.name);
            if (find == -1) {
                sumToys.push(toy);
            } else {
                sumToys[find].quantity += toy.quantity;
            }
        });

        let object = Object.fromEntries(sumToys.map((toy) => [toy.name, toy.quantity]));

        return object;
    };

    let categories = inventory.map((toy) => toy.category);
    categories = categories.filter((value, index) => categories.indexOf(value) === index);
    let newInventory = Object.fromEntries(categories.map((category, index) => [category, filter(category, inventory)]));
    return newInventory;
}