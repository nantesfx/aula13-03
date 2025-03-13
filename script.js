let hora = 19;

if  (true)
{
    console.log("bom dia");
}
else if (hora < 18)
{
    console.log("boa tarde");

}
else
{
    console.log("boa noite");
}
function executar()
{
    let p1 = document.getElementById("p1");
    let entrada1 = document.getElementById("entrada1");
    p1.innerHTML = "Você digitou: " + entrada1.value;
}

/*
crie um programa em js que receba duas notas, n1 e n2
entre 0 (zero) e 10 (dez) a partir da página no navegador
a partir das notas 
calcule a média final e informe ao usuário o resultado:
media < 2 - REPROVADO
media >=2 E media < 6 - EXAME
media >=6 - APROVADO

DICAS: Identifique as entradas e saídas do programa
Descreva, em palavras, os passos necessários 
para os cálculos solicitados
(passos do programa)
*/

function calcularMedia()
{
    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    let nota1 = Number(n1.value);
    let nota2 = Number(n2.value);
    let media = (nota1+nota2)/2;
    let resultado = document.getElementById("resultado");
    

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2) 
    {
        alert("As notas devem ser entre zero ou dez")
    }
    else
{
     if (media < 2)
        {
       resultado.innerHTML = "Média: " + media + ", VOCÊ ESTÁ REPROVADO"
        }    
        else if (media < 6)
        {
            resultado.innerHTML = "Média: " + media + ", VOCÊ DEVERÁ FAZER EXAME DE RECUPERAÇÃO"
        }
        else (media > 6)
        {
            resultado.innerHTML = "Média: " + media + ", VOCÊ ESTÁ APROVADO"
        }
    }
}

