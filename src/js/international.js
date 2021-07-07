document.addEventListener("DOMContentLoaded", function () {
    
    let pack_cons = document.querySelectorAll('.pack_con');
    let items = document.querySelectorAll('.item');

    let visualtext = ['추석 출발 유럽 여행', '지금 떠나는 하와이', '스위스 완전 일주 9일', '최단거리 휴양 천국, 세부'];

    // ** FADE OUT FUNCTION **
    function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    };

    // ** FADE IN FUNCTION **
    function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    };

    pack_cons.forEach(pack_con => {
        pack_con.addEventListener("click",function(){
            let viewIdx = this.getAttribute('subSeq');
            items.forEach(function(thsIdx,index){
                if (index == viewIdx) {
                    thsIdx.style.display = 'flex';
                } else {
                    thsIdx.style.display = 'none';
                }
            });
            pack_cons.forEach(function(thsIdx) {
                if(thsIdx.getAttribute('subSeq') == viewIdx){
                    thsIdx.classList.add('on');
                } else {
                    thsIdx.classList.remove('on');
                }
            });
        });
    });

    new Swiper('.visual-swiper', {
        effect : 'fade',
        speed : 500,
        loop : true, // 무한 루프 슬라이드, 반복이 되며 슬라이드가 끝이 없다.
        autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
            delay : 3000,   // 시간 설정
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        pagination : {
            el : '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                // return '<div class="' + className + '"><span>' + (visualtext[index]) + '</span></div>';
                return '<li class="visual_con ' + className + '">' + (visualtext[index]) + '</li>';
            }
        },
    });
    new Swiper('.free-item-swiper', {
        slidesPerView: 4,
        spaceBetween: 24,
        loop : true,
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
});