Parse.Cloud.job("Reset", function(request, response) {
	Parse.Cloud.useMasterKey();
	var query = new Parse.Query("Ratings");
	query.find().then(function(reviews){
		for (var i = 0; i < reviews.length; i++) {
			reviews[i].set('Overrated',0);
			reviews[i].set('Underrated',0);
			reviews[i].save();
		}
	}).then(function(){
		response.success();
	});
});