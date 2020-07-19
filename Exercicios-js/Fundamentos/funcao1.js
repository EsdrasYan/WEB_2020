// Função sem retorno
function imprimirSoma(a, b) {    //Definir bons nome em funções.
 console.log(a + b)

}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2,3,4,5,6,7,8) //ignorou o resto dos dados.
imprimirSoma()


// Função com retorno

function soma(a, b = 1){
    return a + b //função retorando valor.
}

console.log(soma(2, 3)) //necessário o console.log por conta o retorno da função.
console.log(soma(2))