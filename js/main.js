function onEditImage(imgName) {
    document.querySelector('.gallery-head').style.display = 'none'
    document.querySelector('.gallery-main').style.display = 'none'
    document.querySelector('.gallery-foot').style.display = 'none'

    const elModal = document.querySelector('.modal')
    elModal.querySelector('.edit-img').innerHTML = 
    `<img src="img/${imgName}.jpg" alt="" class="img-in">`

    elModal.classList.add('open')
}

function onCloseModal() {
    document.querySelector('.modal').classList.remove('open')

    document.querySelector('.gallery-head').style.display = 'block'
    document.querySelector('.gallery-main').style.display = 'block'
    document.querySelector('.gallery-foot').style.display = 'flex'
}
