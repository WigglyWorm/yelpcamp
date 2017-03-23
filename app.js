var express = require("express");
var app = express();
var bodyParser =require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
        {name: "Loch Tyne", image: "https://farm4.staticflickr.com/3832/9603531635_e348167e39.jpg"},
         {name: "Rocky Mountain", image: "https://farm7.staticflickr.com/6105/6381606819_df560e1a51.jpg"},
        {name: "Riverside Creek", image: "https://farm4.staticflickr.com/3441/3800913815_d057e41157.jpg"},
        {name: "Mount Earl", image: "https://farm5.staticflickr.com/4100/4798314980_bc31231984.jpg"},
        {name: "Sandy Beach", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
        {name: "Mackerel Woods", image: "https://farm8.staticflickr.com/7249/7541485870_6c88436ee9.jpg"},
        {name: "Midnight Trail", image: "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg"},
        {name: "Camp Bear", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"}
       
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name= req.body.name;
    var image= req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Connected");
});