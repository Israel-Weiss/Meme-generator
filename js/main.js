var gElCanvas
var gCtx
var gTxtToInput
var gTxtPosY
var gCurrImg

function init() {
    gElCanvas = document.querySelector('#canvas');
    gCtx = gElCanvas.getContext('2d');

    gTxtToInput = ''
    gTxtPosY = 10
}

function onEditImage(imgName) {
    document.querySelector('.gallery-head').style.display = 'none'
    document.querySelector('.gallery-main').style.display = 'none'
    document.querySelector('.gallery-foot').style.display = 'none'

    drawImg(imgName)
    gCurrImg = imgName
    gTxtToInput = ''
    gTxtPosY = 10

    document.querySelector('.modal').classList.add('open')
}

function onCloseModal() {
    document.querySelector('.modal').classList.remove('open')

    document.querySelector('.gallery-head').style.display = 'block'
    document.querySelector('.gallery-main').style.display = 'block'
    document.querySelector('.gallery-foot').style.display = 'flex'
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
    gCtx.font = '7 Arial';
    gCtx.fillStyle = 'blue';
    gCtx.fillText(gTxtToInput, 75, gTxtPosY);
    document.querySelector('[name=todo-txt]').value = ''
    gTxtToInput = ''
    gTxtPosY += 20
}

function clearCanvas() {
    drawImg(gCurrImg)
    gTxtPosY = 10
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'canvas';
}
