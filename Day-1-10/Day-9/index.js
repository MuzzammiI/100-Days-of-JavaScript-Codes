let userInput = document.querySelector(".box-wrapper input");
const Addbtn = document.querySelector(".box-wrapper button");
const listItem = document.querySelector(".item-list");
const updateBtn = document.querySelector("#update");
const alertMessage = document.querySelector(".alert-message");
const id = new Date().getTime();

let icons = {
  deleteIcon: "./iconsImg/bin.png",
  editIcon: "./iconsImg/pen.png",
};

let deleteBtn = icons.deleteIcon;
let editBtn = icons.editIcon;



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

  editbutton.addEventListener("click", function (e) {
    let editItemFind =
      e.target.parentElement.parentElement.children[0].textContent;
    userInput.value += editItemFind;
    updateBtn.style.display = "block";
  });
  deletebutton.addEventListener("click", function (e) {
    const itemfind = e.target.parentElement.parentElement;
    itemfind.innerHTML = "";
    userInput.value = "";
    updateBtn.style.display = "none";
  });

  return list;
}

//Adding item
Addbtn.addEventListener("click", function () {
  let userInputValue = userInput.value;

  if (userInputValue === "") {
   showAlert();
   setTimeout(RemovealertM, 2000);


  } 
  else {
    listItem.classList.add(id);
    listItem.appendChild(addItem(`${userInputValue}`));
    userInput.value = "";
  }
});







function Update(e) {
  updateBtn.addEventListener("click", function (e) {
    let updatelist = listItem.children[1];
    let addingInput = userInput.value;
  let listBox = document.querySelector(".list-box span");
  listBox.textContent = addingInput
  userInput.value = '';

  
  });
}
Update();




//Alert Messgae show
function showAlert(){
  alertMessage.style.display="block";
}
//Alert Message Rmove 
function RemovealertM() {
  alertMessage.style.display = "none";
}