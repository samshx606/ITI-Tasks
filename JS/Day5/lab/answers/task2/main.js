var dots = document.querySelectorAll('.dot');
var red = 0;
var yellow = 0;
var green = 0;
var timer;
function updateLights() {
    if (red == 0) {
        dots[0].id = 'red';
        dots[2].id = '';
    } else if (yellow == 1) {
        dots[0].id = '';
        dots[1].id = 'yellow';
    } else if (green == 2) {
        dots[1].id = '';
        dots[2].id = 'green';
    }
    red = (red + 1) % 3;
    yellow = (yellow + 1) % 3;
    green = (green + 1) % 3;
}

function startTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(updateLights, 1500);
}

startTimer();
for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('mouseenter', function () {
        if (this.id != '') {
            timer = clearInterval(timer);
            timer = null;
        }
    });
    dots[i].addEventListener('mouseleave', function () {
        if (this.id != '' && !timer) {
            startTimer();
        }
    });
}