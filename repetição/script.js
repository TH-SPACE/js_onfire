
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
    res.innerHTML = `<thead class="thead-dark">
                            <tr>
                                <th scope="col">Multiplicação</th>
                                <th scope="col">Resultado</th>
                            </tr>
                        </thead>`
    if (num1.value.length == 0) {
        res.innerHTML = `<strong>INSIRA UM NÚMERO!!</strong>`
    } else {
        num1 = Number(num1.value)
        for (var t = 1; t <= 10; t++) {
            // res.innerHTML += `<span class="badge badge-info">${num1} x ${t} = ${num1 * t}</span>`
            res.innerHTML += `<tbody>
                            <tr>
                                <th scope="col">${num1} x ${t}</th>
                                <th scope="col">${num1 * t}</th>
                            </tr>
                        </tbody>`
        }
        res.innerHTML += `<tr>
            <th scope="col">Fim</th>
            <th scope="col">\u{1F3C1}</th>
            </tr>`
    }
} 