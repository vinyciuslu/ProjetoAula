// Declarações e Variaveis 

// const { use } = require("react");

//var, let e const

// var x= 10;
// console.log(x)
// var x= 20;
// console.log(x)
//var - pode redeclarar e acessar fora do escopo 
//let não pode redeclarar e não consegue acessar fora do escopo 
// if(true) {
//     var nome="Fiap";
// }
// console.log(nome)

//const
// const taxaJuros =0.85;
// taxaJuros =0.50;
// console.log(taxaJuros);

// var exemplo1="Ola Dev";
// console.log(exemplo1);

// let exemplo2="Ola dev let";
// console.log(exemplo2);

// const exemplo3="Ola Dev const";
// console.log(exemplo3);

// let exemplo4= 29;
// console.log(exemplo4);

// let exemplo5=true;
// console.log(exemplo5);

// let exemplo6={nome:"fiap"};
// console.log(exemplo6);

// let exemplo7=["Java", "Python", "C#"];
// console.log(exemplo7);

// // Variavel indefinida 
// let exemplo8; 
// console.log(exemplo8);

// let exemplo9=null;
// console.log(exemplo9);

// OPERADORES ARITIMÉTICOS

// const valor1=20;
// const valor2=10 

// console.log(valor1 + valor2);
// console.log(valor1 / valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);

// // OPERADORE LÓGICOS

// console.log( valor1 > valor2);
// console.log( valor1 > 10 && valor2 != 20);
// console.log( valor2 > 5 || valor1 > 50 );

// // OPERADORES DE COMPARAÇÃO 

// console.log( valor1 < valor2);
// console.log( valor1 >= valor2);
// console.log( valor1 <= valor2);
// console.log( valor1 != valor2);
// console.log( valor1 == valor2);
// console.log( valor1 === valor2);
// console.log(" O valor é", valor2);


// Utilizando as variáveis p (preço do produto) e  v(valor do desconto), crie uma nova variável 
// chamada precoFinal que subtraia o desconto do preço e exiba o resultado. 

// const p= 1000;
// const v= 200;
// const precoFinal= p - v;
// console.log("O preço final com desconto é:", precoFinal)

// // Verificação de Segurança (Login e Token)
// // No banco, para autorizar uma transação, precisamos que o usuário esteja logado e que o token de segurança seja válido.
//  const usuarioLogado=1;
//  const token= 100;
//  const transacaoAutorizada= usuarioLogado === 1 && token >=10;
//  console.log ("Transação Autorizada com sucesso", transacaoAutorizada);

 // Estrutura Condicional 

 //if
// if(false) {
//      console.log("É verdadeiro")
// }

// if/else

// let nome="Fiap";

// if(nome=="Fiap"){
//     console.log("Nome verdadeiro")
// } else {
//     console.log("Nome errado")
// }

// if encardeado ou aninhado 


// let idade = 19;

// if( idade <= 13) {
//     console.log("É uma criança")
// } else if ( idade > 13 && idade <= 18){
//     console.log("É um adolescente")
// } else if ( idade > 18 && idade <= 60){
//     console.log("É um adulto")
// } else {
//     console.log("É um idoso")
// }

// let times = prompt("Digite seu time:");

// switch (times) {
//     case "santos":
//         console.log("Um time idoso")
//         break;
//     case "sao paulo":
//         console.log("Time Panetone")
//         break;
//     case "palmeiras":
//         console.log("SEM MUNDIAL")
//         break;
//     case "corithians":
//         console.log("Um tide de tradição")
//         break;
//     default:
//         console.log("É um time ruim quanto a seleção brasileira")
// }

// // ternaria

// let salario= prompt("Digite salario: ");
// let resultado= salario == 100 ? "Salario Certo" : "Salario Errado"
// console.log(resultado)

// let usuario= prompt ("Digite seu Usuário:   ");
// let userLogado= usuario === "fiap"?"Logado com sucesso" : "Usuário Inválido"
// console.log(userLogado);


// function verrificarParImpar (numero) {
//     return numero % 2 === 0 ? "PAR" : "IMPAR";
// }
// console.log(verrificarParImpar(10))


//  ESTRUTURA DE REPETIÇÃO  (LAÇO DE REPETIÇão)

// for - Estrutura de repetição utilizada quando sabemos previamente quantas vezes o código vai ser executado

//declaração, operação, incremento

for(let i=1; i<=5;i++) {
    console.log("Numero:",i);
}

// for para array 

const linguagens = ["Java", "Python", "C#", "PHP"];

for ( let i=0; i < linguagens.length;i++) {
    console.log("Linguagem",i ,":", linguagens[i]);
}

const tecnologias =["JS", "HTML", "CSS"];

for (const tech of tecnologias) {
    console.log("Estudando", tech)
}

const carros ={marca: "Volks", modelo:"Fusca", ano:1980};

for ( let dados in carros){
    console.log(dados, ":", carros[dados])
}

// While - diferente do For o While não sabemos a quantidade de vezes que o código vai executar

let i=1;

while( i <=5){
    console.log("Contagem", i)
    i++;
}

// Declaração de variavel indefinida
// let numero;

// while(numero !== "0") {
//  numero = prompt("Digite: ( ou 0 para sair)");
//  console.log("Eu sei o que você digitou", numero);
// }
// console.log("Fim do programa")


// do while ( execita ao menos uma vez )
let contador =10;

do {
    console.log("Vai executar pelo menos uma vez")
    contador++;
} while (contador <=5);


// declaração da variavel undefined
let palpite;

// gerar um numero aleatorio entre 1 e 10
const sorteio = Math.floor(Math.random() * 10)
        

do {
    palpite = parseInt(prompt("Digite um numero entre 1 e 10"));

    if (isNaN(palpite)){
        alert("Saindo do jogo ")
        break;
    }
    if(palpite < sorteio) {
        alert("Você Perdeu R$ 100,00 :( ")
    }
}while(palpite !== sorteio)
    if (palpite === sorteio) {
        alert ("Parabéns, você ganhou R$ 100,00 :) ")
}