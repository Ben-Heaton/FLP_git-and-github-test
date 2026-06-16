
let clickMe = document.getElementById('clickMe');
let changeColour = document.getElementById('changeColour');
let hiddenMessage = document.getElementById('hiddenMessage');

clickMe.addEventListener('click', showMessage);
changeColour.addEventListener('click', changeTextColour);

function showMessage() {
    hiddenMessage.style.display = 'block';
}

function changeTextColour() {
    document.querySelector('h1').style.color = 'green';
    document.querySelector('h2').style.color = 'purple';
}