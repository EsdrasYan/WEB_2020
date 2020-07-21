const [a] = [10]
console.log(a)

// Criando varias variáveis através de uma unica chamada.

//PS: NÃO É RECOMENDADO O USO DESSE ESTILO DE CODIGO POR DIFICULTAR A LEITURA.

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
