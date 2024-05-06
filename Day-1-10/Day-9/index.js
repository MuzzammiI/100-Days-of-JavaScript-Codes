let userInput = document.querySelector(".box-wrapper input");
const Addbtn = document.querySelector(".box-wrapper button");
const listItem = document.querySelector(".item-list");
const updateBtn = document.querySelector("#update")
const alertMessage = document.querySelector(".alert-message span");
const id = new Date().getTime();


let icons = {
  deleteIcon: "./iconsImg/bin.png",
  editIcon: "./iconsImg/pen.png",
};

let deleteBtn = icons.deleteIcon;
let editBtn = icons.editIcon;

function showItem(e) {
  console.log(e);
}

//Item list Add
function addItem(item) {
  let list = document.createElement("div");
  list.innerHTML = `
   <span>${item}</span>

   <div class="btn">
    <img src='${editBtn}' id="edit" alt="Edit-Btn" >
    <img src='${deleteBtn}' id="delete" alt="Delete-Btn">

    </div>
`;
  list.classList.add("list-box");
  let editbutton = list.children[1].children[0];
  let deletebutton = list.children[1].children[1];
  
  editbutton.addEventListener("click",function(e){
    let editItemFind = e.target.parentElement.parentElement.children[0].textContent;
    userInput.value += editItemFind;
    updateBtn.style.display="block";

    // updateBtn.addEventListener("click",function(e){
    //     listItem.textContent += userInput.value
        
        
    // })
    // console.log(editItemFind)
  })
  deletebutton.addEventListener("click",function(e){
    const itemfind= e.target.parentElement.parentElement
    itemfind.innerHTML='';
    userInput.value='';
    updateBtn.style.display="none";

  })


  return list;
}

  





//Adding item
Addbtn.addEventListener("click", function () {
  let userInputValue = userInput.value;

  if (userInputValue === "") {
    alertMessage.style.display = "block";
  } else {
    listItem.classList.add(id);
    listItem.appendChild(addItem(`${userInputValue}`));
    userInput.value = "";
  }
});

//Check item is empty or not
function RemovealertM() {
  alertMessage.style.display = "none";
}
setTimeout(RemovealertM, 2000);


