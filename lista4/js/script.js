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
    res.innerHTML = ""
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
    res.innerHTML = ""
    let contadora = 2
    do {
        res.innerHTML += " " + contadora
        contadora += 2
    } while (contadora < 51)
    // 3) Crie um programa que exiba os números pares de 1 a 50 usando o loop "do-while".
})

exercicio04.addEventListener("click", () => {
    res.innerHTML = ""
    let soma = 0
    let contadora = 1
    do {
        let numeroDigitado = parseFloat(prompt(`Digite o ${contadora}º nùmero:`))
        soma += numeroDigitado
        contadora++
    } while (contadora < 6)
    res.innerHTML = `A média dos número digitados é de ${soma / 5}.`
    // 4) Faça um programa que leia 5 números inteiros usando o loop "do-while" e exiba a média aritmética dos valores lidos.
})

exercicio05.addEventListener("click", () => {
    res.innerHTML = ""
    let numeroDigitado = parseInt(prompt("Digite um número para ver a sua tabuada:"))
    let contadora = 1
    do {
        let tabuada = numeroDigitado * contadora
        res.innerHTML += `<p>${numeroDigitado} X ${contadora} = ${tabuada}</p>`
        contadora++
    } while (contadora < 11)

    // 5) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "do-while".
})

exercicio06.addEventListener("click", () => {
    res.innerHTML = ""
    let numeroDigitado = parseInt(prompt("Digite um número para ver os seus dvisores:"))
    let contadora = 1
    do {
        if (numeroDigitado % contadora == 0) {
            res.innerHTML += " " + contadora
            contadora++
        } else {
            contadora++
        }
    } while (contadora < numeroDigitado)
    // 6) Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "do-while".
})

exercicio07.addEventListener("click", () => {
    res.innerHTML = ""
    let numeroDigitado = parseInt(prompt("Digite um número para ver se ele é primo:"))
    let contadora = 1
    let primo = 0
    if (numeroDigitado == 2) {
        res.innerHTML = `O número 2 não é primo.`
    } else {
        do {
            if (numeroDigitado % contadora == 0) {
                primo++
            }
            contadora++
        } while (contadora <= numeroDigitado)

        if (primo == 2) {
            res.innerHTML = `O número ${numeroDigitado} é primo.`
        } else {
            res.innerHTML = `O número ${numeroDigitado} não é primo.`
        }
    }
    // 7) Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "do-while".
})

exercicio08.addEventListener("click", () => {
    res.innerHTML = ""
    let numero1 = 0
    let numero2 = 1
    let numeroDigitado = parseInt(prompt("Digite um número para ver sua sequência de fibonacci:"))

    res.innerHTML += `${numero1} - ${numero2}`
    let contadora = 0
    do {
        let soma = numero1 + numero2
        res.innerHTML += ` - ${soma}`
        numero1 = numero2
        numero2 = soma
        contadora++
    } while (contadora < numeroDigitado - 2);
    // while (contadora < numeroDigitado - 2) {
    //     let soma = numero1 + numero2
    //     res.innerHTML += ` - ${soma}`
    //     numero1 = numero2
    //     numero2 = soma
    //     contadora++
    // }

    // 8) Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "do-while".
})

exercicio09.addEventListener("click", () => {
    res.innerHTML = ""
    let contadora = 1
    let idade = 0
    do {
        let nome = prompt(`Digite o  nome da ${contadora}ª pessoa:`)
        idade += parseInt(prompt(`Digite a idade da ${contadora}ª pessoa.`))
        contadora++
    } while (contadora < 6)
    res.innerHTML = ` a média das idades dessas cincos pessoas é de ${idade / 5}.`
    // 9) Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "do-while" e exiba a média das idades.
})

exercicio10.addEventListener("click", () => {
    res.innerHTML = ""
    let numero1 = 0
    let numero2 = 1
    res.innerHTML += `${numero1} - ${numero2}`
    let contadora = 0
    do {
        let soma = numero1 + numero2
        res.innerHTML += ` - ${soma}`
        numero1 = numero2
        numero2 = soma
        contadora++
    } while (contadora < 18);
    // 10) Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "do-while".
})

exercicio11.addEventListener("click", () => {
    res.innerHTML = ""
    let numeroDigitado = parseInt(prompt("Digite um número para ver a soma de todos os pares de 1 até o número digitado:"))
    let contadora = 0
    let soma = 0
    do {
        soma += contadora
        contadora += 2
    } while (contadora <= numeroDigitado)

    res.innerHTML = soma

    // 11) Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "do-while".
})

exercicio12.addEventListener("click", () => {
    res.innerHTML = ""
    let contadora = 1
    do {
        res.innerHTML += " " + contadora
        contadora += 2
    } while (contadora < 50)
    // 12) Crie um programa que exiba os números ímpares de 1 a 50 usando o loop "do-while".
})

exercicio13.addEventListener("click", () => {
    res.innerHTML = ""
    let numeroDigitado = parseInt(prompt("Digite um número para ver os seus digitos separadamente:"))
    let numeroDigitadoString = numeroDigitado.toString()
    let tamanho = numeroDigitadoString.length
    let contadora = 0
    do {
        res.innerHTML += `${numeroDigitadoString.charAt(contadora)} `
        contadora++
    } while (contadora < tamanho)
    // 13) Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "do-while".
})

exercicio14.addEventListener("click", () => {
    res.innerHTML = ""
    let numeroDigitado = parseInt(prompt("Digite um número para ver o fatorial:"))
    let fatorial = 1
    do {
        fatorial *= numeroDigitado
        numeroDigitado--
    } while (numeroDigitado > 0)

    res.innerHTML = fatorial
    // 14) Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "do-while".
})

exercicio15.addEventListener("click", () => {
    res.innerHTML = ""
    let contadora = 1
    let nomes = ""
    let idades = 0
    do {
        nomes = prompt(`Digite o nome da ${contadora}ª pessoa(ou fim para encerrar o programa):`)
        if (nomes != "fim") {
            idades += parseInt(prompt(`Digite a idade da ${contadora}ª pessoa:`))
            contadora++
        }
    } while (nomes != "fim");
    console.log(contadora)

    res.innerHTML = `A média de idade das pessoas digitadas é de ${idades / (contadora - 1)}`

    // 15) Crie um programa que leia o nome e a idade de várias pessoas usando o loop "do-while" até que o nome "fim" seja informado. Ao final, exiba a média das idades.
})