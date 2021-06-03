using System;

class MinhaClasse {

    static void Main(string[] args) {

        int qtdeNotas = 0;                                  //Variável que armazena a quantidade de notas válidas lida
        double nota;                                        //Variável que armazena a nota lida
        double media = 0;                                   //Variável que armazena a média das notas

        while(qtdeNotas != 2) {                             //Enquanto a quantidade de notas válidas lidas for diferente de dois
            nota = Convert.ToDouble(Console.ReadLine());        //Lê a nota
            if (nota >= 0 && nota <= 10) {                      //Se a nota estiver entre 0 e 10
                media += nota;                                      //Soma a nota à média
                qtdeNotas++;                                        //Incrementa 1 na quantidade de notas lidas
            } else {                                            //Senão
                Console.WriteLine("nota invalida");                 //Exibe "nota invalida"
            }
        }

        Console.WriteLine("media = {0:0.00}", (media/2));

    }

}