document.addEventListener('DOMContentLoaded', function(e) {

    //SLIDER

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

    //CHAIRS

    var chairs = document.querySelectorAll('.chairs__article');
    console.log(chairs);

    for (var i = 0; i < chairs.length; i++) {
        chairs[i].addEventListener('mouseenter', function(e) {
            this.firstElementChild.style.display = "none";
            this.style.cursor = "pointer";
        });
        chairs[i].addEventListener('mouseleave', function(e) {
            this.firstElementChild.style.display = "block";
        });
    }


    //PRICE BOXES

    var priceBoxes = document.querySelectorAll('.price-list__box');
    console.log(priceBoxes);

    for (var i = 0; i < priceBoxes.length; i++) {
        priceBoxes[i].addEventListener('click', active);
        priceBoxes[i].style.cursor = "pointer";

    };

    function active(e) {

        for (var i = 0; i < priceBoxes.length; i++) {
            priceBoxes[i].classList.remove("price-list__box--active");
        };

        this.classList.toggle("price-list__box--active");

    }


    //APPLICATION

    var applicationForm = document.querySelector('.form');
    //left panel
    var dropDownLists = document.querySelectorAll('.drop_down_list');
    var listPanel = document.querySelectorAll('.list_panel');
    var transportCheckbox = document.getElementById('transport');
    //summary panel
    var chairName = document.querySelector('.title');
    var chairColor = document.querySelector('.color');
    var chairPattern = document.querySelector('.pattern');
    var transport = document.querySelector('.transport');
    var chairPrice = document.querySelector('.title.value');
    var chairColorValue = document.querySelector('.color.value');
    var patternPrice = document.querySelector('.pattern.value');
    var transportPrice = document.querySelector('.transport.value');
    var sum = document.querySelector('.sum');
    var sumAll = 0;




    applicationForm.addEventListener('click', function(e) {

        if (e.target.classList.contains("list_arrow")) {
            e.target.nextElementSibling.classList.toggle("show");

        } else if (e.target.classList.contains("panel-chair")) {
            chairName.innerText = e.target.innerText;
            chairPrice.innerText = e.target.dataset.chairPrice;
            sumAll += parseInt(e.target.dataset.chairPrice);
            sum.innerHTML = sumAll;
            e.target.parentElement.classList.toggle("show");

        } else if (e.target.classList.contains("panel-color")) {
            chairColor.innerText = "kolor";
            chairColorValue.innerText = e.target.innerText;
            e.target.parentElement.classList.toggle("show");

        } else if (e.target.classList.contains("panel-pattern")) {
            chairPattern.innerText = e.target.innerText;
            patternPrice.innerText = e.target.dataset.patternPrice;
            sumAll += parseInt(e.target.dataset.patternPrice);
            sum.innerHTML = sumAll;
            e.target.parentElement.classList.toggle("show");

        } else if (e.target.classList.contains("checkbox-transport")) {

            if (e.target.checked) {
                transport.innerText = "transport";
                transportPrice.innerText = e.target.dataset.transportPrice;
                sumAll += parseInt(e.target.dataset.transportPrice);
                sum.innerHTML = sumAll;
            } else {
                transport.innerText = '';
                transportPrice.innerText = '';
                sumAll -= parseInt(e.target.dataset.transportPrice);
                sum.innerHTML = sumAll;
            }
        }


    });


});
