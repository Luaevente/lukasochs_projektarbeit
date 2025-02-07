// Carousel Funktion
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = document.querySelector('#carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, { interval: 5000, ride: 'carousel' });

    // Optional, falls du eigene Logik zur Steuerung möchtest
    var nextButton = document.querySelector(".carousel-control-next");
    var prevButton = document.querySelector(".carousel-control-prev");

    nextButton.addEventListener("click", function () {
        carousel.next(); // Bootstrap Methode zum Wechseln zur nächsten Folie
    });

    prevButton.addEventListener("click", function () {
        carousel.prev(); // Bootstrap Methode zum Wechseln zur vorherigen Folie
    });
});

// Kontaktformular Validation
(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()