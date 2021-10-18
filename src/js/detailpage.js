window.onload = function(){
    let goodsInfoDetail = document.getElementById('goodsInfoDetail');
    let box_detail_prod = document.getElementById('box_detail_prod');
    let goodsMore = document.getElementById('goodsMore');

    let goodsInfoDetailhight = goodsInfoDetail.offsetHeight;
    
    let box_detail_prodhight = box_detail_prod.offsetHeight;
    
    //btn more..
    if( goodsInfoDetailhight > box_detail_prodhight ) {
        goodsMore.style.display = 'block';
    } else {
        goodsMore.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.packimg-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
        },
    });

   
    

    let btnMoreBut = document.querySelector('.btn_more');
    btnMoreBut.addEventListener('click',function(){
        let boxDetailProd = document.querySelector('.box_detail_prod');
        let body = document.querySelector('body');
        let detailBox = this.closest('#boxDetailProd');
        let openName = 'open';
        let absoluteTop = window.pageYOffset + boxDetailProd.getBoundingClientRect().top;

        if(boxDetailProd.classList.contains('open')){
            this.innerHTML="상품안내 <span>더보기</span>"; 
            boxDetailProd.classList.remove('open');
            window.scrollTo({ top: absoluteTop, behavior: 'smooth' });
        } else {
            boxDetailProd.classList.add('open');
            this.innerHTML="<span>닫기</span>"; 
        }

    });

    let tabList = document.querySelector('#tabList');
    let tablis = document.querySelectorAll('.tabitembtn');
    let tabPages = document.querySelectorAll('.tab_page');
    let tripDetail = document.querySelector('#tripDetail');

    tabList.children[0].classList.add('on');
    tabPages[0].style.display = 'block';
    tabPages.forEach((tabpage, index) => {
        tabpage.setAttribute("index", index);
    });
    tablis.forEach((tab, index) => {
        tab.setAttribute("index",index);
        tab.addEventListener('click',function(e){
            e.preventDefault();
            let viewIdx = this.getAttribute('index');
            tabPages.forEach(tabpage => {
                if(tabpage.getAttribute("index") == viewIdx){
                    tabpage.style.display = 'block';
                } else {
                    tabpage.style.display = 'none';
                }
            })
            tablis.forEach(thsIdx => {
                if(thsIdx.getAttribute('index') == viewIdx){
                    thsIdx.classList.add('on');
                } else {
                    thsIdx.classList.remove('on');
                }
            })
            let tripDetailindex = window.pageYOffset + tripDetail.getBoundingClientRect().top;
            window.scrollTo({ top: tripDetailindex, behavior: 'smooth' });
        })
    });

    //여행 일정 스크립트
    let dayfixitems = document.querySelectorAll('.day');
    let timelines = document.querySelectorAll('.timeline');
    timelines.forEach((timeline, index) =>{
        timeline.setAttribute("index", index);
    });
    dayfixitems.forEach((dayfixitem, index) => {
        dayfixitem.setAttribute("index", index);
        dayfixitem.addEventListener('click',function(e){
            e.preventDefault();
            let scrollTarget = ''
            let viewIdx = this.getAttribute('index');
            dayfixitems.forEach(thsIdx => {
                if(thsIdx.getAttribute('index') == viewIdx){
                    thsIdx.classList.add('on');
                } else {
                    thsIdx.classList.remove('on');
                }
            })
            timelines.forEach((timeline, index) =>{
                if(timeline.getAttribute('index') == viewIdx){
                    scrollTarget = window.pageYOffset + timeline.getBoundingClientRect().top;
                }
            });
            window.scrollTo({ top: scrollTarget - 130, behavior: 'smooth' });
        })
    });

    //관광지 스크립트
    let rooms = document.querySelectorAll('.room');
    let tourListsCons = document.querySelectorAll('.tourLists_con');
    tourListsCons.forEach((tourListsCon, index) =>{
        tourListsCon.setAttribute("index", index);
    });
    rooms.forEach((room, index) => {
        room.setAttribute("index", index);
        room.addEventListener('click',function(e){
            e.preventDefault();
            let scrollTarget = ''
            let viewIdx = this.getAttribute('index');
            rooms.forEach(thsIdx => {
                if(thsIdx.getAttribute('index') == viewIdx){
                    thsIdx.classList.add('on');
                } else {
                    thsIdx.classList.remove('on');
                }
            })
            tourListsCons.forEach((tourListsCon, index) =>{
                if(tourListsCon.getAttribute('index') == viewIdx){
                    scrollTarget = window.pageYOffset + tourListsCon.getBoundingClientRect().top;
                }
            });
            window.scrollTo({ top: scrollTarget - 130, behavior: 'smooth' });
        })
    });


    //여행자 보험 스크립트
    let insurances = document.querySelectorAll('#scroll_area > li.insurance');
    let insuranceitems = document.querySelectorAll('.insuranceitems');

    insurances[0].classList.add('on');
    insuranceitems[0].style.display = 'block';

    insuranceitems.forEach((insuranceitem, index) => {
        insuranceitem.setAttribute("index", index);
    })

    insurances.forEach((insurance, index) => {
        insurance.setAttribute("index", index);
        insurance.addEventListener('click',function(e){
            e.preventDefault();
            let viewIdx = this.getAttribute('index');
            insuranceitems.forEach(insuranceitem => {
                if(insuranceitem.getAttribute("index") == viewIdx){
                    insuranceitem.style.display = 'block';
                } else {
                    insuranceitem.style.display = 'none';
                }
            })
            insurances.forEach(thsIdx => {
                if(thsIdx.getAttribute('index') == viewIdx){
                    thsIdx.classList.add('on');
                } else {
                    thsIdx.classList.remove('on');
                }
            })
            let tripDetailindex = window.pageYOffset + tripDetail.getBoundingClientRect().top;
            window.scrollTo({ top: tripDetailindex, behavior: 'smooth' });
        })
    })

    //주의 및 참고사항 스크립트
    let noteds = document.querySelectorAll('.noted');
    let notedItems = document.querySelectorAll('.noted_items');
    
    noteds[0].classList.add('on');
    notedItems[0].style.display = 'block';

    notedItems.forEach((notedItem, index) => {
        notedItem.setAttribute("index", index);
    })
    
    noteds.forEach((noted, index) => {
        noted.setAttribute("index", index);
        noted.addEventListener('click',function(e){
            e.preventDefault();
            let viewIdx = this.getAttribute('index');
            notedItems.forEach(notedItem => {
                if(notedItem.getAttribute("index") == viewIdx){
                    notedItem.style.display = 'block';
                } else {
                    notedItem.style.display = 'none';
                }
            })
            noteds.forEach(thsIdx => {
                if(thsIdx.getAttribute('index') == viewIdx){
                    thsIdx.classList.add('on');
                } else {
                    thsIdx.classList.remove('on');
                }
            })
            let tripDetailindex = window.pageYOffset + tripDetail.getBoundingClientRect().top;
            window.scrollTo({ top: tripDetailindex, behavior: 'smooth' });
        })
        let topbut = document.querySelector('#topbtn');
        topbut.addEventListener('click',function(e){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })
    
    document.addEventListener('scroll', function() {
        let scrollTop = Math.floor(document.querySelector('html').scrollTop);
        let tabsPS = document.querySelector(".box_guide_trip");
        let tabsFixs = document.querySelectorAll(".tabs_fixed");
        let detail_page = document.querySelector("#detail_page");

        let topbut = document.querySelector('#topbtn');

        let lnb_block = document.querySelector(".lnb_block");
        let desc_body = document.querySelector(".desc_body");
        
        let lnbindex = Math.floor( window.pageYOffset + desc_body.getBoundingClientRect().top);
        let footerindex = Math.floor(window.pageYOffset + detail_page.getBoundingClientRect().bottom) - 1000;
        
        if(scrollTop > lnbindex + 10 && scrollTop < footerindex){
            lnb_block.style.top = 0 + 'px';
            lnb_block.classList.add('lnb_fixed');
            topbut.style.display = 'block';
            topbut.style.top = 767 + 'px';
        } else if(scrollTop > lnbindex + 10 && scrollTop > footerindex){ 
            lnb_block.style.top = (footerindex - scrollTop) + 'px';
            topbut.style.top = (footerindex - scrollTop) + 770 + 'px';
        } else { 
            lnb_block.style.top = 0 + 'px';
            lnb_block.classList.remove('lnb_fixed');
            topbut.style.display = 'none';
        }

        let tabpsindex =  window.pageYOffset + tabsPS.getBoundingClientRect().top;
        
        if (scrollTop > tabpsindex + 10) {
            tabsFixs.forEach(tabsFix => {
                tabsFix.classList.add("fix");
            })
        } else if (scrollTop < tabpsindex + 10) {
            tabsFixs.forEach(tabsFix => {
                tabsFix.classList.remove("fix");
            })
        }
    });
});