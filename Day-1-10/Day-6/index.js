var toggleBtn = document.getElementById("toggleBtn");
let content = document.getElementById("content")
var addbtn = document.getElementById("addbtn")
var closebtn = document.getElementById("closebtn")


toggleBtn.addEventListener("click",function(){
    content.classList.toggle("content");
    addbtn.classList.toggle("none");
    closebtn.classList.toggle("block");
    
})