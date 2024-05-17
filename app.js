let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.list');

let thumbnail = document.querySelector('.thumbnail');
let thumbnailItems = Array.from(thumbnail.querySelectorAll('.item'));

nextBtn.onclick = function () {
    moveSlider('next');
}

prevBtn.onclick = function () {
    moveSlider('prev');
}

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item');

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        slider.classList.add('next');
    } else if (direction === 'prev') {
        sliderList.insertBefore(sliderItems[sliderItems.length - 1], sliderItems[0]);
        slider.classList.add('prev');
    }

    slider.addEventListener('animationend', function () {
        if (direction === 'next') {
            slider.classList.remove('next');
        } else {
            slider.classList.remove('prev');
        }
        updateThumbnails();
    }, { once: true });
}

function updateThumbnails() {
    let sliderItems = sliderList.querySelectorAll('.item');
    thumbnailItems.forEach((thumb, index) => {
        let imgIndex = (index + 1) % sliderItems.length;
        thumb.querySelector('img').src = sliderItems[imgIndex].querySelector('img').src;
    });
}

// Initial update to synchronize the thumbnails with the slider on page load
updateThumbnails();
