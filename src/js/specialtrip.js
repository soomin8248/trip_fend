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

// 탭 이동
const tabBtns = document.querySelectorAll('#tab_btn > li');
const itemCon = document.querySelectorAll('.item_contents');

tabBtns.forEach(function(item, index){
    item.addEventListener('click', function(){
        tabBtns.forEach(item => item.classList.remove('on'));
        item.classList.add('on');
        itemCon.forEach(item => item.classList.remove('on'));
        itemCon[index].classList.add('on');

    })
})

// 전체탭에서 더보기 버튼 클릭 했을 때 높이 늘어나기
const moreBtn = document.querySelector('.morebtn');
const allItem = document.querySelector('#all');
moreBtn.addEventListener('click', function(){
    allItem.classList.add('view');
})

// topbtn 클릭하면 상단으로 이동하기
const topBtn = document.querySelector('#topbtn');

topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
// topbtn 스크롤하면 나타나기
addEventListener('scroll', function () {
    let sct = document.documentElement.scrollTop;
    let itemDiv = document.querySelector('#special_items');
    let itemDivTop = itemDiv.offsetTop;
    if (sct > 100) {
        topBtn.classList.add('view');
    } else {
        topBtn.classList.remove('view');
    }
    if (sct > itemDivTop + 350) {
        topBtn.classList.add('on');
    } else {
        topBtn.classList.remove('on');
    }
})