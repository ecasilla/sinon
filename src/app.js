function getRequest(searchTerm){
	var response;
	var url = 'https://www.googleapis.com/youtube/v3/search';
	var params = {
		part: 'snippet',
		key: 'AIzaSyAPtBEZ8pX-AVqXw_JMAXE9eHCsWi2GR-U',
		q: searchTerm,
		maxResults: 12
	}
 $.ajax({
    url:url,
    data:params,
    success:function(data){
		response = data;
		return
   }
 });
return response;
}
