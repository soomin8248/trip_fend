// 상단 이미지 슬라이드
document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.slideimg-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
        },
    });
});