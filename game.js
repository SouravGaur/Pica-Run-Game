 score=0;
 cross = true;

 audio= new Audio('music.mp3');
 audiogo = new Audio('gameover.mp3');
 setTimeout(()=>{
    audio.play()
 },1000)
let scoreCont = document.querySelector("#scoreCont");
document.onkeydown = (e)=>{
    console.log("key code is:", e.keyCode);
    if(e.keyCode==38){
         pika = document.querySelector(".pika");
        pika.classList.add('animatePika');
        setTimeout(()=>{
            pika.classList.remove('animatePika');
        },700);
    }
    if(e.keyCode==39){
        pika = document.querySelector(".pika");
        pikaX = parseInt(window.getComputedStyle(pika,null).getPropertyValue('left'));
        pika.style.left = pikaX+112+"px";
    }
    if(e.keyCode==37){
        pika = document.querySelector(".pika");
        pikaX = parseInt(window.getComputedStyle(pika,null).getPropertyValue('left'));
        pika.style.left = pikaX-112+"px";
    }
    
}

setInterval(()=>{
     pika = document.querySelector('.pika');
     gameOver = document.querySelector('.gameOver');
     defeat = document.querySelector('.loose');
     obstacale = document.querySelector('.obstacale');
    px = parseInt(window.getComputedStyle(pika,null).getPropertyValue('left'));
    py =parseInt( window.getComputedStyle(pika,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacale,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacale,null).getPropertyValue('top'));

    offsetX= Math.abs(px-ox);
    offsetY= Math.abs(py-oy);
    // console.log(offsetX ,offsetY);
    if(offsetX<80 && offsetY<100){
    gameOver.style.visibility = 'visible';
    obstacale.classList.remove('obstacaleAni')
    setTimeout(()=>{
    pika.style.left=0;
    pika.style.visibility='hidden';
    defeat.style.visibility='visible'},100)
    audiogo.play();
    setTimeout(()=>{
        audiogo.pause();
        audio.pause();
    },1000);
  
    } 
    else if(offsetX<120 && cross){
        score +=1;
        console.log(score);
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;

        },1000);
        setTimeout(()=>{  aniDur = parseFloat(window.getComputedStyle(obstacale,null).getPropertyValue('left'));
            newDur = aniDur-0.1;
            obstacle.style.animatioDuration = newDur+'s';},500)
      
    }
},100);
function updateScore(score){
    scoreCont.innerHTML ="Your Score: "+ score;
}


