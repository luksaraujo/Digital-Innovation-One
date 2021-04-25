using System;

namespace Revisao_Primeiros_Passos_Com_DotNet_CSharp{
    class Program{
        static void Main(string[] args){
            Aluno[] alunos = new Aluno[5];
            int IndiceAluno = 0;
            string opcao = ObterOpcaoUsuario();
            while (opcao.ToUpper() != "X"){ 
                switch (opcao)
                {
                    case "1":
                        Console.WriteLine("Informe o nome do aluno:");
                        Aluno aluno = new Aluno();
                        aluno.Nome = Console.ReadLine();
                        Console.WriteLine("Informe a nota do aluno:");                        
                        if(decimal.TryParse(Console.ReadLine(), out decimal nota)) aluno.Nota = nota;
                        else throw new ArgumentException("O valor da nota deve ser decimal.");
                        alunos[IndiceAluno] = aluno;
                        IndiceAluno++;
                        break;
                    case "2":
                        foreach(var a in alunos){
                            /*
                             * No "If" abaixo, se a propriedade "Nome" - que é uma string - de "a" - que representa "aluno" - não
                             * for nula ou vazia, o console irá imprimir apenas os índices de aluno onde o Nome não é vazio,
                             * descartando as posições vazias e não as imprimindo.
                             */
                            if(!string.IsNullOrEmpty(a.Nome)){
                                Console.WriteLine($"Aluno: {a.Nome} - NOTA: {a.Nota}");
                                Console.WriteLine();
                            }
                        }
                        break;
                    case "3":
                    decimal notaTotal = 0;
                    var qtdeAlunos = 0;
                        for (int i = 0; i < alunos.Length; i++){
                            if(!string.IsNullOrEmpty(alunos[i].Nome)){
                                notaTotal += alunos[i].Nota;
                                qtdeAlunos++;
                            }
                        }
                        var mediaGeral = notaTotal / qtdeAlunos;
                        ConceitoEnum conceitoGeral;
                        if (mediaGeral <= 2) conceitoGeral = ConceitoEnum.E;
                        else if(mediaGeral <= 4) conceitoGeral = ConceitoEnum.D;
                        else if(mediaGeral <= 6) conceitoGeral = ConceitoEnum.C;
                        else if(mediaGeral <= 8) conceitoGeral = ConceitoEnum.B;
                        else conceitoGeral = ConceitoEnum.A;
                        Console.WriteLine($"MÉDIA GERAL: {mediaGeral}");
                        Console.WriteLine($"CONCEITO GERAL: {conceitoGeral}");
                        Console.WriteLine();
                        break;
                    default:
                        throw new ArgumentOutOfRangeException();
                }
                opcao = ObterOpcaoUsuario();
            }
        }

        private static string ObterOpcaoUsuario(){
            Console.WriteLine("INFORME A OPÇÃO DESEJADA");
            Console.WriteLine("1 - INSERIR NOVO ALUNO");
            Console.WriteLine("2 - LISTAR ALUNOS");
            Console.WriteLine("3 - CALCULAR MÉDIA GERAL");
            Console.WriteLine("X - SAIR");
            Console.WriteLine();
            string opcao = Console.ReadLine();
            Console.WriteLine();
            return opcao;
        }
    }
}