const exercicio01 = document.querySelector("#ex01")
const exercicio02 = document.querySelector("#ex02")
const exercicio03 = document.querySelector("#ex03")
const exercicio04 = document.querySelector("#ex04")
const exercicio05 = document.querySelector("#ex05")
const exercicio06 = document.querySelector("#ex06")
const exercicio07 = document.querySelector("#ex07")
const exercicio08 = document.querySelector("#ex08")
const exercicio09 = document.querySelector("#ex09")
const exercicio10 = document.querySelector("#ex10")
const exercicio11 = document.querySelector("#ex11")
const exercicio12 = document.querySelector("#ex12")
const exercicio13 = document.querySelector("#ex13")
const exercicio14 = document.querySelector("#ex14")
const exercicio15 = document.querySelector("#ex15")
const res = document.querySelector(".res")

exercicio01.addEventListener("click", () => {
    let contadora = 1
    do {
        res.innerHTML += " " + contadora
        contadora++
    } while (contadora < 11)
    // 1) Faça um programa que exiba os números de 1 a 10 usando o loop "do-while".
})

exercicio02.addEventListener("click", () => {
    let contadora = 1
    let soma = 0
    do {
        soma += contadora
        contadora++
    } while (contadora < 101)
    res.innerHTML = soma
    // 2) Escreva um programa que calcule a soma dos números de 1 a 100 usando o loop "do-while".
})

exercicio03.addEventListener("click", () => {
    let contadora = 2
    do {
        res.innerHTML += " " + contadora
        contadora += 2
    } while (contadora < 51)
    // 3) Crie um programa que exiba os números pares de 1 a 50 usando o loop "do-while".
})

exercicio04.addEventListener("click",()=>{
    let soma = 0
    let contadora = 1
    do{
        let numeroDigitado = parseFloat(prompt("Digite um número:"))
        soma +=numeroDigitado
        contadora++
    }while(contadora < 6)
        res.innerHTML = `A média dos número digitados é de ${soma/5}.` 
    // 4) Faça um programa que leia 5 números inteiros usando o loop "do-while" e exiba a média aritmética dos valores lidos.
})