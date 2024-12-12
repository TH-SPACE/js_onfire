function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `São ${hora} Horas `
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += `BOM DIA!!`
        img.src = 'img/manha.jpg'
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += `BOA TARDE!!`
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += `BOA NOITE!!`
        img.src = 'img/noite.jpg'
        document.body.style.background = "#515154"
    }
}