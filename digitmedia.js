let buger=document.querySelector(".ham-buger");
let close=document.querySelector(".close");
let  btn=document.querySelector(".nav-btn");


buger.onclick=function(){
    if(btn.id=="open"){
        btn.id="";
        buger.innerHTML="<span></span> <span></span> <span></span> ";
    }else{
        btn.id="open";
        buger.innerHTML="x";
    }
}

const parallaxElement=document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove",event =>{
    for(let i=0,len = parallaxElement.length; i<len; i++){

        const movementx = (event.clientX/window.innerWidth) * Number('parallaxElement[i].dataset.parallaxspeed');
        const movementy = (event.clienty/window.innerHeight) * Number('parallaxElement[i].dataset.parallaxspeed');

        parallaxElement[i].getAnimations({
            transform: 'translate(${movementX}px,${movementY}px)'
        },{duration:500,fill:"forwards"});
    }
})
