var image = document.getElementById('slider');
var timer;
var isRunning = false;
function changeImageNext() {
    var currentSrc = image.src;
    if (currentSrc.includes('image1.png')) {
        image.src = 'images/image2.png';
    } else if (currentSrc.includes('image2.png')) {
        image.src = 'images/image3.png';
    } else if (currentSrc.includes('image3.png')) {
        image.src = 'images/image4.png';
    } else {
        image.src = 'images/image1.png';
    }
    console.log('Image changed to: ' + image.src);
}
function changeImagePrev() {
     var currentSrc = image.src;
    if (currentSrc.includes('image1.png')) {
        image.src = 'images/image4.png';
    } else if (currentSrc.includes('image2.png')) {
        image.src = 'images/image1.png';
    } else if (currentSrc.includes('image3.png')) {
        image.src = 'images/image2.png';
    } else {
        image.src = 'images/image3.png';
    }
    console.log('Image changed to: ' + image.src);
}
function play() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(changeImageNext, 2000);
    }
}

function pause() {
    clearInterval(timer);
    isRunning = false;
}

function next() {
    if(isRunning) {
        pause();
        changeImageNext();
        play();
    }else{
        changeImageNext();
    }
}

function prev() {
    if(isRunning) {
        pause();
        changeImagePrev();
        play();
    }else{
        changeImagePrev();
    }
}