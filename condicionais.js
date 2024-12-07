var idade = 65
console.log(`Você tem ${idade}!!`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 65) {
    console.log('Voto Opcional')
} else {
    console.log('Voto Obrigatório!')
}

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!!')
} else if (hora < 18) {
    console.log('Boa Tarde!!')
} else {
    console.log('Boa Noite')
}
