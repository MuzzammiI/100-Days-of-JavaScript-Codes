const cityName = document.getElementById("cityvalue");
const moveinDate = document.getElementById("movein");
const moveoutDate = document.getElementById("moveout");
const guestNo = document.querySelector(".right-l p");
let tShow = document.getElementById("text-show");
const btn = document.getElementById("searchBtn");
const Incbtn= document.getElementById("Inc")
const Decbtn= document.getElementById("Dec")
let value=0;
const popup = document.querySelector(".popup")

Incbtn.addEventListener("click",function(){
    value++;
    guestNo.innerHTML =value;

})
Decbtn.addEventListener("click",()=>{
    if(value<1){
        return 0;
        
    }
    else{   
        value--;
        guestNo.innerHTML=value;
    }
})


btn.addEventListener("click",function(){
    if(cityName.value < 1 ){
        popup.classList.toggle("hide")
        setTimeout(()=>{
            popup.classList.add("hide");
        },2000);
        guestNo.innerHTML=0
    }
    else{
        tShow.classList.add("show");
        let ihtml=" ";
    ihtml +=
    `
    <p>City<span> ${cityName.value}</span></p>
    <p>Movein YY/MM/DD -<span>   ${moveinDate.value}</span></p>
    <p>Moveout YY/MM/DD -<span>  ${moveoutDate.value}</span></p>
    <p>Geust -<span>  ${guestNo.innerHTML}</span></p>

    `
    tShow.innerHTML=ihtml;
    }
    
})




