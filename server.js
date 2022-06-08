
const express = require ("express");

// if HTML form is used
const bodyParser = require ("body-parser");

const app = express();

// Needed to host static files
app.use (express.static("public"));

//if HTML form parsing is needed - extended allows to post nested objects.
app.use (bodyParser,urlencoded({extended:true}))


// __dirname        speecifies the current directory no matter where (inc cloud)
app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html")
});



app.listen(3000, ()=>{
  console.log("server started on port 3000");
});
