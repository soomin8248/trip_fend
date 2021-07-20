
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
let numch = 0;

function moreImg() {
    imgBox.classList.toggle('on');
    moreBtn.classList.toggle('on');
    closeBtn.classList.toggle('on');
    if (numch == 0) {
        numch = 1;
    } else {
        numch = 0;
    }
}


const tripTabs = document.querySelectorAll('.guide_menu_tab > li');
const content_tab = document.querySelector('#content_tab');
const tabPage = document.querySelectorAll('.tabpage');
const toplet = window.pageYOffset + content_tab.getBoundingClientRect().top;
//메인 탭 이동
tripTabs.forEach(function (item, index) {
    item.addEventListener('click', function () {
        tripTabs.forEach(item => item.classList.remove('on'));
        item.classList.add('on');
        tabPage.forEach(item => item.classList.remove('on'));
        tabPage[index].classList.add('on');
        if (numch == 1) {
            window.scrollTo({ top: toplet + 3300, left: 0 });
        } else {
            window.scrollTo({ top: toplet - 210, left: 0 });
        }
    })
});

const tripSubTab = document.querySelectorAll('.trip > .submenu_tab > li > a');
const dayOne = document.querySelector('#day1');
const dayTwo = document.querySelector('#day2');
const dayThree = document.querySelector('#day3');
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
const floating = document.querySelector('#floating_box');
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
addEventListener('scroll', function () {
    let sctTop = tabScroll.offsetTop;
    let sct = document.documentElement.scrollTop;
    if (numch == 1) {
        if (sct > sctTop + 7150) {
            tabScroll.classList.add('on');
            subTabScroll.classList.add('on');
        } else {
            tabScroll.classList.remove('on');
            subTabScroll.classList.remove('on');
        }
    } else {
        if (sct > sctTop + 3605) {
            tabScroll.classList.add('on');
            subTabScroll.classList.add('on');
        } else {
            tabScroll.classList.remove('on');
            subTabScroll.classList.remove('on');
        }
    }
});

// 여행일정 서브 탭 클릭 했을 때 클릭한 내용 위치로 스크롤
const dayOneCon = document.querySelector('.day_title');
const absoluteTop = window.pageYOffset + dayOneCon.getBoundingClientRect().top;

const dayOnetit = document.querySelector('.dayOne');
dayOnetit.addEventListener('click', function () {
    if (numch == 1) {
        window.scrollTo({ top: absoluteTop + 3155, left: 0, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: absoluteTop - 250, left: 0, behavior: 'smooth' });
    }
})

const dayTwotit = document.querySelector('.dayTwo');
dayTwotit.addEventListener('click', function () {
    if (numch == 1) {
        window.scrollTo({ top: absoluteTop + 4800, left: 0, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: absoluteTop + 1400, left: 0, behavior: 'smooth' });
    }
})

const dayThreetit = document.querySelector('.dayThree');
dayThreetit.addEventListener('click', function () {
    if (numch == 1) {
        window.scrollTo({ top: absoluteTop + 7190, left: 0, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: absoluteTop + 3785, left: 0, behavior: 'smooth' });
    }

})

// topbtn 클릭하면 상단으로 이동하기
const topBtn = document.querySelector('#topbtn');

topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
// topbtn 스크롤하면 나타나기
addEventListener('scroll', function () {
    let sct = document.documentElement.scrollTop;
    if (sct > 600) {
        topBtn.classList.add('on');
    } else {
        topBtn.classList.remove('on');
    }
})



