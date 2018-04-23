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
    }, 1000);
    button.onmouseover = function () {
        var a = anime({
            targets: button,
            opacity: [0, 1],
            duration: 200
        });
    }
}

$(window).scroll(function () {
    var b = document.getElementById('contactButton');
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 75) {
        b.style.transformOrigin = 'center';
        b.style.transitionDuration = '1s';
        b.style.marginRight = 'calc(50% - 40px)';
        setTimeout(function () {
            b.style.transitionDuration = '200ms';
        }, 1000)
    } else {
        b.style.transitionDuration = '400ms';
        b.style.marginRight = '32px';
        b.style.transformOrigin = 'bottom right';
    }
});


document.getElementById('contactButton').onclick = function () {
    contactElement(this);
}
