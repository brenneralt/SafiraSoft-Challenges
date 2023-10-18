// Sitaxe: for (variavel = x; condição; incremento)
// A variavel 'Par' é usada para receber dados da posicao (incremento)

/*
 * Caso eu deixe somente o incremento usando '=', a variavel só irá receber ele. Caso queira receber e adicionar, use:  +=
 *
 */

for (let par = 0; par <= 100; par += 2) {
  console.log(par);
}

// Separar letras

const string = "Brenner";

for (const letra of string) {
  console.log(letra);
}
