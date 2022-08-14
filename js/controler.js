var gElCanvas
var gCtx
var gTxtToInput
var gTxtPosY
var gIdxPosY
var gCurrImg

function init() {
    gImgs = createImgs()

    renderGallery(gImgs)

    gElCanvas = document.querySelector('#canvas');
    gCtx = gElCanvas.getContext('2d');

    gTxtToInput = ''
    gTxtPosY = [50, 450, 250, 150, 350]
    gIdxPosY = 0
    console.log(createFiltImgs('food'));

}

function onEditImage(imgName) {
    document.querySelector('.search-navigator').style.display = 'none'
    document.querySelector('.gallery-main').style.display = 'none'

    drawImg(imgName)
    gCurrImg = imgName
    gTxtToInput = ''
    gTxtPosY = [50, 450, 250, 150, 350]
    gIdxPosY = 0

    document.querySelector('.modal').classList.add('open')
}

function onCloseModal() {
    document.querySelector('.modal').classList.remove('open')

    document.querySelector('.search-navigator').style.display = 'block'
    document.querySelector('.gallery-main').style.display = 'block'
}

function drawImg(imgName) {

    var img = new Image()
    img.src = `img/${imgName}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}


function textInput(ev) {
    gTxtToInput += ev.key
}

function drawText() {
    if (!gTxtToInput.length) return
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.font = '60px david';
    gCtx.fillStyle = 'black';
    gCtx.fillText(gTxtToInput, 250, gTxtPosY[gIdxPosY]);
    gCtx.strokeStyle = 'white';
    gCtx.strokeText(gTxtToInput, 250, gTxtPosY[gIdxPosY]);
    document.querySelector('[name=todo-txt]').value = ''
    gTxtToInput = ''
    gIdxPosY += 1
}


function clearCanvas() {
    drawImg(gCurrImg)
    gIdxPosY = 0
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'canvas';
}

function renderGallery(imgs) {
    let strHTML = ''
    for (var i = 0; i < imgs.length; i++) {
        let imgName = imgs[i].name
        strHTML += `<img src="img/${imgName}.jpg" alt="" onclick="onEditImage(${imgName})"></img>`
    }
    document.querySelector('.grid-container').innerHTML = strHTML
}

function filterGallery(keyWord) {
    renderGallery(createFiltImgs(keyWord))
}


