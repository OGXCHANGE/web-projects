const btnEl = document.getElementById("btn");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name"); 
const animeContainerEl = document.querySelector(".anime-container");

const apiURL = "https://api.catboys.com/img";
async function getAnime (){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "loading...";
        animeNameEl.innerText ="updating.....";
        animeImgEl.src = "loading.svg";
        const response = await fetch(apiURL);
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "GET ANIME"
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist;
    } catch (error) {
        console.log(error);
        animeNameEl.innerText = "an error occured, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "GET ANIME"
    }

}
btnEl.addEventListener("click", getAnime);