const appState = {
	rawResults: [],
	currentURL: "",
}

const getData = (searchTerm, callback) => {
	const URL = "https://www.googleapis.com/youtube/v3/search";
	const query = {
		part: "snippet",
		key: "AIzaSyCJzUJFzbjfByeeiDL0zjIrABvBZvqwTeY", //////////test later to see if it needs an order
		q: searchTerm,
		maxResults: 10,
	}
	$.getJSON(URL, query, callback);
}

const pushData = (state, data) => {
	state.results.push(data);
}

function store(data){  ////checks if there is data, if there is it sets our array in our app state to the data.
	if(data){
		appState.rawResults = data.items;
		console.log("is this being called?");
	}else {
		console.log("there's no data!");
	}
	console.log(appState.rawResults)
	render(appState);
}

const render = (state)=>{
	var resultElement = '';

  if (state.rawResults) {
    state.rawResults.forEach(function(item) {
     resultElement += `<div class="video"><h2> ${item.snippet.title} </h2>
     <a class="link" href="https://www.youtube.com/watch?v=${item.id.videoId}"><img class="thumbnail" src=${item.snippet.thumbnails.default.url}></a>
     <p>${item.snippet.description}</p></div>
     `;
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  $('.results').html(resultElement);
}

// const lightbox = (event, url)=>{
//     $('.videowrapper').toggleClass('hidden');
// 	const renderLightbox = `<iframe width="560" height="315" src="${url}" frameborder="0" allowfullscreen></iframe>`;
// 	$('.videowrapper').html(renderLightbox);
// }

const watchSubmit = ()=>{
	$('form.search').on('submit', (event)=>{
		event.preventDefault();
		const userSearch = $(event.target).children("input").val();
		getData(userSearch, store);
		console.log(userSearch);
	})
}


$(function(){
	watchSubmit();
	console.log(appState.rawResults);
	// $('.results').on('click', '.video', (event)=>{
	// 	const videoURL = $(event.target).closest('.link').attr('href');
	// 	console.log(videoURL);
	// 	// lightbox(event, videoURL);
	// 	console.log($(event.target).closest('.link').attr('href').text());
	// })
})