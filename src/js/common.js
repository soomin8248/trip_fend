document.addEventListener("DOMContentLoaded", function () {
    w3.includeHTML(function(){
        let menus = document.querySelectorAll('.menu');
        let sub_menus = document.querySelectorAll('.sub_menu');
        let sub_nav = document.querySelector('#sub_nav');
        let leftsubtitles = document.querySelectorAll('.leftsubtitle');
        let heder = document.querySelector('#header');

        let international_main = document.querySelector('#international_main');
        let koreatrip_main = document.querySelector('#koreatrip_main');

        menus.forEach(menu => {
            menu.addEventListener("mouseenter",function(){
                if(this.getAttribute('subSeq')){
                    let viewIdx = this.getAttribute('subSeq');
                    sub_menus.forEach(function(thsIdx, index){
                        if (index == viewIdx) {
                            thsIdx.style.display = "block";
                            sub_nav.style.display = "block";
                        } else {
                            thsIdx.style.display = "none";
                        }
                    });
                    leftsubtitles.forEach(function(thsIdx){
                        if(thsIdx.getAttribute('subSeq') == viewIdx){
                            thsIdx.classList.add('on');
                        } else {
                            thsIdx.classList.remove('on');
                        }
                    });
                }
            });
        });
        
        leftsubtitles.forEach(leftsubtitle => {
            leftsubtitle.addEventListener("click",function(){
                if(this.getAttribute('subSeq')){
                    let viewIdx = this.getAttribute('subSeq');
                    sub_menus.forEach(function(thsIdx, index){
                        if (index == viewIdx) {
                            thsIdx.style.display = "block";
                            sub_nav.style.display = "block";
                        } else {
                            thsIdx.style.display = "none";
                        }
                    });
                    leftsubtitles.forEach(function(thsIdx){
                        if(thsIdx.getAttribute('subSeq') == viewIdx){
                            thsIdx.classList.add('on');
                        } else {
                            thsIdx.classList.remove('on');
                        }
                    });
                }
            });
        });

        heder.addEventListener("mouseleave",function(){
            sub_nav.style.display = "none";
        });

        // 서브메뉴에 메인페이지로 이동을 눌렀을때 이동
        international_main.addEventListener("click",function(){
            location.href = "international/index.html";
        });

        koreatrip_main.addEventListener("click",function(){
            location.href = "koreatrip/index.html";
        });

        //이벤트
        const lists_event = document.querySelectorAll('#event ul');
        const item_event = document.querySelectorAll('#event li');
        let top1 = 0;
        let top2 = 0;

        lists_event.forEach(function (item) {
            let clonefirst = item.firstElementChild.cloneNode(true);
            item.appendChild(clonefirst);
            function update() {

            }
        })

        function moveEvent(Top1, Top2) {
            lists_event[0].style.top = Top1 + 'px';
            lists_event[1].style.top = Top2 + 'px';
            console.log(lists_event[1].style.top)
            top1 = Top1;
            top2 = Top2;
            if (lists_event[0].style.top == -(lists_event[0].children.length - 1) * 21 + 'px') {
                setTimeout(function () {
                    lists_event[0].style.transition = '0s';
                    lists_event[0].style.top = 0;
                    top1 = 0;
                }, 500);
            }
            if (lists_event[1].style.top == -(lists_event[1].children.length - 1) * 21 + 'px') {
                setTimeout(function () {
                    lists_event[1].style.transition = '0s';
                    lists_event[1].style.top = 0;
                    top2 = 0;
                }, 500);
            }
            lists_event[0].style.transition = '0.5s';
            lists_event[1].style.transition = '0.5s';
        }
        function autoEvent() {
            timer = setInterval(function () {
                moveEvent(top1 - 21, top2 - 21);
            }, 2000);
        }
        function stopEvent() {
            clearInterval(timer);
        }

        lists_event.forEach(function (item) {
            item.addEventListener('mouseenter', stopEvent);
            item.addEventListener('mouseleave', autoEvent);
        });
        autoEvent();

    });
});
