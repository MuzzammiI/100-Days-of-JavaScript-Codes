
const eamilCheckSymbol =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const Form = document.getElementById("myForm")
const InputName = document.getElementById("name");
const InputEmail = document.getElementById("email");
const InputPassword = document.getElementById("password");

// const myemail = "www.mdmozammil@gmail.com"



myForm.addEventListener("submit",function(e){
e.preventDefault();
LoginSubmit(InputName.value,InputEmail.value,InputPassword.value);
});


//Check all attributes
function LoginSubmit (name,email,password) {
    EmailCheker(email);
    namechecker(name)
    PasswordChecker(password)
}


//Chekc Valid name 
const namechecker = (name)=>{
    if(name.length<1){
        document.getElementById("popName").classList.remove("hide");
        document.getElementById("popName").classList.add("show");

    }
}


//Check Email Valid or not
const  EmailCheker =  (data)=>{
    if(data !="" && eamilCheckSymbol.test(data)){
        console.log("email is validated")
    }
    else{
        document.getElementById("popEmail").classList.remove("hide");
        document.getElementById("popEmail").classList.add("show");
    }
}



//Check Password Strong or not
const PasswordChecker = (password)=>{
    let exp =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if(password !="" && exp.test(password)){
        console.log("Strong Password");
    }
    else{
        document.getElementById("popPassword").classList.remove("hide");
        document.getElementById("popPassword").classList.add("show");
    }
}


