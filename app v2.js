const state = {
	result: [],
	searchedFor: 'cats'
};

// const URL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCJzUJFzbjfByeeiDL0zjIrABvBZvqwTeY";

const createURL = (state)=>{
	const URL = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCJzUJFzbjfByeeiDL0zjIrABvBZvqwTeY&part=snippet&q=${state.searchedFor}`
	return URL;
}

const getData = (search, callback)=>{
	const settings = {
		s: search,
		r: 'json'
	}
	console.log($.getJSON(createURL(state)));
}

const displaySearchData = (data, state)=>{
	if(state.result){
		state.result.forEach((item)=>{
			state.result += "<p>item.title</p>"
		})
	}else{
		state.result += "<p>no results</p>"
	}
};



$(function(){

// createURL(state);
getData();

})