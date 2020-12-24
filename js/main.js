const openItem = document.getElementsByClassName('card-item');
const openAnswer = document.getElementsByClassName('card-answer');

for(var i = 0; i < openItem.length; i++){
    openItem[i].addEventListener('click', function () {
        this.classList.toggle('open');
    })
}