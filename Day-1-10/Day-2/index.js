let value=0;
const htmlvalue=document.getElementById("value");
const Inc=document.getElementById("Inc");
const Dec =document.getElementById("Dec");
const Res =document.getElementById("Res");



Inc.addEventListener("click",()=>{
    value++;
    htmlvalue.innerHTML=value;
})
Dec.addEventListener("click",()=>{
    if(value<1){
        Dec.style.display="hidden";
        htmlvalue.innerHTML="Please Enter the Positive value"
        
    }
    else{
        value--;
        htmlvalue.innerHTML=value;
    }
})
Res.addEventListener("click",()=>{
    value=0;
    htmlvalue.innerHTML=value;
})