
const submitBtn = document.getElementById("submit");
const answer = "Narendra Modi";
const popitem = document.querySelector(".popup")
const correct = document.getElementById("correct")
const wrong = document.getElementById("wrong")




submitBtn.addEventListener("click",UserData)

function UserData(e){
e.preventDefault();
let SelectItem = document.querySelectorAll("#QuizForm div");


    SelectItem.forEach((item)=>{
        item.addEventListener("click",function(data){
            let finalData = data.target.value;
            if(answer===finalData){
                popitem.classList.add("show")
                correct.classList.add("show")
                wrong.classList.remove("show");
                durationTimme();
            }
            else{
                popitem.classList.add("show")
                correct.classList.remove("show");
                wrong.classList.add("show")
                durationTimme();
            }
        })
    })
    
}



const durationTimme = ()=>{
setTimeout(()=>{
    popitem.classList.remove("show");
},2000)

}