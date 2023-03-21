/*
5) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência
ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function stringReverse(string) {
  let reversed = '';

  for (let i = 1; i <= string.length; i++) {
    reversed = reversed + string[string.length - i];
  }
  return reversed;
}

console.log(stringReverse('string'));
