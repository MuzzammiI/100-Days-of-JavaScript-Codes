// const btn = document.getElementById("S-btn");
const UserInput = document.getElementById("searchBtn");
const btn = document.getElementById("btn")
const box = document.querySelector(".img-box");

const ImgBulk = [
  {
    id: 1,
    name: "img1",
    img: "https://cdn.pixabay.com/photo/2024/04/10/08/16/mountains-8687536_640.jpg",
  },
  {
    id: 2,
    name: "img2",
    img: "https://cdn.pixabay.com/photo/2023/11/18/19/06/futuristic-home-8397004_640.jpg",
  },
  {
    id: 3,
    name: "img3",
    img: "https://cdn.pixabay.com/photo/2024/05/15/08/23/bird-8763079_640.jpg",
  },
  {
    id: 4,
    name: "img4",
    img: "https://cdn.pixabay.com/photo/2021/07/24/07/25/chow-chow-6488849_640.jpg",
  },
  {
    id: 5,
    name: "img5",
    img: "https://cdn.pixabay.com/photo/2020/08/22/17/51/boat-5509027_640.jpg",
  },
  {
    id: 6,
    name: "img6",
    img: "https://cdn.pixabay.com/photo/2023/10/11/04/08/water-lilies-8307632_640.jpg",
  },
  {
    id: 7,
    name: "img7",
    img: "https://cdn.pixabay.com/photo/2024/05/05/19/13/flowers-8741784_640.jpg",
  },
];

ImgBulk.forEach((item,index)=>{
    box.innerHTML +=
    `
    <img src="${item.img}" alt="${item.name}" >
    `
})

btn.addEventListener("click",function(){
  const userValue = UserInput.value.toUpperCase();
  ImgBulk.forEach((e)=>{
    // console.log(e.name.toUpperCase());
    if(e.name.toUpperCase().indexOf(userValue)> -1){
      box.innerHTML =`
            <img src="${e.img}" alt="${e.name}" >
              `
              userValue += " ";
    }
    else{
      box.innerHTML ="Data Not Found";
    }
  })
})