var downItem = document.getElementById("downItem");
var f_history = document.getElementById("history");
const f_vision = document.getElementById("vision");
const f_goal = document.getElementById("goal");
var leftImg = document.getElementById("left");
let tabDetailsObj = [
  {
    title: "History",
    desc: "This is history of tab and this can show only details about this content.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illum voluptatum animi doloribus vel veniam a tempora nulla, laudantium magni",
    Image:
      "https://cdn.pixabay.com/photo/2022/07/23/16/06/jellyfish-7340188_640.jpg",
  },
  {
    title: "Vision",
    desc: "This is Vision of tab and this can show only details about this content.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illum voluptatum animi doloribus vel veniam a tempora nulla, laudantium magni",
    Image:
      "https://cdn.pixabay.com/photo/2020/07/10/04/06/pink-algae-5389441_640.jpg",
  },
  {
    title: "Goal",
    desc: "This is Goal of tab and this can show only details about this content.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illum voluptatum animi doloribus vel veniam a tempora nulla, laudantium magni",
    Image:
      "https://cdn.pixabay.com/photo/2024/04/25/17/19/ai-generated-8720322_640.jpg",
  },
];

f_history.addEventListener("click", function () {

  downItem.innerHTML = `
  <p>${tabDetailsObj[0].title}</p>
  <span>${tabDetailsObj[0].desc}</span>
  `;
  leftImg.innerHTML = `
  <img src=${tabDetailsObj[0].Image} alt="">
  `;
  
});

f_vision.addEventListener("click", function () {
  downItem.innerHTML = `
  <p>${tabDetailsObj[1].title}</p>
                <span>${tabDetailsObj[1].desc}</span>
  `;
  leftImg.innerHTML = `
  <img src=${tabDetailsObj[1].Image} alt="">
  `;
});

f_goal.addEventListener("click", function () {
  downItem.innerHTML = `
  <p>${tabDetailsObj[2].title}</p>
                <span>${tabDetailsObj[2].desc}</span>
  `;
  leftImg.innerHTML = `
  <img src=${tabDetailsObj[2].Image} alt="">
  `;
});
