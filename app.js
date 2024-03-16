let imgBox = document.getElementById('img-box');
let qrImage = document.getElementById('qr-img');
let qrText = document.getElementById('qr-text');

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrText.value;
        imgBox.classList.add('show');
    } else {
        qrText.classList.add('error');
        setTimeout(function() {
            qrText.classList.remove('error');
        }, 1000);
    }
} 

const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}