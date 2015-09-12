Parse.Cloud.job("Reset", function(request, status) {
	Parse.Cloud.useMasterKey();
	var query = new Parse.Query("Ratings");
	query.each(function(review) {
		review.set('Overrated',0);
		review.set('Underrated',0);
		review.save();
	}).then(function(){
		status.success();
	});
});
