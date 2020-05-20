var mongoose	=require("mongoose");
var Campground 	=require("./models/campgrounds");
var Comment 	=require("./models/comments");

var data=[
	{
		name:"Tso Moriri Lake, Ladakh", 
	 	image:"https://www.holidify.com/images/cmsuploads/compressed/640px-Tsomoriri_Lake_DSC4010_20190212171119.jpg",
	 	description:"This is one of the best campsite to visit"
	},
	{
		name:"Tso Moriri Lake, Ladakh", 
	 	image:"https://www.holidify.com/images/cmsuploads/compressed/640px-Tsomoriri_Lake_DSC4010_20190212171119.jpg",
	 	description:"This is one of the best campsite to visit"
	},
	{
		name:"Tso Moriri Lake, Ladakh", 
	 	image:"https://www.holidify.com/images/cmsuploads/compressed/640px-Tsomoriri_Lake_DSC4010_20190212171119.jpg",
	 	description:"This is one of the best campsite to visit"
	}
];

function seedDB(){
	//Remove all campgrounds
	Campground.remove({},function(err) {
		if(err)
			console.log(err);
		console.log("removed")
		//add a few campgrounds
		
			})
		
	//add comments
}

module.exports=seedDB;
