document.addEventListener("DOMContentLoaded", function () {
    let clicks = document.querySelectorAll('.click');
    let koreatrips = document.querySelectorAll('.koreatrip');

    let trainswiper = document.querySelector('#trainswiper');
    let inlandswiper = document.querySelector('#inlandswiper');
    let jejuswiper = document.querySelector('#jejuswiper');

    clicks.forEach(click => {
        click.addEventListener("click",function(){
            let viewIdx = this.getAttribute('subSeq');
            koreatrips.forEach(function(thsIdx,index){
                if(index == viewIdx){
                    thsIdx.style.display = "flex";
                } else {
                    thsIdx.style.display = "none";
                }
            });
            clicks.forEach(function(thsIdx){
                if(thsIdx.getAttribute('subSeq') == viewIdx){
                    thsIdx.classList.add('on');
                } else {
                    thsIdx.classList.remove('on');
                }
            });
        });
    });
    
    var swiper = new Swiper('.visual-swiper', {
        // effect : 'fade',
        slidesPerView: 1,
        speed : 1000,
        loop : true, // 무한 루프 슬라이드, 반복이 되며 슬라이드가 끝이 없다.
        autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
            delay : 3000,   // 시간 설정
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
    });
    var swiper = new Swiper('.travel-swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop : true,
        navigation: {
            nextEl: '.travel-swiper-right',
            prevEl: '.travel-swiper-left',
        },
        mousewheel: {
            invert: true,
        },
    });

    new Swiper('.train_swiper', {
        slidesPerView: 3,
        spaceBetween: 10,
    });

    inlandswiper.addEventListener("click", function(){
        new Swiper('.inland_swiper', {
            slidesPerView: 3,
            spaceBetween: 10,
        });
    });

    jejuswiper.addEventListener("click", function(){
        new Swiper('.jeju_swiper', {
            slidesPerView: 3,
            spaceBetween: 10,
        });
    });

    new Swiper('.hotel-swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop : true,
        navigation: {
            nextEl: '.hotel-swiper-right',
            prevEl: '.hotel-swiper-left',
        },
        mousewheel: {
            invert: true,
        },
    });

    new Swiper('.banner-swiper', {
        speed : 1000,
        loop : true, // 무한 루프 슬라이드, 반복이 되며 슬라이드가 끝이 없다.
        autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
            delay : 3000,   // 시간 설정
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        pagination : {
            el : '.swiper-pagination',
            clickable: true,
        },
    });
});