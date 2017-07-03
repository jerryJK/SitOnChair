
document.addEventListener('DOMContentLoaded', function(e) {

    var nextBtn = document.querySelector('.carousel__arrow--right');
    var prevBtn = document.querySelector('.carousel__arrow--left');
    var carouselElements = document.querySelectorAll('.inner__item');
    console.log(nextBtn, prevBtn, carouselElements);

    var index = 0;

    carouselElements[0].classList.add('visible');

    nextBtn.addEventListener('click', function(e) {

        if (index < carouselElements.length - 1) {
            index++;
            carouselElements[index].classList.add('visible');
            carouselElements[index - 1].classList.remove('visible');
        } else if (index == carouselElements.length - 1) {
            carouselElements[index].classList.remove('visible');
            index = 0;
            carouselElements[index].classList.add('visible');
        }

    });

    prevBtn.addEventListener('click', function(e) {

        if (index > 0) {
            index--;
            carouselElements[index].classList.add('visible');
            carouselElements[index + 1].classList.remove('visible');
        } else if (index == 0) {
            index = carouselElements.length - 1;
            carouselElements[0].classList.remove('visible');
            carouselElements[index].classList.add('visible');
        }

    });

});
