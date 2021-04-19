/*
 *
 * Desafio
 * Faça a leitura de um valor inteiro. Em seguida, calcule o menor número
 * de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas 
 * que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência 
 * mostre o valor lido e a relação de notas necessárias.
 *
 * Entrada
 * Você receberá um valor inteiro N (0 < N < 1000000).
 *
 * Saída
 * Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias,
 * seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim
 * de linha.
 *
 */

let valor = parseInt(gets()); //Lê o valor informado pelo usuário e define seu tipo como Inteiro
let valorRestante = 0;

console.log(valor)

// Verifica quantas notas de cem cabem neste valor e obriga o valor a ser inteiro, descartando os decimais
let notasCem = parseInt(valor/100);
console.log(notasCem + ' nota(s) de R$ 100,00')

valorRestante = valor - (notasCem * 100)

if (valorRestante > 0){
  let notasCinquenta = parseInt(valorRestante/50)
  console.log(notasCinquenta + ' nota(s) de R$ 50,00')
  valorRestante -= notasCinquenta * 50
  
  if (valorRestante > 0) {
    let notasVinte = parseInt(valorRestante/20)
    console.log(notasVinte + ' nota(s) de R$ 20,00')
    valorRestante -= notasVinte * 20
    
    if (valorRestante > 0) {
      let notasDez = parseInt(valorRestante/10)
      console.log(notasDez + ' nota(s) de R$ 10,00')
      valorRestante -= notasDez * 10
      
      if (valorRestante > 0) {
        let notasCinco = parseInt(valorRestante/5)
        console.log(notasCinco + ' nota(s) de R$ 5,00')
        valorRestante -= notasCinco * 5
        
        if (valorRestante > 0) {
          let notasDois = parseInt(valorRestante/2)
          console.log(notasDois + ' nota(s) de R$ 2,00')
          valorRestante -= notasDois * 2
          
          if (valorRestante > 0) {
            let notasUm = parseInt(valorRestante/1)
            console.log(notasUm + ' nota(s) de R$ 1,00')
          } else console.log('0 nota(s) de R$ 1,00');
        } else {
          console.log('0 nota(s) de R$ 2,00')
          console.log('0 nota(s) de R$ 1,00')
        }
      } else {
        console.log('0 nota(s) de R$ 5,00')
        console.log('0 nota(s) de R$ 2,00')
        console.log('0 nota(s) de R$ 1,00')
      }
    } else {
      console.log('0 nota(s) de R$ 10,00')
      console.log('0 nota(s) de R$ 5,00')
      console.log('0 nota(s) de R$ 2,00')
      console.log('0 nota(s) de R$ 1,00')
    }
  } else {
    console.log('0 nota(s) de R$ 20,00')
    console.log('0 nota(s) de R$ 10,00')
    console.log('0 nota(s) de R$ 5,00')
    console.log('0 nota(s) de R$ 2,00')
    console.log('0 nota(s) de R$ 1,00')
  }
} else {
  console.log('0 nota(s) de R$ 50,00')
  console.log('0 nota(s) de R$ 20,00')
  console.log('0 nota(s) de R$ 10,00')
  console.log('0 nota(s) de R$ 5,00')
  console.log('0 nota(s) de R$ 2,00')
  console.log('0 nota(s) de R$ 1,00')
}
