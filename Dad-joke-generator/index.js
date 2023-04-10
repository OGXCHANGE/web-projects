const btnEl = document.getElementById("btn");
const jokeEl =document.getElementById("joke");


const apiKey = "2qR66bQG9/Jiv+1fDobcMg==WzbTpp5RjOhhO42J";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try { 
    jokeEl.innerText = "updating....";
    btnEl.disabled = true;
    btnEl.innerText = "loading...";
   const response = await fetch(apiURL, options);
   const data = await response.json();

   btnEl.disabled = false;
   btnEl.innerText = "TELL ME A JOKE";

   jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";
        console.log(error);
    }
        
    }

btnEl.addEventListener("click", getJoke);