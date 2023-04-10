const btnEl = document.getElementById("btn");

const apiURL ="https://api.quotable.io/random";
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");



async function getQuote(){
    try {
        quoteEl.innerText = "Getting quote......";
        authorEl.innerText = "Be patient";
    btnEl.disabled = true;
    btnEl.innerText = "loading...";
     const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor= data.author;

    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.disabled = false;
    btnEl.innerText = "GET ME A QUOTE";
    console.log(quoteContent);
        
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error occured try again later";
        authorEl.style.display = "none";
        btnEl.disabled = false;
        btnEl.innerText = "GET ME A QUOTE";
    }

}

getQuote();



btnEl.addEventListener("click", getQuote);