const EnableDarkBtn = document.querySelector(".toggleBtn");
const AddToggle = document.getElementById("toggleaReflect");
const GlobalTag = document.querySelector(".container");
const textChange = document.getElementById("textChange");
EnableDarkBtn.addEventListener("click",function(){
    AddToggle.classList.toggle("circle-right");
    GlobalTag.classList.toggle("bgChange");
        
})