
function contar() {
    //if de verificar se os campos estão em branco
    let res = document.getElementById('res')
    let numIni = Number(document.getElementById('numIni').value)
    let numFim = Number(document.getElementById('numFim').value)
    let numPas = Number(document.getElementById('numPas').value)

    if (numIni == '' || numFim == '') {
        res.innerHTML = "NÃO TEM COMO CONTAR!"
    } else {
        if (numPas <= '') {
            numPas = 1
        }
        res.innerHTML = `Início: ${numIni} Fim: ${numFim} Passo: ${numPas}<br>
    Contando:<br>`

        if (numIni < numFim) {
            for (numIni; numIni <= numFim; numIni += numPas) {
                res.innerHTML += `${Number(numIni)}\u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            for (numIni; numIni >= numFim; numIni -= numPas) {
                res.innerHTML += `${Number(numIni)} \u{1F449} `

            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}

function tabuada() {
    let res = document.getElementById('resTabuada')
    let num1 = document.getElementById('numCalc')

    res.innerHTML = `<h4>O número é: ${num1.value} </h4>`

}