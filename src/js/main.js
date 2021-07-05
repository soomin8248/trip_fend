document.addEventListener("DOMContentLoaded", function () {
    w3.includeHTML(function () {

        //해외여행
        const lists_sea = document.querySelector('#oversea .lists_travel');
        const item_sea = document.querySelectorAll('#oversea .item_travel');
        let currentIdx_sea = 0;
        let itemWidth = 280;
        let itemMargin = 26.6666;
        let prevBtn_sea = document.querySelector('#oversea .circleL_icon');
        let nextBtn_sea = document.querySelector('#oversea .circleR_icon');
        let count_sea = item_sea.length;
        let timer;

        makeClone();

        function makeClone() {
            for (let i = 0; i < count_sea; i++) {
                let cloneSlide = item_sea[i].cloneNode(true);
                cloneSlide.classList.add('clone');
                lists_sea.appendChild(cloneSlide);
            }
            for (let i = count_sea - 1; i >= 0; i--) {
                let cloneSlide = item_sea[i].cloneNode(true);
                cloneSlide.classList.add('clone');
                lists_sea.prepend(cloneSlide);
            }
            function updateWidth() {
                let currentSlides = document.querySelectorAll('#oversea .item_travel');
                let newCount = currentSlides.length;

                let newWidth = (itemWidth + itemMargin) * newCount - itemMargin + 'px';
                lists_sea.style.width = newWidth;
            }
            updateWidth();
            setIntialPos();
            //원본 1번 item이 show_travel 맨 앞쪽에 배치되도록 함
            function setIntialPos() {
                let initialTranslateValue = -(itemWidth + itemMargin) * count_sea;
                lists_sea.style.transform = `translateX(${initialTranslateValue}px)`;
                lists_sea.style.left = 0;
            }
        }

        nextBtn_sea.addEventListener('click', function (e) {
            e.preventDefault();
            moveSlide(currentIdx_sea + 1);
        });
        prevBtn_sea.addEventListener('click', function (e) {
            e.preventDefault();
            moveSlide(currentIdx_sea - 1);
        });

        function moveSlide(num) {
            lists_sea.style.left = -num * (itemWidth + itemMargin) + 'px';
            currentIdx_sea = num;
        }
        //해외여행 끝

        //국내여행
        const menu_local = document.querySelectorAll('#local_trip li');
        const lists_local = document.querySelectorAll('#local_trip .lists_travel');

            //국내여행 메뉴(종류) 클릭 시 해당하는 상품리스트 나타나게 함
        menu_local.forEach(function(item, index){
            item.style.cursor = 'pointer';
            item.addEventListener('click',function(e){
                for( let i=0; i<menu_local.length; i++){
                    menu_local[i].classList.remove('click');
                }
                e.target.classList.add('click');
                lists_local.forEach(function(item){
                    item.classList.remove('on');
                })
                lists_local[index].classList.add('on');
            })
        })
        //국내여행 끝

        //이벤트
        const lists_event = document.querySelectorAll('#event ul');
        const item_event = document.querySelectorAll('#event li');
        let top1 = 0;
        let top2 = 0;
        
        lists_event.forEach(function(item){
            let clonefirst = item.firstElementChild.cloneNode(true);
            item.appendChild(clonefirst);
            function update(){

            }
        })

        function moveEvent(Top1, Top2){  
            lists_event[0].style.top = Top1 + 'px';
            lists_event[1].style.top = Top2 + 'px';
            console.log(lists_event[1].style.top)
            top1 = Top1;
            top2 = Top2;
            if(lists_event[0].style.top == -(lists_event[0].children.length-1)*21 + 'px') {
                setTimeout(function () {
                    lists_event[0].style.transition = '0s';
                    lists_event[0].style.top = 0;
                    top1 = 0;
                }, 500);
            }
            if(lists_event[1].style.top == -(lists_event[1].children.length-1)*21 + 'px') {
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
            timer = setInterval(function() {
                moveEvent(top1 - 21, top2 -21);
            }, 2000);
        }
        function stopEvent() {
            clearInterval(timer);
        }
        
        lists_event.forEach(function(item){
            item.addEventListener('mouseenter', stopEvent);
            item.addEventListener('mouseleave', autoEvent);
        });
        autoEvent();

    });
});
