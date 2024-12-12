

var res = document.getElementById('res')
let rec = document.getElementById('recuperacao')
let notaGeral = ''
var img = document.createElement('img')


function calcular() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    let notaGeral = (Number(n1.value) + Number(n2.value)) / 2


    img.setAttribute('id', 'foto')

    if (n1.value == "" || n2.value == "") {
        res.innerHTML = `<br><div class="alert alert-danger" role="alert">
  Digite os números!! <strong>Tente novamente!</strong>.
</div>`
        img.setAttribute('src', 'erro.gif')

    } else if (notaGeral >= 60) {
        let dvi1 = document.getElementById('bloc1')
        dvi1.style.visibility = 'hidden'
        dvi1.style.display = 'none'
        res.innerHTML = `<p>Você Passou!! Sua Nota é: ${notaGeral}</p>
        <div class="botoes">
                <input class="btn btn-secondary btn-lg" type="button" value="VOLTAR" onclick="voltar()">
            </div>`
        img.setAttribute('src', 'ok.gif')

    } else {
        let dvi1 = document.getElementById('bloc1')
        dvi1.style.visibility = 'hidden'
        dvi1.style.display = 'none'
        res.innerHTML = `<p class="alert alert-danger">Você não passou!! :( Sua Nota é: ${notaGeral}</p>`
        img.setAttribute('src', 'np.gif')
        rec.style.display = 'block'
    }
    res.appendChild(img)
}

function recuperacao() {
    let n3 = document.getElementById('rec').value
    let calRec = (Number(notaGeral) + Number(n3)) / 2
    if (n3 == '') {
        res.innerHTML += `<br><div class="alert alert-danger" role="alert">
        Digite os números!! <strong>Tente novamente!</strong>.
      </div>`
    } else if (calRec >= 60) {
        let dvi1 = document.getElementById('bloc1')
        dvi1.style.visibility = 'hidden'
        dvi1.style.display = 'none'
        res.innerHTML = `<p>Você Passou!! Sua Nota é: ${calRec}</p>
        <div class="botoes">
                <input class="btn btn-secondary btn-lg" type="button" value="VOLTAR" onclick="voltar()">
            </div>`

        rec.style.display = 'none'
        img.setAttribute('src', 'ok.gif')
    } else {
        let dvi1 = document.getElementById('bloc1')
        dvi1.style.visibility = 'hidden'
        dvi1.style.display = 'none'
        res.innerHTML = `<p class="alert alert-danger">Você não passou!! :( Sua Nota é: ${calRec}</p>`

        img.setAttribute('src', 'erro.gif')
        res.innerHTML += `<div class="botoes">
                <input class="btn btn-secondary btn-lg" type="button" value="VOLTAR" onclick="voltar()">
            </div>`
        rec.style.display = 'none'

    }
    res.appendChild(img)
}

function voltar() {
    window.location.reload();
}