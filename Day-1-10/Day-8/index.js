const givetime = document.querySelector("#timeset");
let list = document.querySelectorAll(".right-bottom")
var Month = [
    "January",
    "February","March","April","May","June","July","August","September","October","November","December"
]
var Weeks =[
    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
];

let tempdate = new Date();
let tempyear = tempdate.getFullYear();
let tempmonth = tempdate.getMonth()
let tempday = tempdate.getDay();

const date = new Date(tempyear,tempmonth,tempday + 10 ,15,30,25);
const futureTime = date.getTime();
const G_year = date.getFullYear();
const G_month = Month[date.getMonth()];
const G_date = date.getDate();
const G_day = Weeks[date.getDay()];
let G_hour = date.getHours();
let G_minutes = date.getMinutes();
let G_seconds =date.getSeconds();

// console.log(G_year,G_month,G_day,G_hour,G_minutes,G_seconds);

givetime.textContent= `Giveway Ends on  ${G_day},${G_date} ${G_month} ${G_year} ${G_hour}:${G_minutes}`



function getRemainingTime(){

    const today = new Date().getTime();
    const t  = futureTime - today;
    // calculate timing
    //1s = 1000ms 
    //1 minutes = 60s = 60*1000
    //1hr = 60m = 60*60*1000
    //1day = 24hr = 24*60*60*1000

    const oneday = 24*60*60*1000   
    const onehour = 60*60*1000;
    const oneminute = 60*1000;
    let days= t/oneday;
    days= Math.floor(days);
    let hours= Math.floor((t % oneday)/onehour);
    let minutes = Math.floor((t % onehour)/ oneminute);
    let seconds = Math.floor((t % oneminute)/1000)
     
    function format(item){
        if(item<10){
            return (item = `0${item}`);
        }
        return item;
    }


    list.forEach((e)=>{
        e.innerHTML=
        `<span>${format(days)}<span>Days</span> </span>
        <span>${format(hours)}<span>Hours</span> </span>
        <span>${format(minutes)}<span>Mins</span> </span>
        <span>${format(seconds)}<span>Secs</span> </span>`
    })
}

getRemainingTime();


    
setInterval(getRemainingTime,1000)
    


