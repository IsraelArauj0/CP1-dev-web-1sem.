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
let peso = 100; // Cria uma variável com valor 100kg
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
console.log("O seu IMC é: ", imc)