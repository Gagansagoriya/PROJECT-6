{/* 
<div class="joke" id="joke">Joke is loading....</div>
<button id="jokeBtn" class="btn">Next Joke</button>
 */}

//  GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const genrateJokes = () =>{
    
    const setHeader = {
        headers : {
            Accept : "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com/',setHeader)
    .then( (res) => res.json())
    .then((data) =>{
        jokes.innerHTML = data.joke;
    }).catch((error) => {
        console.log(error);
    })
}
    

jokeBtn.addEventListener('click' ,genrateJokes);
genrateJokes();