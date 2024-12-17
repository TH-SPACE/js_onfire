let valor = [3, 6, 8, 1, 4, 3]

valor.push(7)
valor.sort()

for (let pos = 0; pos < valor.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}

