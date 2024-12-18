let num = document.getElementById('num')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let iten = document.createElement('option')
        iten.text = `Valor ${num.value} adicionado.`
        lista.appendChild(iten)

    } else {
        window.alert('Valor invalido ou ja encontrado na lista!!!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        res.innerHTML = 'Nao contem valores!'

    } else {
        let total = valores.length

        let maior = valores[0]
        let menor = valores[0]

        let soma = 0

        for (let pos = 0; pos < valores.length; pos++) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados.</p>`
        res.innerHTML += `<p>Maior valor informado: ${maior}.</p>`
        res.innerHTML += `<p>Menor valor informado: ${menor}.</p>`
        res.innerHTML += `<p>Soma dos valores: ${soma}.</p>`
        res.innerHTML += `<p>A media: ${Number(media)}.</p>`
    }
}