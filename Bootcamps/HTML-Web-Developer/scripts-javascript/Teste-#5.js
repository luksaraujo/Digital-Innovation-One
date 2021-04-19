/*
 * Desafios
 * Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.
 *
 * Entrada
 * Você receberá 1 valor inteiro N, onde N > 0.
 *
 * Saída
 * Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 
 */
 
numero = parseInt(gets());

for (let i = 2; i <= numero; i += 2) {
  console.log(i);
}
