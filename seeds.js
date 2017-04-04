var  mongoose = require("mongoose"),
     Campground = require("./models/campground"),
     Comment = require("./models/comment")
 
var data = [
    {
         name: "Silk Hill", 
         image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg",
         description: "Ut cursus vestibulum elit vitae ornare. Duis eget imperdiet elit. Nulla ornare sagittis est ac porttitor. In mi est, consequat posuere ante non, elementum fringilla ipsum. Aliquam faucibus mollis sagittis. Nunc pulvinar, nulla quis fringilla accumsan, enim orci vehicula metus, a egestas sapien odio ac diam. Sed posuere fringilla erat. Quisque eu tortor non ipsum bibendum volutpat. Phasellus ornare lacus sed aliquet volutpat. Morbi euismod ultricies mauris, vel sodales purus aliquet at."
    },
     {
         name: "Granite Hill", 
         image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg",
         description: "Ut cursus vestibulum elit vitae ornare. Duis eget imperdiet elit. Nulla ornare sagittis est ac porttitor. In mi est, consequat posuere ante non, elementum fringilla ipsum. Aliquam faucibus mollis sagittis. Nunc pulvinar, nulla quis fringilla accumsan, enim orci vehicula metus, a egestas sapien odio ac diam. Sed posuere fringilla erat. Quisque eu tortor non ipsum bibendum volutpat. Phasellus ornare lacus sed aliquet volutpat. Morbi euismod ultricies mauris, vel sodales purus aliquet at."
    },
     {
         name: "Jersey Hill", 
         image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg",
         description: "Ut cursus vestibulum elit vitae ornare. Duis eget imperdiet elit. Nulla ornare sagittis est ac porttitor. In mi est, consequat posuere ante non, elementum fringilla ipsum. Aliquam faucibus mollis sagittis. Nunc pulvinar, nulla quis fringilla accumsan, enim orci vehicula metus, a egestas sapien odio ac diam. Sed posuere fringilla erat. Quisque eu tortor non ipsum bibendum volutpat. Phasellus ornare lacus sed aliquet volutpat. Morbi euismod ultricies mauris, vel sodales purus aliquet at."
    }
    
 ]
    
function seedDB(){ 
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } 
        console.log("removed campgrounds");
            // add campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place was ok, needed more bathrooms",
                            author: "Joanne"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    
    // add comments
}       

module.exports = seedDB;