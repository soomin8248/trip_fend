$(document).ready(function(){
    w3.includeHTML(function(){
         // 헤더 영역 메뉴 나오게하기
         $('.menu').mouseenter(function(){
            if ($(this).attr("subSeq")) {
                var viewIdx = $(this).attr("subSeq");
                $(".sub_menu").each(function (thsIdx) {
                    if (thsIdx == viewIdx) {
                        $(this).show();
                        $("#sub_nav").show();
                    } else {
                        $(this).hide();
                    }
                });
                $(".leftsubtitle").each(function (thsIdx) {
                    if ($(this).attr("subSeq") == viewIdx) {
                        $(this).addClass('on');
                    } else {
                        $(this).removeClass('on');
                    }
                });
            }
        });
        $('.leftsubtitle').click(function(){
            if ($(this).attr("subSeq")) {
                var viewIdx = $(this).attr("subSeq");
                $(".sub_menu").each(function (thsIdx) {
                    if (thsIdx == viewIdx) {
                        $(this).show();
                        $("#sub_nav").show();
                    } else {
                        $(this).hide();
                    }
                });
                $(".leftsubtitle").each(function (thsIdx) {
                    if ($(this).attr("subSeq") == viewIdx) {
                        $(this).addClass('on');
                    } else {
                        $(this).removeClass('on');
                    }
                });
            }
        });
        $('#header').mouseleave(function(){
            $("#sub_nav").hide();
        });
        // 서브메뉴에 메인페이지로 이동을 눌렀을때 이동
        $('#international_main').click(function(){
            location.href = "international/index.html";
        });
        $('#koreatrip_main').click(function(){
            location.href = "koreatrip/index.html";
        });

        // .visual_con 을 누를때 비쥬얼이미지 나타나고 사라지게하기

        $('.visual_con').on('click',function(){
            if ($(this).attr("subSeq")) {
                var viewIdx = $(this).attr("subSeq");
                $('.in_visual').each(function (thsIdx) {
                    if (thsIdx == viewIdx) {
                        $(this).fadeIn(500);
                    } else {
                        $(this).fadeOut(500);
                    }
                });
                // .visual_con 에 클래스 on을 붙이고 때기
                $(".visual_con").each(function (thsIdx) {
                    if ($(this).attr("subSeq") == viewIdx) {
                        $(this).addClass('on');
                    } else {
                        $(this).removeClass('on');
                    }
                });
            }
        });


        let num = 1;
        let timer;
        
        // 이미지가 자동으로 바뀌게 하는 함수
        function startTimer(){
           timer = setInterval(function(){
                imgSlide(num);
                if(num==3){
                    num=0;
                }else {
                    num++;
                }
            },4000);
        };
        startTimer();

        // 이미지가 자동으로 바뀌는것을 멈추게 하는 함수
        function stopTimer(){
            clearInterval(timer);
        }
        let next;
        const $imgs = $(".in_visual");
        function imgSlide(index){
            $imgs.eq(index-1).hide();
            $imgs.eq(index).show();
            
           
            $(".visual_con").removeClass('on');
           
             $('.visual_con').eq(index).addClass('on');
          
        };
        
        // .visual_con에 마우스를 올렸을때 비주얼 이미지가 바뀌는것을 멈추기
        $(".visual_con").on("mouseenter",function(){
            stopTimer();
        });
        // .visual_con에서 마우스를 땠을때 비주얼 이미지가 다시 바뀌게 하기
        $(".visual_con").on("mouseleave",function(){
            startTimer();
        });
        
        // 해외여행페이지 패키지영역 버튼 누르면 아이템 나타나게하기
        $('.pack_con').click(function(){
            if ($(this).attr("subSeq")) {
                var viewIdx = $(this).attr("subSeq");
                $('.item').each(function (thsIdx) {
                    if (thsIdx == viewIdx) {
                        $(this).css('display','flex');
                    } else {
                        $(this).css('display','none');
                    }
                });
                $(".pack_con").each(function (thsIdx) {
                    if ($(this).attr("subSeq") == viewIdx) {
                        $(this).addClass('on');
                    } else {
                        $(this).removeClass('on');
                    }
                });
            }
        });
    });
});
