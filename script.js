const results = [
  {
    "Title": "The Matrix",
    "Year": "1999",
    "imdbID": "tt0133093",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    "Title": "The Matrix Reloaded",
    "Year": "2003",
    "imdbID": "tt0234215",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    "Title": "The Matrix Revolutions",
    "Year": "2003",
    "imdbID": "tt0242653",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "Title": "The Matrix Revisited",
    "Year": "2001",
    "imdbID": "tt0295432",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTIzMTA4NDI4NF5BMl5BanBnXkFtZTYwNjg5Nzg4._V1_SX300.jpg"
  },
  {
    "Title": "Enter the Matrix",
    "Year": "2003",
    "imdbID": "tt0277828",
    "Type": "game",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWM3MDU2MWQtYjdlNC00NDBlLTkyNGMtNjdhYjdlNTdiNTFlXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg"
  },
  {
    "Title": "The Matrix: Path of Neo",
    "Year": "2005",
    "imdbID": "tt0451118",
    "Type": "game",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGFiNGU4MjEtODM2ZC00OTg0LThkNmEtZTBlN2FkMmFjOWYzXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg"
  },
  {
    "Title": "Armitage III: Dual Matrix",
    "Year": "2002",
    "imdbID": "tt0303678",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTUwOTY3Mjg1MF5BMl5BanBnXkFtZTcwODI2MTAyMQ@@._V1_SX300.jpg"
  },
  {
    "Title": "CR: Enter the Matrix",
    "Year": "2009",
    "imdbID": "tt1675286",
    "Type": "game",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTExMzY3NTQ1NjleQTJeQWpwZ15BbWU3MDAyMjk2NzM@._V1_SX300.jpg"
  },
  {
    "Title": "Sex and the Matrix",
    "Year": "2000",
    "imdbID": "tt0274085",
    "Type": "movie",
    "Poster": "N/A"
  },
  {
    "Title": "A Glitch in the Matrix",
    "Year": "2021",
    "imdbID": "tt9847360",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWRhNGY3NGQtMDAxMS00YjY2LTgzOTUtZjljZmUyYWQwMGI2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
  }
]
const results1 = {
  "Title": "The Matrix",
  "Year": "1999",
  "Rated": "R",
  "Released": "31 Mar 1999",
  "Runtime": "136 min",
  "Genre": "Action, Sci-Fi",
  "Director": "Lana Wachowski, Lilly Wachowski",
  "Writer": "Lilly Wachowski, Lana Wachowski",
  "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
  "Plot": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Won 4 Oscars. Another 37 wins & 51 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "8.7/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "88%"
    },
    {
      "Source": "Metacritic",
      "Value": "73/100"
    }
  ],
  "Metascore": "73",
  "imdbRating": "8.7",
  "imdbVotes": "1,693,504",
  "imdbID": "tt0133093",
  "Type": "movie",
  "DVD": "01 Jan 2009",
  "BoxOffice": "$171,479,930",
  "Production": "Village Roadshow Prod., Silver Pictures",
  "Website": "N/A",
  "Response": "True"
}
const resultForDisplay = {
  "Title": "The Matrix",
  "Year": "1999",
  "Rated": "R",
  "Released": "31 Mar 1999",
  "Runtime": "136 min",
  "Genre": "Action, Sci-Fi",
  "Director": "Lana Wachowski, Lilly Wachowski",
  "Writer": "Lilly Wachowski, Lana Wachowski",
  "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
  "Plot": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Won 4 Oscars. Another 37 wins & 51 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "8.7/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "88%"
    },
    {
      "Source": "Metacritic",
      "Value": "73/100"
    }
  ],
  "Metascore": "73",
  "imdbRating": "8.7",
  "imdbVotes": "1,693,504",
  "imdbID": "tt0133093",
  "Type": "movie",
  "DVD": "01 Jan 2009",
  "BoxOffice": "$171,479,930",
  "Production": "Village Roadshow Prod., Silver Pictures",
  "Website": "N/A",
  "Response": "True"
}

const apiKey = "631b422";
const url = "http://www.omdbapi.com/?apikey="+apiKey;

function display(data){
  console.log('let Display !');
  let title = data.Title
  let released = data.Released
  let posterUrl = data.Poster
  let cardGroup = document.querySelector('#card-movie-group')
  let id = data.imdbID

  let newDiv = document.createElement('div');
  newDiv.classList.add('card-movie')
  cardGroup.appendChild(newDiv)
  
  let newImg = document.createElement('img');
  if (posterUrl == 'N/A'){
    newImg.src = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  }else{
    newImg.src = posterUrl;
  }
  newDiv.appendChild(newImg)
  
  let underDiv = document.createElement('div');
  underDiv.classList.add('movie-infos')
  newDiv.appendChild(underDiv)

  let newH2 = document.createElement('h2');
  newH2.classList.add("text-primary");
  newH2.textContent = title;
  underDiv.appendChild(newH2);
  
  let newSpan = document.createElement('span');
  if (released == "N/A"){
    newSpan.textContent = "Released unknown";
  }else{
    newSpan.textContent = released;
  }
  underDiv.appendChild(newSpan);
  
  let newBtn = document.createElement('button');
  newBtn.classList.add("btn", "btn-outline-primary");
  newBtn.id = id;
  newBtn.textContent = "Read more";
  underDiv.appendChild(newBtn);
  console.log('Displayed');
}

document.querySelector('#form').addEventListener('submit', function(e){
  let search = document.querySelector('#search')
  let urlSearchList = url+"&s="+search.value+"&type=movie&type=series";
  console.log('Formulaire envoyé');
  callAPI1(urlSearchList)
  e.preventDefault()
})

async function callAPI1(url){
  console.log('call API 1');
  let response = await fetch(url)
  const data = await response.json()
  
  if (response.ok) {
    console.log(response.ok)
    process(data)
  } else {
    const responseError = {
      type: 'Error',
      message: result.message || 'Something went wrong',
      data: result.data || '',
      code: result.code || '',
    };
    const error = new Error();
    error.info = responseError;
    return (error);
  }
}

function process(results) {
  console.log('GO PROCESS !');
  for(i = 0; i < results.length; i++){
    let imdbID = results[i].imdbID
    let urlById = url+"&i="+imdbID;
    console.log(urlById);
    callAPI2(urlById)
  }
}
//process(results)

async function callAPI2(url){
  console.log('call API 2');
  let response = await fetch(url)
  const data = await response.json()
  console.log(response.ok);
  if (response.ok) {
    display(data)
  } else {
    
    const responseError = {
      type: 'Error',
      message: result.message || 'Something went wrong',
      data: result.data || '',
      code: result.code || '',
    };
    
    const error = new Error();
    error.info = responseError;
    
    return (error);
  }
}

// POP UP ----------------------------------
function popUp(event) {
  document.getElementById("popup").style.display = "flex";
}
// document.querySelector('.btn-outline-primary').addEventListener("click", popUp);
let backPop = document.getElementById("close1");
backPop.addEventListener('click', () => {
  document.getElementById("popup").style.display = "none";
});
//-------------------------POP UP END