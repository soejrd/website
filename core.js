$(window).on("load", function () {

});


function homeLoader() {
    AOS.init();
    swiperBoi();
}

function overLoader() {
    haalNummerOp();
    escapeHatch();
}

function escapeHatch() {
    document.getElementById('escapeHatch').onmouseover = function (e) {
        var a = document.getElementById('escapeHatch');
        anime({
            targets: '#turbulence',
            baseFrequency: ['0 0', '0.04 0.001'],
            duration: 5000,
            direction: 'alternate',
            loop: true,
            easing: 'easeOutSine'
        });
    }
}



function swiperBoi() {
    var delay = 5000;
    var speed = 1000;
    var i = 1;
    var mySwiper = new Swiper('.swiper-container', {
        speed: speed,
        direction: 'horizontal',
        loop: true,
        allowTouchMove: false,
        autoplayDisableOnInteraction: false,
        autoplay: {
            delay: delay,
            waitForTransition: true,
        },
    });

    mySwiper.on('slideNextTransitionStart', function () {
        var that = this['slides'];
        for (i = 0; i < that.length; i++) {
            that[i].children[0].style.transitionDuration = '250ms';
            that[i].children[0].style.opacity = 0;
            that[i].children[0].style.transform = 'none';
        }
        setTimeout(function () {
            for (i = 0; i < that.length; i++) {
                that[i].children[0].style.transitionDuration = '1000ms';
                that[i].children[0].style.opacity = 1;
                that[i].children[0].style.transform = 'translateX(3%)'
            }
        }, speed - 250)
    });
}

function fade(e) {
    var a = document.getElementsByClassName('navItems');
    if (e.innerHTML.includes('Werk')) {
        a[1].style.opacity = 0.25;
    } else {
        a[0].style.opacity = 0.25;
    }
}


function fadeBack() {
    var a = document.getElementsByClassName('navItems');
    a[0].style.opacity = 1;
    a[1].style.opacity = 1;
}

function contactElement(b) {
    var a = document.getElementById('destroyer');
    a.style.opacity = 1;
    a.style.visibility = 'visible';
    b.style.visibility = 'hidden';
    b.style.opacity = 0;
}


function schluss(d) {
    var a = document.getElementById('destroyer');
    var b = document.getElementById('contactButton');
    var c = document.getElementById('sendButtonText');
    if (d) {
        c.innerHTML = 'Versturen...';
        setTimeout(function () {
            sluit();
            c.innerHTML = 'Verstuur';
            document.getElementById('naam').value = '';
            document.getElementById('mailadres').value = '';
            document.getElementById('bericht').value = '';
        }, 1000)
    } else {
        sluit();
    }

    function sluit() {
        a.style.opacity = 0;
        a.style.visibility = 'hidden';
        b.style.opacity = 1;
        b.style.visibility = 'visible';
        document.getElementById('naam').value = '';
        document.getElementById('mailadres').value = '';
        document.getElementById('bericht').value = '';
    }

}

function sendMail() {
    var naam = document.getElementById('naam').value;
    var verzender = document.getElementById('mailadres').value;
    var bericht = document.getElementById('bericht').value;
    var berichtClean = bericht.replace(/\n\r?/g, '<br />');
    emailjs.send("default_service", "1", {
        from_name: naam,
        message_html: berichtClean,
        verzender: verzender,
    });
    console.log('mail verstuurd')
}

$("#formulier").submit(function (e) {
    e.preventDefault();
});

function haalNummerOp() {
    fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=motersk313&api_key=aa6ae5a1eae44199b41740dca8db33a3&format=json').then(
        function (response) {
            return response.json();
        }
    ).then(function (data) {
        var containers = document.getElementById('lastFmContainer');
        for (i = 0; i < 6; i++) {
            var track = data.recenttracks.track[i].name;
            var artiest = data.recenttracks.track[i].artist["#text"];
            var image = data.recenttracks.track[i].image[2]["#text"];
            var link = data.recenttracks.track[i].url;
            containers.children[i].children[0].children[0].innerHTML = track;
            containers.children[i].children[0].children[1].innerHTML = artiest;
            containers.children[i].children[1].style.backgroundImage = 'url(' + image + ')';
            containers.children[i].children[1].href = link;
            var filter = $('#filter > feTurbulence')[0];
            var basicTimeline = anime.timeline({
                direction: 'alternate',
                loop: true,
                autoplay: true
            });

            function random() {
                return Math.random() * .02;
            }
            basicTimeline
                .add({
                    targets: filter,
                    baseFrequency: random() + random(),
                    duration: 2000,
                    easing: 'easeInQuad',
                })
                .add({
                    targets: filter,
                    baseFrequency: random() + random(),
                    duration: 2000,
                    easing: 'easeInQuad',
                });
            $(".placeholder").remove();

        }
    })
};

function test() {

}
