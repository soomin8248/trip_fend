document.addEventListener("DOMContentLoaded", function () {
    let visual_cons = document.querySelectorAll('.visual_con');
    let in_visuals = document.querySelectorAll('.in_visual');
    
    function fade(type, ms, el) {
        var isIn = type === 'in',
            opacity = isIn ? 0 : 1,
            interval = 50,
            duration = ms,
            gap = interval / duration;
      
        if(isIn) {
            el.style.display = 'inline';
            el.style.opacity = opacity;
        }
      
        function func() {
            opacity = isIn ? opacity + gap : opacity - gap;
            el.style.opacity = opacity;
      
            if(opacity <= 0) el.style.display = 'none'
            if(opacity <= 0 || opacity >= 1) window.clearInterval(fading);
        }
        var fading = window.setInterval(func, interval);
    }


    visual_cons.forEach(visual_con => {
        visual_con.addEventListener("click",function(){
            if(this.getAttribute('subSeq')){
                let viewIdx = this.getAttribute('subSeq');
                // console.log("viewIdx====?" + viewIdx);
                in_visuals.forEach(function(thsIdx, index){
                    if (index == viewIdx) {
                        fade('in', 500, thsIdx);
                    } else {
                        fade('out', 500, thsIdx);
                    }
                });
                visual_cons.forEach(function (thsIdx){
                    if(thsIdx.getAttribute('subSeq') == viewIdx){
                        thsIdx.classList.add('on');
                    } else {
                        thsIdx.classList.remove('on');
                    }
                });
            }
        });
    });

    
});