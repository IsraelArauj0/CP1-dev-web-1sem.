//Primeira questão
let indef; // Cria uma variável indefinida
let vazia = null; // Cria uma variável vazia
let valor = "este é um exemplo" // Cria uma variável com valor
//console.log(valor, vazia, indef) 
//Segunda questão
let num = 10; // Cria uma variável com valor 10
let num1 = 11; // Cria uma variável com valor 11
if(num1 != num){ //verifica se o valor da variável num é diferente da variável num1
//    console.log(num)
}
else{
//  console.log(num1)
}

if(num1 == num){ //verifica se o valor da variável num1 é igual ao da variável num
//    console.log(num1)
}
else{
//  console.log(num)
}

if(num1 >= num){ //verifica se o valor da variável num1 é maior ou igual ao da variável num
    console.log(num1)
}
else{
//  console.log(num)
}

//terceira questão
/*let peso = 100; // Cria uma variável com valor 100kg
let altura = 1.8; // Cria uma variável com valor 1.8 metros
let imc = peso / (altura * altura) // faz o calculo da formula do IMC
if(imc > 24.9){ // verifica se o imc é maior do que 24,4
    console.log("acima do peso")
}
else{
    if(imc >= 18.5){ // verifica se o imc é maior ou igual a 18.5
        console.log("peso ideal")
    
    }
    else{
        console.log("abaixo do peso")
    }
}
console.log("O seu IMC é: ", imc) */

//quarto exercicio
/*let idade = parseFloat(prompt("digite sua idade: "));; // define uma idade para a pessoa
if (idade <= 12) { // se a idade da pessoa for menor ou igual a 12 é considerada criança
    console.log("Criança") ;
} else if (idade <= 18) { // se a idade da pessoa for menor ou igual a 18 é considerada Adolescente
    console.log("Adolescente");
} else if (idade <= 60) { // se a idade da pessoa for menor ou igual a 60 é considerada adulta
    console.log("Adulto");
} else {
    console.log("Idoso");
}
*/

//quinto exercicio
let username = admin; // Obter os valores do nome de usuário e senha
let password = 123;
 // Verificar se o nome de usuário e a senha correspondem ao usuário cadastrado
 if (username === "admin" && password === "1234") {
    console.log("Login realizado com sucesso!");
} else {
    console.log("Falha de autenticação. Por favor, verifique o nome de usuário e senha.");
}

// sexto exercicio
var nota1 = 10 //(prompt("Digite a nota 1:"));
var nota2 =  6//(prompt("Digite a nota 2:"));
var nota3 =  7//(prompt("Digite a nota 3:"));
var nota4 =  8//(prompt("Digite a nota 4:"));
var nota5 =  5//(prompt("Digite a nota 5:"));
var nota6 =  8//(prompt("Digite a nota 6:"));
var nota7 =  4//(prompt("Digite a nota 7:"));
let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;
if (media >= 6) {
    console.log("Parabéns! Você foi aprovado com média :", media);
} else {
    console.log("Você foi reprovado com média :", media);
}


