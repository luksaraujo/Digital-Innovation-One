/* Desafio
 * Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos 
 * valores informados são pares, quantos valores informados são ímpares, quantos
 * valores informados são positivos e quantos valores informados são negativos.
 *
 * Entrada
 * Você receberá 5 valores inteiros.
 *
 * Saída
 * Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por
 * linha e não esquecendo o final de linha após cada uma.
 */
 
let numero = Array(5); //Declara a variável número como um array de cinco posições

for (let i = 0; i < numero.length; i++) { //Enquanto o i for menor do que o cumprimento de numero
  numero[i] = parseInt(gets()); //Insere o valor digitado pelo usuário na posição 'i' de 'número'
}

//Filtra na variável 'numero' os valores cuja divisão por dois tem sobra igual a zero e adiciona-os na variável 'pares'
let pares = numero.filter(value => value % 2 == 0);
console.log(pares.length + ' valor(es) par(es)');

//Filtra na variável 'numero' os valores cuja divisão por dois tem sobra diferente de zero e adiciona-os na variável 'impares'
let impares = numero.filter(value => value % 2 != 0);
console.log(impares.length + ' valor(es) impar(es)');

//Filtra na variável 'número' os values que são maiores do que zero e adiciona esses values em 'positivos'
let positivos = numero.filter(value => value > 0);
console.log(positivos.length + ' valor(es) positivo(s)')

//Filtra na variável 'número' os values que são menores do que zero e adiciona esses values em 'negativos'
let negativos = numero.filter(value => value < 0);
console.log(negativos.length + ' valor(es) negativo(s)')
