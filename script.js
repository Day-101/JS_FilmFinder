const data = {
  Title: "The Matrix",
  Year: "1999",
  Rated: "R",
  Released: "31 Mar 1999",
  Runtime: "136 min",
  Actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
  Awards: "Won 4 Oscars. Another 37 wins & 51 nominations.",
  BoxOffice: "$171,479,930",
  Country: "USA",
  DVD: "01 Jan 2009",
  Director: "Lana Wachowski, Lilly Wachowski",
  Genre: "Action, Sci-Fi",
  Language: "English",
  Metascore: "73",
  Plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
  Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  Production: "Village Roadshow Prod., Silver Pictures",
  Rated: "R",
  Ratings: [{
    Source: "Internet Movie Database",
    Value: "7.9/10"}],
  Released: "31 Mar 1999",
  Response: "True",
  Runtime: "136 min",
  Title: "The Matrix",
  Type: "movie",
  Website: "N/A",
  Writer: "Lilly Wachowski, Lana Wachowski",
  Year: "1999",
  imdbID: "tt0133093",
  imdbRating: "8.7",
  imdbVotes: "1,693,504",
} 

function addMovieCard (data) {
  let title = data.Title
  let released = data.Released
  let posterUrl = data.Poster
  let cardGroup = document.querySelector('#card-movie-group')
  console.log(title);
  console.log(released);
  console.log(posterUrl);
  console.log(cardGroup);

  let newDiv = document.createElement('div');
  newDiv.classList.add('card-movie')
  cardGroup.appendChild(newDiv)

  let newImg = document.createElement('img');
  newImg.src = posterUrl;
  newDiv.appendChild(newImg)
  
  let underDiv = document.createElement('div');
  underDiv.classList.add('movie-infos')
  newDiv.appendChild(underDiv)

  let newH2 = document.createElement('h2');
  newH2.classList.add("text-primary");
  newH2.textContent = title;
  underDiv.appendChild(newH2);
  
  let newSpan = document.createElement('span');
  newSpan.textContent = released;
  underDiv.appendChild(newSpan);
  
  let newBtn = document.createElement('button');
  newBtn.classList.add("btn", "btn-outline-primary");
  newBtn.textContent = "Read more";
  underDiv.appendChild(newBtn);
}

addMovieCard(data)




// document.querySelector('#form').addEventListener('submit', function(e){
//   let apiKey = "631b422";
//   let search = document.querySelector('#search')
//   let url = "http://www.omdbapi.com/?t="+search.value+"&apikey="+apiKey;


//   fetch(url)
//     .then(response => response.json()
//     .then(data => console.log(data))
//     .then(data => display(data)))
//   e.preventDefault()
// })

 