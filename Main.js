const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const port = process.env.PORT || 3000 ;

app.use(bodyParser.urlencoded({extended: true }));

mongoose.connect("mongodb+srv://ludwinia:ludwinia@cluster0.ez9ae.mongodb.net/coupleDB", { useNewUrlParser: true}, )

// create a data schema
const coupleSchema = {
  couple1: String,
  couple2: String,
  sign1: String,
  sign2: String
}

const couple = mongoose.model("couple", coupleSchema);

app.get("/",  function (req, res) {
  res.sendFile(__dirname + "/Project.html")
})

app.post ("/", function(req, res){
  let newCouple = new couple({
    couple1: req.body.couple1,
    couple2: req.body.couple2,
    sign1: req.body.sign1,
    sign2: req.body.sign2
  })
  newCouple.save();
  res.write("app");
  
})

app.listen(port,()=>{  // do not add localhost here if you are deploying it
  console.log("server listening to port "+port);
});
