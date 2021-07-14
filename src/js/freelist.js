document.addEventListener("DOMContentLoaded", function () {
    const bigmenu = document.querySelectorAll('.tour_bigmenu ul li');
    const tourtype = document.querySelectorAll('.tour_type');
    bigmenu.forEach(function (item, index) {
        item.addEventListener('click', function () {
            bigmenu.forEach(item => item.classList.remove('on'));
            item.classList.add('on');
            tourtype.forEach(item => item.classList.remove('on'));
            tourtype[index].classList.add('on');
        })
    })

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

    var swiper = new Swiper('.free-swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.free-swiper-right',
            prevEl: '.free-swiper-left',
        },
        mousewheel: {
            invert: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    var swiper = new Swiper('.package-swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.package-swiper-right',
            prevEl: '.package-swiper-left',
        },
        mousewheel: {
            invert: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
})