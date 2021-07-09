document.addEventListener("DOMContentLoaded", function () {
    const visualItem = document.querySelectorAll('.visual_item');
    let timer;
    let num = 0;
    function visual() {
        if (num >= visualItem.length - 1) {
            num = 0;
        } else {
            num += 1;
        }
        visualItem.forEach(item => item.classList.remove('on'));
        visualItem[num].classList.add('on');
    }
    function fadeStart() {
        timer = setInterval(() => visual(), 4000);
        console.log('start');
    }
    function fadeStop() {
        clearInterval(timer);
        console.log('stop');
    }
    visualItem.forEach(item => {
        item.addEventListener('mouseleave', fadeStart);
        item.addEventListener('mouseenter', fadeStop);
    });
    fadeStart();






    const jejuItems = document.querySelectorAll('.jeju_items');
    const jejuMenu = document.querySelectorAll('.jeju_menu li');

    jejuMenu.forEach((item, index) => {
        item.addEventListener('click', e => {
            jejuMenu.forEach(item => item.classList.remove('on'));
            e.target.classList.add('on');
            jejuItems.forEach(item => item.classList.remove('on'));
            jejuItems[index].classList.add('on');
        })
    })

    var swiper = new Swiper('.korMD-swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.korMD-swiper-right',
            prevEl: '.korMD-swiper-left',
        },
        mousewheel: {
            invert: true,
        },
    });
})