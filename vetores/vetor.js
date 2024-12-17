let valor = [3, 6, 8, 1, 4, 3]

/*for (let pos = 0; pos < valor.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}*/

for (let pos in valor) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)

}