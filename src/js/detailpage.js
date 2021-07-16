
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
// const timeline = document.querySelector('.trip_timeline');

const tripTabs = document.querySelectorAll('.guide_menu_tab > li');
const tabPage = document.querySelectorAll('.tabpage');

const tripSubTab = document.querySelectorAll('.submenu_tab > li > a');
const tourListTab = document.querySelectorAll('.tourLists_con');

function moreImg() {
    imgBox.classList.toggle('on');
    moreBtn.classList.toggle('on');
    closeBtn.classList.toggle('on');
}

// // 스크롤값 받아오기
// addEventListener('scroll', function () {
//     let sctTop = timeline.offsetTop; // timeline이 떨어져있는 거리
//     let sct = document.documentElement.scrollTop; // 스크롤 값
//     if (sct >= sctTop - 1000) {
//         let tabFixed = document.querySelector('.tab_fixed');
//         let subtabFixed = document.querySelector('.sub_tab_fixed');
//         tabFixed.addEventListener
//         subtabFixed.classList.add('on');
//     } else {
//         let tabFixed = document.querySelectorAll('.tab_fixed');
//         tabFixed.forEach(function (item) {
//             item.classList.remove('on');
//         })
//     }
// })

//메인 탭 이동
tripTabs.forEach(function (item, index) {
    item.addEventListener('click', function () {
        tripTabs.forEach(item => item.classList.remove('on'));
        item.classList.add('on');
        tabPage.forEach(item => item.classList.remove('on'));
        tabPage[index].classList.add('on');

    })
})

// 서브 탭 이동
tripSubTab.forEach(function (item, index) {
    item.addEventListener('click', function () {
        tripSubTab.forEach(item => item.classList.remove('on'));
        item.classList.add('on');
    })
})
// tourListTab.forEach(function (item, index) {
//     item.addEventListener('click', function () {
//         tourListTab.forEach(item => item.classList.remove('on'));
//         tourListTab.classList.add('on');
//     })
// })
// 관광지



// const smallmenu = document.querySelectorAll('.tour_smallmenu li');
// const tour_lists = document.querySelectorAll('.tour_lists');

// smallmenu.forEach(function (item, index) {
//     item.addEventListener('click', function () {
//         smallmenu.forEach(item => item.classList.remove('on'));
//         item.classList.add('on');
//         tour_lists.forEach(item => item.classList.remove('on'));
//         tour_lists[index].classList.add('on');
//     })
// })
