const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for ( x in nums){
    if(x == 5) {
        break   //o break não vai agir dentro do if, ele agirá dentro do bloco mais próximo dele, do tipo: for, while ou switch.
    }
    console.log(`${x} = ${nums[x]}`)
}

for ( y in nums) {
    if (y == 5 ) {
        continue // Ao contrário do break o continue ele não interrompe a repetição do codigo, mas pula quando acha o parâmetro passado e continua. 
                 // melhor usado em estruturas só de repetição.
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
for (a in nums) {
    for (b in nums) {
        if ( a == 2 && b == 3 ) 
            break externo
            console.log(`Par = ${a},${b}`)
        
    }
}

console.log('Fim')