const getData = (search, callback)=>{
	const settings = {
		URL: "https://www.googleapis.com/youtube/v3/search",
		key: "AIzaSyCJzUJFzbjfByeeiDL0zjIrABvBZvqwTeY",
		data: {
			q: searchTerm,
			r: "json",
			part: "snippet"
		},
		dataType: 'json',
		type: 'GET',
		// success: callback
	};
	$.ajax(settings);
}
	
	const sendRequest = ()=>{
		console.log("is this still working?");
		const q = $('.search').val();
		const request = gapi.client.youtube.search.list({
			q: searchTerm,
			r: 'json',
			part: 'snippet'
		});

	}

	const key = ()=>{
		 gapi.client.setApiKey("AIzaSyCJzUJFzbjfByeeiDL0zjIrABvBZvqwTeY");
 		 gapi.client.load("youtube", 'v3', function() {
 		 console.log("is this working?");
    	sendRequest();

	})







// const state = [{
// 	part: "snippet",
// 	key: "AIzaSyCJzUJFzbjfByeeiDL0zjIrABvBZvqwTeY",
// 	q: "search",
// 	youtubeURL: "https://www.googleapis.com/youtube/v3/search",
// 	key: "AIzaSyCJzUJFzbjfByeeiDL0zjIrABvBZvqwTeY"
// },
// 	snippet = {
// 		title: "string"
// 	}
// 	];

const getDataFromApi = (searchTerm, callback)=>{
	const query = { 
	part: "snippet",
	key: "AIzaSyCJzUJFzbjfByeeiDL0zjIrABvBZvqwTeY",
	q: search 
	}
	$.getJSON(state[0].youtubeURL, state[0].key, callback);
}

const displayData = (data)=>{
	const results = "";

	if(data.search){
		results += "<p>+item.title</p>";
	}else{
		results += "<p>no results</p>";
	}

	$(".results").hmtl(results);
}




$(function() {
	key();
	// $('form.search').submit((event)=>{
	// 	event.preventDefault();
	// 	const search = $(event.target).closest('form').val();
	// 	console.log(search);
	// })



})