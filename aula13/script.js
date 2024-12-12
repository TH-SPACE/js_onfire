function verificar() {

    var tempo = document.getElementById('tempo').value
    var res = document.getElementById('res')
    var tipo = document.getElementsByName('radtip')
    var tipoCard = ''
    //cria um elementeo de imagem
    var img = document.createElement('img')
    //da id=foto para a img
    img.setAttribute('id', 'foto')

    //verifica qual radio esta selecionado
    if (tipo[0].checked) {
        tipoCard = 'Magia'
        if (tempo == "antiga") {
            img.setAttribute('src', 'img/antigaMagia.png')
        } else if (tempo == "nova") {
            img.setAttribute('src', 'img/novaMagia.png')
        }
    } else if (tipo[1].checked) {
        tipoCard = 'Armadilha'
        if (tempo == "antiga") {
            img.setAttribute('src', 'img/antigaTrap.png')
        } else if (tempo = "nova") {
            img.setAttribute('src', 'img/novaTrap.png')
        }
    } else if (tipo[2].checked) {
        tipoCard = 'Monstro'
        if (tempo == "antiga") {
            img.setAttribute('src', 'img/antigaMONSTRO.png')
        } else if (tempo == "nova") {
            img.setAttribute('src', 'img/novoMonstro.png')
        }
    }
    res.innerHTML = `O tipo da carta é ${tipoCard} e é ${String(tempo)}.`
    res.style.textAlign = 'center'
    res.appendChild(img)
}
