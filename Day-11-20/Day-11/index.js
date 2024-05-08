//Takes Input value from user First & last Name
const f_name = document.getElementById("firstName");
const l_name = document.getElementById("lastName");
const userEmailLink = document.getElementById("rEmail")
const userGithubLink = document.getElementById("rGithub")
const userLinkedinLink = document.getElementById("rLinkedin")
const userLeetcode = document.getElementById("rLeetcode")
const userAddres = document.getElementById("b-address");



//R-template data
const r_fullName = document.getElementById("r-title");
const r_AllLinks = document.querySelectorAll("#AllLinks");
const r_address = document.getElementById("Address");


// console.log(r_fullName.textContent)


function GenerateCV(){
    r_fullName.textContent= f_name.value + l_name.value;
    r_AllLinks.forEach((e)=>{
        e.children[0].innerText = userEmailLink.value;
        e.children[1].innerText = userGithubLink.value;
        e.children[2].innerText = userLinkedinLink.value;
        e.children[3].innerText = userLeetcode.value;
        e.classList.add("sm-font")
    })
    r_address.textContent = userAddres.value;
}