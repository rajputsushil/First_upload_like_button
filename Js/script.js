const Con =document.querySelector("#image");
const hearticon =document.querySelector("i");

Con.addEventListener('dblclick',function(){
    hearticon.style.transform ='translate(-50%,-50%) scale(4)'
    setTimeout(() => {
        hearticon.style.transform ='translate(-50%,-50%) scale(0)'        
    }, 1000);
})