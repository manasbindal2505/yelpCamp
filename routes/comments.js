var express = require("express");
var router  = express.Router({mergeParams: true});
var Campground = require("../models/campgrounds");
var Comment = require("../models/comments");

//COMMENTS NEW
router.get("/new",isLoggedIn,function(req,res){
	//find campground by id
	Campground.findById(req.params.id , function(err,campground){
		if(err)
			console.log(err)
		else
			res.render("comments/new",{campground:campground});
	})
});

//COMMENTS CREATE
router.post("/",isLoggedIn,function(req,res){
	//lookup campground using index
	Campground.findById(req.params.id,function(err,campground){
		if(err){
			console.log(err);
			redirect("/campgrounds");
		}
		else{
			//create new comment
			Comment.create(req.body.comment,function(err,comment){
				if(err)
					console.log(err)
				else
					//add username and id to the COMMENTS
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					//save comment
					comment.save();
					campground.comments.push(comment)
					campground.save()
					//redirect to campground show page
					res.redirect("/campgrounds/"+campground._id)
			})
		}
	})
});

router.get("/:comments_id/edit",function(req,res){
	res.render("comments/edit",{campground_id:req.params.id});
});

//middleware
function isLoggedIn(req,res,next) {
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

module.exports = router;