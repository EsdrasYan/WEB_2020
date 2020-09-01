const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// FOR IN não vai retornar os dados da variável, vai retorar o indice de cada um dos elemtentos.
// esta função também permite pegar os atributos de um objeto.

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'Silva',
    idade: 20,
    peso: 64
}

for (let atributo in pessoa) { //let tem a função de não permite o acesso fora do escopo do bloco.
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

