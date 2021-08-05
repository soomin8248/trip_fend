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
let floating = document.querySelector('.floating');
moreBtn.addEventListener('click', function(){
    allItem.classList.add('view');
    floating.style.bottom = "40px";
})
// topbtn 클릭하면 상단으로 이동하기
const topBtn = document.querySelector('#topbtn');
topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

document.addEventListener('scroll', function () {
    // console.log('aaa');
    let scrollTop = Math.floor(document.documentElement.scrollTop) + 40;
    
    let specialContents = document.querySelector('#special_contents');

    let topindex = '';
    let bottomindex = '';

    topindex = Math.floor( window.pageYOffset + specialContents.getBoundingClientRect().top);
    bottomindex = Math.floor(window.pageYOffset + specialContents.getBoundingClientRect().bottom) - 800;
    floating.style.display = 'block';
    
    if(scrollTop > topindex - 500 && scrollTop < bottomindex){
        floating.style.bottom = "40px";
        floating.style.display = 'block';
    } else if(scrollTop > topindex - 500 && scrollTop > bottomindex) {
        floating.style.bottom = "300px";
        // console.log('aaaa');
    } else {
        floating.style.display = 'none';
    }
});

window.onload = function() {
    let scrollTop = Math.floor(document.documentElement.scrollTop) + 40;
    let floating = document.querySelector('.floating');
    let specialContents = document.querySelector('#special_contents');

    let topindex = '';
    let bottomindex = '';

    topindex = Math.floor( window.pageYOffset + specialContents.getBoundingClientRect().top);
    bottomindex = Math.floor(window.pageYOffset + specialContents.getBoundingClientRect().bottom) - 800;
    
    floating.style.display = 'none';
    
    console.log("scrollTop ==>" + scrollTop);
    // console.log(bottomindex);
    // floating.style.bottom = scrollTop + 'px';
    if(scrollTop > topindex - 500 && scrollTop < bottomindex){
        floating.style.display = 'block';
        floating.style.bottom = "40px";
    } else if(scrollTop > topindex - 500 && scrollTop > bottomindex) {
        floating.style.display = 'block';
        floating.style.bottom = "300px";
    }

}