var title = document.getElementById("punchline");
var desc = document.getElementById("setup")
var jokestype = document.getElementById("type")

function GetRanodmJokes(){
    //Get API from joke-api-appspot.com
    const API  = fetch("https://official-joke-api.appspot.com/jokes/random")
    //Convet object to json format
    API.then((data)=>{
        const datafind = data.json();
        //finally get the data from json format into string format
        datafind.then((response)=>{
            const punchline = response.punchline
            const setup= response.setup
            const type = response.type;
            title.innerHTML=`${punchline}`;
            desc.innerHTML=`${setup}`;
            jokestype.innerHTML=`${type}`
        })
    }).catch((error)=>{
    console.error(error);
    })
}






