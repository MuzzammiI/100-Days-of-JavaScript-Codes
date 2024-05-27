const generateIdText = document.getElementById("generateIdText");
const generateId = document.getElementById("generateId");
const len = document.querySelector(".lengthId");
const passwordBtn = document.getElementById("passGenbtn");

function GenerateId(length) {

    if(length>0 &&length<40){
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
    return result;
        
    }
    else{
        return 'length must be less than 50';
    }

}

generateId.addEventListener("click",function(){
    const idLength = len.value;
    const dataGet = GenerateId(idLength);
    generateIdText.innerText = dataGet;
    generateIdText.style.display="block";
    len.value='';
})



function GeneratePassword(length){
    if(length>0 &&length<40){
        let StorPass ='';
    const pExpression = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const pExpression2 = "!@#$%^&*()_+-=[]{}|;':\",./<>?';"
    const fullExp = pExpression2 + pExpression ;
    const charactersLength = pExpression.length;
    let counter = 0;
    while (counter < length) {
        StorPass += fullExp.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return StorPass;
    }
    else{
        return 'length must be less than 50';
    }
    
}
passwordBtn.addEventListener("click",function(){
    const passLen = document.querySelector(".passGenInput")
    const passText = document.getElementById("passText")
    const idLength = passLen.value;
    const dataGet = GeneratePassword(idLength);
    passText.innerHTML = dataGet;
    passText.style.display="block";
    passLen.value='';
})