`use strict`


//マウスストーカー
const stalker = document.getElementById('stalker'); 

document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX  + 'px, ' + e.clientY + 'px)';
});

//スクロールアクション
AOS.init({
    duration: 900 ,
    easing: 'ease',
    delay: 400,
});

    
