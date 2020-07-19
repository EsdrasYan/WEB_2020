let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) Tomar cuidado ao tentar acessar uma variável que está com o valor nulo.

const produto = {}
console.log(produto.preco) // o produto está definido, diferente do preco que não está, gerando o undefined.
console.log(produto)

produto.preco = 3.50

console.log(produto) //Obejeto agora possui atributo.

produto.preco = undefined // Evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco forma correta de tirar um atributo do objeto, evitando o uso do undefided.
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto) 
