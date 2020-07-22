let num1 = 1
let num2 = 2

num1++ // forma pós fixada
console.log(num1)

--num1 // forma pré fixada | essa forma tem uma prioridade maior que a de cima.
console.log(num1)

console.log(++num1 === num2--) // primeiro parâmetro foi executado primeiro que o segundo.
console.log(num1 === num2)   // PS: deixar código o mais limpo possível. E não fazer exemplos como esse.