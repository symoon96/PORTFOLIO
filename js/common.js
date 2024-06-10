$(document).ready(function(){
    const cursor = $('.cursor');

    const canvas = document.getElementById("loadingBar");

    // 메뉴 열기/닫기
    menuAct();

    // 로딩 로고
    logoDraw();

    function logoDraw(){
        wallDraw();
        roofDraw();
        smokeDraw();
    }
    
    function wallDraw(){
        let wall = loadingBar.getContext("2d");
    
        if(canvas.getContext) {
            // 벽 중앙
            wall.fillStyle = "#5575b5"
            wall.beginPath();
            wall.moveTo(0,90);
            wall.lineTo(45,45);
            wall.lineTo(90,90);
            wall.fill();
    
            // 창문
            wall.fillStyle = "#ffffff";
            wall.fillRect(40, 60, 10, 10);
    
            // 벽 좌측
            wall.fillStyle = "#a17eb7"
            wall.beginPath();
            wall.moveTo(0,90);
            wall.lineTo(0,45);
            wall.lineTo(45,45);
            wall.fill();
    
            // 벽 우측
            wall.fillStyle = "#69cadd"
            wall.beginPath();
            wall.moveTo(90,90);
            wall.lineTo(90,45);
            wall.lineTo(45,45);
            wall.fill()
        }
    }
    
    function roofDraw(){
        let roof = loadingBar.getContext("2d");
    
        if(canvas.getContext) {
    
            // 지붕 좌측
            roof.fillStyle = "#a17eb7";
            roof.globalAlpha = 0.8;
            roof.beginPath();
            roof.moveTo(0,45);
            roof.lineTo(45,0);
            roof.lineTo(45,45);
            roof.fill()
    
            // 지붕 우측
            roof.fillStyle = "#69cadd";
            roof.globalAlpha = 0.8;
            roof.beginPath();
            roof.moveTo(90,45);
            roof.lineTo(45,0);
            roof.lineTo(45,45);
            roof.fill()
    
            // 굴뚝
            roof.fillStyle = "#69cadd";
            roof.globalAlpha = 0.45;
            roof.fillRect(75, 30, 15, 15);
        }
    }
    
    function smokeDraw(){
        let smoke = loadingBar.getContext("2d");
    
        // 도안 밑그림
        // if(canvas.getContext) {
    
            // // 연기3
            // smoke.fillStyle = "#69cadd";
            // smoke.globalAlpha = 0.45;
            // smoke.fillRect(86, 6, 4, 4);
    
            // // 연기2
            // smoke.fillStyle = "#69cadd";
            // smoke.globalAlpha = 0.45;
            // smoke.fillRect(74, 12, 8, 8);
    
            // // 연기1
            // smoke.fillStyle = "#69cadd";
            // smoke.globalAlpha = 0.45;
            // smoke.fillRect(84, 22, 6, 6);
    
        // }
    
        let x = 84;
        let y = 22;
        let w = 6;
        let h = 6;
        let clearX;
        let clearY;
        let clearW;
        let clearH;
        let preTime;
        let deltaTime = 0;
        let speed = 10;
    
        function animate(time){
            if(time == undefined) {
                time = 0;
            } else {
                deltaTime = (time - preTime) * 0.001;
            }
    
            preTime = time;
    
            smoke.clearRect(clearX, clearY, clearW, clearH);
    
            smoke.fillStyle = "#69cadd";
            smoke.fillRect(x, y, w, h);
    
            if(x > 75 && y >= 12){
                x-=1*deltaTime*speed;
                y-=1*deltaTime*speed;
                w+=0.2*deltaTime*speed;
                h+=0.2*deltaTime*speed;
            } else {
                x+=2*deltaTime*speed;
                y-=1*deltaTime*speed;
                w-=1*deltaTime*speed;
                h-=1*deltaTime*speed;
            }
    
            if(w <= 0){
                x = 84;
                y = 22;
                w = 6;
                h = 6;
            }
    
            // 범위치정 +- 오차
            clearX = x - 1
            clearY = y - 1
            clearW = w + 3
            clearH = h + 3
    
            requestAnimationFrame(animate);
        }
    
        animate();
    }

    // 마우스 커서 커스텀
    // $(window).mousemove(function(e){
    //     let mousePositionX = e.clientX;
    //     let mousePositionY = e.clientY;

    //     cursor.css({
    //         left:mousePositionX,
    //         top: mousePositionY
    //     })
    // });
});

$(window).on('load', function(){
    setTimeout(() => {
        $('.loading').fadeOut();
    }, 3000);
})

// 메뉴 열기/닫기
function menuAct(){
    menuBtn();
    menuToggle()
}

function menuBtn(){
    $(".btn-menu").click(function(){
        $(this).toggleClass("open");
    });
}

function menuToggle(){
    $(".btn-menu").click(function(){
        if($(this).hasClass('open')){
            $('.gnb').addClass('active')
        } else {
            $('.gnb').removeClass('active')
        }
    })
}

