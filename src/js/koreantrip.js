document.addEventListener("DOMContentLoaded", function () {
    const visualItem = document.querySelectorAll('.visual_item');
    let timer;
    let num = 0;
    visual();
    function visual() {
        timer = setInterval(function () {
            if (num >= visualItem.length - 1) {
                num = 0;
            } else {
                num += 1;
            }
            visualItem.forEach(item => item.classList.remove('on'));
            visualItem[num].classList.add('on');

        }, 5000)
    }






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