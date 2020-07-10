const exemplos = [7.7, 8.9, 6.3, 9.2]
console.log(exemplos[0], exemplos[3])
console.log(exemplos[4])

exemplos [4] = 10
console.log(exemplos)
console.log(exemplos.length)

exemplos.push({ id: 3 }, false, null, 'teste')
console.log(exemplos)

console.log(exemplos.pop())
delete exemplos[0]
console.log(exemplos)

console.log(typeof exemplos)