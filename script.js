let searchButton = document.querySelector("button[type='submit']");
const APIKEY = "631b422";
let popup = document.getElementById("popup");
let closeBtn = document.getElementById("close_btn");

const fetchOMDbSearch = (title) => {
	return fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${title}&type=movie`)
		.then(data => data.json())
		.catch(error => console.error(error));
}

const fetchOMDbMovie = (id) => {
	return fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${id}`)
		.then(data => data.json())
		.catch(error => console.error(error));
}

async function onLearnMoreClick(event) {
	event.preventDefault();
	let popup = document.getElementById("popup");
	popup.style.display = "flex";
	let movie = await fetchOMDbMovie(this.id);
	let poster = document.getElementById("popup-poster");
	let title = document.getElementById("popup-title");
	let plot = document.getElementById("popup-plot");
	let date = document.getElementById("popup-date");
	let genres = document.getElementById("popup-genres");
	let ratings = document.getElementById("popup-ratings");

	poster.src = movie.Poster
	title.innerHTML = movie.Title;
	plot.innerHTML = movie.Plot;
	date.innerHTML = movie.Released;
	genres.innerHTML = movie.Genre;
	if (movie.Ratings && movie.Ratings.length >= 1){
		ratings.innerHTML = `${movie.Ratings[0].Source} : ${movie.Ratings[0].Value}`
	}

	let closeBtn = document.getElementById("close_btn");
	closeBtn.addEventListener("click", function(){
		popup.style.display = "none";
	})
}

async function updateList() {
	let list = document.getElementById("card-movie-group");
	let searchInput = document.getElementById("search");
	let result = await fetchOMDbSearch(encodeURIComponent(searchInput.value));
	
	result.Search.forEach(data => {
    let title = data.Title
    let released = data.Year
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
      newSpan.textContent = "("+released+")";
    }
    underDiv.appendChild(newSpan);
    
    let newBtn = document.createElement('button');
    newBtn.classList.add("btn", "btn-outline-primary");
    newBtn.id = id;
    newBtn.textContent = "Read more";
    underDiv.appendChild(newBtn);
	})

	let buttons = list.querySelectorAll(".btn");
	buttons.forEach(button => {
		button.addEventListener("click", onLearnMoreClick);
	})
}

searchButton.addEventListener("click", updateList);
closeBtn.addEventListener("click", function(){
	popup.style.display = "none";
})

window.addEventListener("click", function(event){
	if (event.target == popup){
		popup.style.display = "none";
	}
})