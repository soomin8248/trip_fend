document.addEventListener("DOMContentLoaded", function () {
    let toggle_idx = 999;
    let lnbitems = document.querySelectorAll('.lnb_nav > li.lnb_menu');

    lnbitems.forEach((lnbitem, index) => {
        lnbitem.setAttribute("index", index);
        lnbitem.addEventListener('click',function(e){
            lnbitem.classList.remove('on');
        })
    });
    document.addEventListener('scroll', function() {
        let scrollTop = Math.floor(document.querySelector('html').scrollTop);
        let sclThis = document.querySelector('.lnb_block');
        let sclfoot = document.querySelector('#footer');
        let sclfooterheight = Math.floor( window.pageYOffset + sclfoot.getBoundingClientRect().top);
        let scroll_action = Math.floor(document.querySelector('.scroll_action').offsetHeight);
        let nowscroll = Math.floor(scrollTop + scroll_action + 100);
        let headerheight = Math.floor(document.querySelector('#header').offsetHeight); 
        // console.log("sclfooterheight---->" + sclfooterheight);
        // console.log("headerheight---->" + headerheight);
        console.log('scrollTop ===>' + scrollTop);
        console.log('headerheight ===>' + headerheight);
        if (scrollTop > headerheight && nowscroll < sclfooterheight){
            sclThis.classList.add('lnb_fixed');
            sclThis.style.top = 0;
        } else if (scrollTop > headerheight && nowscroll > sclfooterheight){
            sclThis.style.top = Math.floor(sclfooterheight - nowscroll -50) + 'px';
        } else {
            sclThis.classList.remove('lnb_fixed');
        }
    });
});