let valor = [3, 6, 8, 1, 4, 3, 45]

valor.push(7)

const ordenaC = (a, b) => a - b

const nC = valor.sort(ordenaC)

console.log(nC)

for (let pos = 0; pos < valor.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}

