// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa  // A chaves representam o destructuring

console.log(nome, idade)

 // modificando o valor da variável

const { nome: n, idade: i} = pessoa
console.log(n, i)

// Tirando atributos que não existe dentro do objeto.

const { sobrenome, bemHumorada = true} = pessoa 
console.log(sobrenome, bemHumorada)

//Acessando logradouro e número de endereço.

const {endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)