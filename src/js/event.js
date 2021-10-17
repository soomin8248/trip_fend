document.addEventListener("DOMContentLoaded", function () {
    w3.includeHTML(function () {
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
            // console.log(lists_event[1].style.top)/
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
    })
});