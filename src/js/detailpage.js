
// 상단 이미지 슬라이드
document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.packimg-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
        },
    });
});


// 더보기 버튼 클릭하면 이미지 높이 길어지기
const moreBtn = document.querySelector('#prod_more');
const closeBtn = document.querySelector('#prod_close');
const imgBox = document.querySelector('.prod_imgbox');

function moreImg() {
    imgBox.classList.toggle('on');
    moreBtn.classList.toggle('on');
    closeBtn.classList.toggle('on');
}


const tripTabs = document.querySelectorAll('.guide_menu_tab > li');
const tabPage = document.querySelectorAll('.tabpage');
//메인 탭 이동
tripTabs.forEach(function (item, index) {
    item.addEventListener('click', function () {
        tripTabs.forEach(item => item.classList.remove('on'));
        item.classList.add('on');
        tabPage.forEach(item => item.classList.remove('on'));
        tabPage[index].classList.add('on');

    })
});

const tripSubTab = document.querySelectorAll('.trip > .submenu_tab > li > a');
// 서브 탭 이동
tripSubTab.forEach(function (item, index) {
    item.addEventListener('click', function () {
        tripSubTab.forEach(item => item.classList.remove('on'));
        item.classList.add('on');
    })
});

const tourSubTab = document.querySelectorAll('.tourist_spots > .submenu_tab > li > a');
const tourListTab = document.querySelectorAll('.tourLists_con');
// 관광지/숙소 이동
tourSubTab.forEach(function (item, index) {
    item.addEventListener('click', function () {
        tourSubTab.forEach(item => item.classList.remove('on'));
        item.classList.add('on');
        tourListTab.forEach(item => item.classList.remove('on'));
        tourListTab[index].classList.add('on');
    })
});

const insurSubTab = document.querySelectorAll('.tourist_insurance > .submenu_tab > li > a');
const insu = document.querySelectorAll('.insurance');
// 여행자보험 탭 이동
insurSubTab.forEach(function (item, index) {
    item.addEventListener('click', function () {
        insurSubTab.forEach(item => item.classList.remove('on'));
        item.classList.add('on');
        insu.forEach(item => item.classList.remove('on'));
        insu[index].classList.add('on')
    })
});

const notedSubTab = document.querySelectorAll('.noted_items > .submenu_tab > li > a');
const notedCon = document.querySelectorAll('.noted_content');
// 주의 및 참고사항 탭 이동
notedSubTab.forEach(function (item, index) {
    item.addEventListener('click', function () {
        notedSubTab.forEach(item => item.classList.remove('on'));
        item.classList.add('on');
        notedCon.forEach(item => item.classList.remove('on'));
        notedCon[index].classList.add('on');
    })
});

// 스크롤하면 플로팅 박스 상단 고정
const scheScroll = document.querySelector('#schedule');
addEventListener('scroll', function () {
    let sctTop = scheScroll.offsetTop; // schedule이 떨어져있는 거리
    let sct = document.documentElement.scrollTop; // 스크롤 값
    if (sct >= sctTop + 200) {
        let floatBox = document.querySelector('#floating_box');
        floatBox.classList.add('on');
    } else {
        let floatBox = document.querySelector('#floating_box');
        floatBox.classList.remove('on');
    }
});

// 스크롤하면 메인 탭 박스 상단 고정
const tabScroll = document.querySelector('.guide_menu_tab');
const subTabScroll = document.querySelector('.submenu_tab');
addEventListener('scroll', function(){
    let sctTop = tabScroll.offsetTop;
    let sct = document.documentElement.scrollTop;
    if (sct > sctTop+3700){
        tabScroll.classList.add('on');
        subTabScroll.classList.add('on');
    }else {
        tabScroll.classList.remove('on');
        subTabScroll.classList.remove('on');
    }
});

