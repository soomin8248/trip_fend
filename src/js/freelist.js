document.addEventListener("DOMContentLoaded", function () {
    const bigmenu = document.querySelectorAll('.tour_bigmenu ul li');
    const tourtype = document.querySelectorAll('.tour_type');
    const tourslide = document.querySelectorAll('.show_tourslide');
    // var swiper;

    bigmenu.forEach((item, index) => {
        item.addEventListener('click', function () {
            bigmenu.forEach(item => item.classList.remove('on'));
            item.classList.add('on');

            tourtype.forEach(item => item.classList.remove('on'));
            tourtype[index].classList.add('on');

            // swiper.destroy(true, true);
            let classon = tourslide[index];
            slideOn(classon);
        });
    });


    function slideOn(classon) {
        new Swiper(classon, {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            mousewheel: {
                invert: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    }
    // slideOn(tourslide[0]);


    const smallmenu = document.querySelectorAll('.tour_smallmenu li');
    const tour_lists = document.querySelectorAll('.tour_lists');

    smallmenu.forEach(function (item, index) {
        item.addEventListener('click', function () {
            smallmenu.forEach(item => item.classList.remove('on'));
            item.classList.add('on');
            tour_lists.forEach(item => item.classList.remove('on'));
            tour_lists[index].classList.add('on');
        })
    })
})