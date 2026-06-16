
let clickMe = document.getElementById('clickMe');
let hiddenMessage = document.getElementById('hiddenMessage');
clickMe.addEventListener('click', showMessage);

function showMessage() {
    hiddenMessage.style.display = 'block';
}

