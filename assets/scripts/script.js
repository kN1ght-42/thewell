document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("scroll", function() {
        document.querySelector(".intro-inner").classList.add("active");
    });

    if (window.innerWidth > 1080) {
        var items = 4;
    } else if (window.innerWidth > 768) {
        var items = 2;
    } else {
        var items = 1;
    }
    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: items,
        spaceBetween: 30,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
    });

    var swiper2 = new Swiper(".swiper2", {
        navigation: {
            nextEl: ".button-next-fs",
            prevEl: ".button-prev-fs",
        },
    });

    var swiper3 = new Swiper(".swiper3", {
        navigation: {
            nextEl: ".button-next-ss",
            prevEl: ".button-prev-ss",
        },
        
    });

    console.log('sdsdds');
});
