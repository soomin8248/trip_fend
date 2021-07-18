document.addEventListener("DOMContentLoaded", function () {
    // visual 이미지 fadeIn/fadeOut 효과주기(4초간격)
    let visualItems = document.querySelector('.visual_items');
    let jeju_cons = document.querySelectorAll('.jeju_con');
    let items = document.querySelectorAll('.item');

    let koreatripvisu = new Swiper('.visual-swiper', {
        effect: 'fade',
        speed: 500,
        loop: true, // 무한 루프 슬라이드, 반복이 되며 슬라이드가 끝이 없다.
        autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
            delay: 3000,   // 시간 설정
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
    });

    visualItems.addEventListener("mouseleave", function () {
        koreatripvisu.autoplay.start();
    });

    visualItems.addEventListener("mouseenter", function () {
        koreatripvisu.autoplay.stop();
    });

    // const visualItem = document.querySelectorAll('.visual_item');
    // let timer;
    // let num = 0;
    // function visual() {
    //     if (num >= visualItem.length - 1) {
    //         num = 0;
    //     } else {
    //         num += 1;
    //     }
    //     visualItem.forEach(item => item.classList.remove('on'));
    //     visualItem[num].classList.add('on');
    // }
    // function fadeStart() {
    //     timer = setInterval(() => visual(), 4000);
    //     console.log('start');
    // }
    // function fadeStop() {
    //     clearInterval(timer);
    //     console.log('stop');
    // }
    // visualItem.forEach(item => {
    //     item.addEventListener('mouseleave', fadeStart);
    //     item.addEventListener('mouseenter', fadeStop);
    // });
    // fadeStart();

    //제주여행 메뉴 클릭시 해당 아이템들 나타나도록 하기
    jeju_cons.forEach(jeju_con => {
        jeju_con.addEventListener("click", function () {
            let viewIdx = this.getAttribute('subSeq');
            items.forEach(function (thsIdx, index) {
                if (index == viewIdx) {
                    thsIdx.style.display = 'flex';
                } else {
                    thsIdx.style.display = 'none';
                }
            });
            jeju_cons.forEach(function (thsIdx) {
                if (thsIdx.getAttribute('subSeq') == viewIdx) {
                    thsIdx.classList.add('on');
                } else {
                    thsIdx.classList.remove('on');
                }
            });
        });
    });

    // const jejuItems = document.querySelectorAll('.jeju_items');
    // const jejuMenu = document.querySelectorAll('.jeju_menu li');

    // jejuMenu.forEach((item, index) => {
    //     item.addEventListener('click', e => {
    //         jejuMenu.forEach(item => item.classList.remove('on'));
    //         e.target.classList.add('on');
    //         jejuItems.forEach(item => item.classList.remove('on'));
    //         jejuItems[index].classList.add('on');
    //     })
    // })

    //MD추천 아이템들 무한슬라이드 효과주기(버튼, 스크롤)
    new Swiper('.korMD-swiper', {
        slidesPerView: 4,
        spaceBetween: 24,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: {
            invert: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        autoplay: {
            delay: 4000,
        },
    });

    // var swiper = new Swiper('.korMD-swiper', {
    //     slidesPerView: 4,
    //     spaceBetween: 30,
    //     loop: true,
    //     navigation: {
    //         nextEl: '.korMD-swiper-right',
    //         prevEl: '.korMD-swiper-left',
    //     },
    //     mousewheel: {
    //         invert: true,
    //     },
    // });
})