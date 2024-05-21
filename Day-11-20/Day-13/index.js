
let SelectItem = document.querySelectorAll("#QuizForm div");
const submitBtn = document.getElementById("submit");






submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    UserData();
})


function UserData(){

    const ans = "Narendra Modi"
    SelectItem.forEach((item)=>{
        item.addEventListener("click",function(data){
            let finalData = data.target.value;
            if(finalData){
                console.log("hello")
            }
            
        })
    })
}

