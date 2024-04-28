const list = document.querySelector("ul")
const btnClose = document.getElementById("btn-close");
const btnOpen = document.getElementById("btn-open");
btnOpen.addEventListener("click",function(){
    list.classList.add("mob-nav-menu");
    list.classList.remove("full-nav-menu")
    btnOpen.style.display="none";
    btnClose.style.display="block";
    
    
})

btnClose.addEventListener("click",function(){
    window.location.reload(true);
    list.classList.add("full-nav-menu")
    list.classList.remove("mob-nav-menu");
    btnClose.style.display="none";
    btnOpen.style.display="block";



})

