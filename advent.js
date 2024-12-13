/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  let verify = (string) => {
    // console.log("=================================================================");
    let array = string.split('');
    // console.log("Array", array);
    
    let stringAux = "";
    let posiciones = 0;
    // console.log("posiciones", posiciones);
    
    for (let index = 0; index < array.length; index++) {
      const letter = array[index];
      if (letter == '(') {
        let stringInvert = verify(string.slice(index+1, string.length));
        stringAux += stringInvert[0];
        index += stringInvert[1];
        posiciones += stringAux.length;
        
      } else if (letter == ')') {
        // console.log("aux", string, " - ", letter, index, posiciones, array);
        // console.log("Avance", string.slice(0, index).length + 1);
        
        let corte = invertir(stringAux);
        // console.log("invertir", stringAux, corte, posiciones);
        return [corte, string.slice(0, index).length + 1];
      } else {
        stringAux += letter;
      }
      // console.log("stringAux", stringAux);
      posiciones++;
    }
    return [stringAux, 0];
  };

  let invertir = (cadena) => {
    return cadena.split("").reverse().join("");
  };

  return verify(packages)[0];
}


/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
// function fixPackages(packages) {
//   let parentesis_open = 0;
//   let parentesis_close = 0;
//   while(packages.includes('(') && packages.includes(')') ){
    
//     parentesis_open = packages.lastIndexOf('(');
//     let segunda_parte = packages.substring(parentesis_open, packages.length); 
//     parentesis_close = segunda_parte.indexOf(')');
    
//     let fragmento = packages.substring(parentesis_open, (parentesis_open+parentesis_close+1));  
//     let cadena_reverse = fragmento.substring(1,fragmento.length-1).split('').reverse().join('');
  
//     packages = packages.replace(fragmento, cadena_reverse);
//     };  
//   return packages;
// }


document.addEventListener("DOMContentLoaded", function(){

  // let response = fixPackages('a(cb)de');//abcde
  // let response = fixPackages('a(bc(def)g)h');
  let response = fixPackages('abc(d(ef)(gh)i)jk');//abcighefdjk
  // let response = fixPackages('a(b(c))e');
  // let response = fixPackages("a((s)");
  // let response = fixPackages("a(b(c))e"); //acbe
  
  
  
  console.log("response", response);
});
