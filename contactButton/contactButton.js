contactButton();

function contactButton() {
    var button = document.createElement('div');
    document.body.appendChild(button);
    button.id = 'contactButton';
    setTimeout(function () {
        var a = anime({
            targets: button,
            opacity: [0, 1],
            duration: 400,
        });
    }, 2000);
    button.onmouseover = function () {
        var a = anime({
            targets: button,
            opacity: [0, 1],
            duration: 200
        });
    }
}


document.getElementById('contactButton').onclick = function () {
    contactElement(this);
}