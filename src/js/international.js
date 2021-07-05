document.addEventListener("DOMContentLoaded", function () {
    let visual_cons = document.querySelectorAll('.visual_con');
    let in_visuals = document.querySelectorAll('.in_visual');

    let num = 1;
    let timer;
    let next;

    // ** FADE OUT FUNCTION **
    function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    };

    // ** FADE IN FUNCTION **
    function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    };


    visual_cons.forEach(visual_con => {
        visual_con.addEventListener("click",function(){
            if(this.getAttribute('subSeq')){
                let viewIdx = this.getAttribute('subSeq');
                // console.log("viewIdx====?" + viewIdx);
                in_visuals.forEach(function(thsIdx, index){
                    if (index == viewIdx) {
                        //fade('in', 500, thsIdx);
                        // fadeIn(thsIdx);
                        fadeIn(thsIdx, "block");
                    } else {
                        fadeOut(thsIdx);
                        // fadeOut(thsIdx);
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