function verificar() {
    // var data = new Date()
    // var ano = data.getFullYear()
    //var fano = document.getElementById('txtano')
    var tempo = document.getElementById('tempo').value
    var res = document.getElementById('res')
    //if (fano.value.length == 0 || Number(fano.value) > ano) {
    //     window.alert('ERRO, verifique o ano que digitou!!')
    // } else {
    var tipo = document.getElementsByName('radtip')
    // var difAno = ano - Number(fano.value)
    var tipoCard = ''
    //criando elemento no html
    var img = document.createElement('img')
    //atribui o id=foto no img
    img.setAttribute('id', 'foto')
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
