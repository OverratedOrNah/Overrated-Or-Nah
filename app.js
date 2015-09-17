var objects = [];
var id;
var u_list;
var o_list;

function random(){
	var rand = objects[Math.floor(Math.random() * objects.length)];
	$('.img').addClass('animated rollIn');
	$('.img').attr('src', rand.Img);
	$('.name').html(rand.Name).attr('id', rand.ID);
}

function rate(id, rate){

	if (id){
		var Point = Parse.Object.extend("Ratings");
		var point = new Point();
		point.id = id;
		point.increment(rate);
		point.save(null, {
			success: function(){
				setTimeout(function(){
					$('.img').removeClass('animated rollIn rollOut');
					random();
				},500);
			}
		});
	}else{
		setTimeout(function(){
			$('.img').removeClass('animated rollIn rollOut');
			random();
		},500);
	}
}

function removeExtras(){

}

function goBack(){
	window.location.href='index.html';
}

$(function(){
	Parse.initialize("m27szeyNRqyvfN4c5Wv8vq4VhiXUxGnSigHq6GPv", "QC369b83GOFzlKLTdRoBy7aITeavck8c2c5KS0d8");

	var Ratings = Parse.Object.extend("Ratings");
	var query = new Parse.Query(Ratings);
	query.find().then(function(results){
		for (i = 0; i < results.length; i++) {

			var img;
			if (results[i].has("Image")){
				img = results[i].get("Image").url();
			}else{
				img = 'ace.jpg';
			}

			var obj = {
				ID: results[i].id,
				Name: results[i].get("Name"),
				Category: results[i].get("Category"),
				Img: img,
				Overrated: results[i].get("Overrated"),
				Underrated: results[i].get("Underrated")
			};

			objects.push(obj);
		}
	}).then(function(){
		random();
	}).then(function menu(){
		$('.menu-trigger').click(function(){
			window.location.href='index.html';
		});
	}).then(function rankings(){
		for (i = 0; i < objects.length; i++) {
			//Overrated
			var o_item = 	"<li class='overrated--li "+objects[i].Category+"--li'>";
			o_item +=		"<span class='name--li'>"+objects[i].Name+"</span>";
			o_item +=		"</li>";

			$('.overrated-list').prepend(o_item);

			//Underrated
			var u_item = 	"<li class='underrated--li "+objects[i].Category+"--li'>";
			u_item +=		"<span class='name--li'>"+objects[i].Name+"</span>";
			u_item +=		"</li>";

			$('.underrated-list').prepend(u_item);
		}
	}).then(function sort(){
		var options = {
			valueNames: [ 'rating--li' ]
		};

		u_list = new List('UL', options);
		o_list = new List('OL', options);
		u_list.sort('rating--li', { order: "desc" });
		o_list.sort('rating--li', { order: "desc" });

		removeExtras();
	});

	//Click handlers
	$('.overrated').click(function(){
		$('.img').addClass('animated rollOut');
		id = $('.name').attr('id');
		rate(id,'Overrated');
	});

	$('.underrated').click(function(){
		$('.img').addClass('animated rollOut');
		id = $('.name').attr('id');
		rate(id,'Underrated');
	});

	$('.dunno').click(function(){
		$('.img').addClass('animated rollOut');
		rate();
	});
});

function sortAll(){
	$('.rank_which').html('All');
	$('.buttons li').removeClass('selected');
	$('#All').addClass('selected');
	//
	$('.list-col li').show();
	u_list.sort('rating--li', { order: "desc" });
	o_list.sort('rating--li', { order: "desc" });

	removeExtras();
}

function sortPeople(){
	$('.rank_which').html('People');
	$('.buttons li').removeClass('selected');
	$('#People').addClass('selected');
	//
	$('.list-col li').hide();
	$('.People--li').show();
	u_list.sort('rating--li', { order: "desc" });
	o_list.sort('rating--li', { order: "desc" });

	removeExtras();
}


function sortTech(){
	$('.rank_which').html('Tech');
	$('.buttons li').removeClass('selected');
	$('#Tech').addClass('selected');
	//
	$('.list-col li').hide();
	$('.Tech--li').show();
	u_list.sort('rating--li', { order: "desc" });
	o_list.sort('rating--li', { order: "desc" });

	removeExtras();
}

function sortRestaurants(){
	$('.rank_which').html('Restaurants');
	$('.buttons li').removeClass('selected');
	$('#Restaurants').addClass('selected');
	//
	$('.list-col li').hide();
	$('.Restaurants--li').show();
	u_list.sort('rating--li', { order: "desc" });
	o_list.sort('rating--li', { order: "desc" });

	removeExtras();
}

function sortTrends(){
	$('.rank_which').html('Trends');
	$('.buttons li').removeClass('selected');
	$('#Trends').addClass('selected');
	//
	$('.list-col li').hide();
	$('.Trends--li').show();
	u_list.sort('rating--li', { order: "desc" });
	o_list.sort('rating--li', { order: "desc" });

	removeExtras();
}

function sortFashion(){
	$('.rank_which').html('Fashion');
	$('.buttons li').removeClass('selected');
	$('#Fashion').addClass('selected');
	//
	$('.list-col li').hide();
	$('.Fashion--li').show();
	u_list.sort('rating--li', { order: "desc" });
	o_list.sort('rating--li', { order: "desc" });

	removeExtras();
}

function sortPlaces(){
	$('.rank_which').html('Places');
	$('.buttons li').removeClass('selected');
	$('#Places').addClass('selected');
	//
	$('.list-col li').hide();
	$('.Places--li').show();
	u_list.sort('rating--li', { order: "desc" });
	o_list.sort('rating--li', { order: "desc" });

	removeExtras();
}

function sortOther(){
	$('.rank_which').html('Other');
	$('.buttons li').removeClass('selected');
	$('#Other').addClass('selected');
	//
	$('.list-col li').hide();
	$('.Other--li').show();
	u_list.sort('rating--li', { order: "desc" });
	o_list.sort('rating--li', { order: "desc" });

	removeExtras();
}

