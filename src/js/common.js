document.addEventListener("DOMContentLoaded", function () {
    w3.includeHTML(function () {
        let menus = document.querySelectorAll('.menu');
        let sub_menus = document.querySelectorAll('.sub_menu');
        let sub_nav = document.querySelector('#sub_nav');
        let leftsubtitles = document.querySelectorAll('.leftsubtitle');
        let heder = document.querySelector('#header');

        let international_main = document.querySelector('#international_main');
        let koreatrip_main = document.querySelector('#koreatrip_main');

        menus.forEach(menu => {
            menu.addEventListener("mouseenter", function () {
                if (this.getAttribute('subSeq')) {
                    let viewIdx = this.getAttribute('subSeq');
                    sub_menus.forEach(function (thsIdx, index) {
                        if (index == viewIdx) {
                            thsIdx.style.display = "block";
                            sub_nav.style.display = "block";
                        } else {
                            thsIdx.style.display = "none";
                        }
                    });
                    leftsubtitles.forEach(function (thsIdx) {
                        if (thsIdx.getAttribute('subSeq') == viewIdx) {
                            thsIdx.classList.add('on');
                        } else {
                            thsIdx.classList.remove('on');
                        }
                    });
                }
            });
        });

        leftsubtitles.forEach(leftsubtitle => {
            leftsubtitle.addEventListener("click", function () {
                if (this.getAttribute('subSeq')) {
                    let viewIdx = this.getAttribute('subSeq');
                    sub_menus.forEach(function (thsIdx, index) {
                        if (index == viewIdx) {
                            thsIdx.style.display = "block";
                            sub_nav.style.display = "block";
                        } else {
                            thsIdx.style.display = "none";
                        }
                    });
                    leftsubtitles.forEach(function (thsIdx) {
                        if (thsIdx.getAttribute('subSeq') == viewIdx) {
                            thsIdx.classList.add('on');
                        } else {
                            thsIdx.classList.remove('on');
                        }
                    });
                }
            });
        });

        heder.addEventListener("mouseleave", function () {
            sub_nav.style.display = "none";
        });

        // 서브메뉴에 메인페이지로 이동을 눌렀을때 이동
        international_main.addEventListener("click", function () {
            location.href = "/wheretrip/international/index.html";
        });

        koreatrip_main.addEventListener("click", function () {
            location.href = "/wheretrip/koreatrip/index.html";
        });

    });
});
