const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue){
        alert('Insira uma URL ou texto para gerar um Qr Code')
        return;
    }
    generateBtn.innerText = "Gerando um Qr Code..."
    qrImg.src = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${encodeURIComponent(qrValue)}`;
    qrImg.addEventListener('load', () => {
        generateBtn.innerText = "";
        container.classList.add('active');
    });
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        container.classList.remove('active');
    };
}); 