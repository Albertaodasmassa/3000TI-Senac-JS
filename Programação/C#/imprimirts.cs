using System;
namespace Teste
{
    class Program
    {
        static void Main()
        {
        string = nome,sobrenome;
        int idade;

        Console.Write("Digite o Seu Nome");
        nome=Console.ReadLine();
        Console.Write("Digite Sua Idade");
        idade=Convert.ToInt16(Console.ReadLine());
        Console.Write("Digite o Seu Sobrenome");
        sobrenome=Console.ReadLine();
        juntonome = nome + sobrenome;
        Console.WriteLine("Bem vindo ao Sistema:"+juntonome);

        
        }
        
    }
}