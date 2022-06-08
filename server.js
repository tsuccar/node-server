
const express = require ("express");

const app = express();

// Needed to host static files
app.use (express.static("public"));


// __dirname        speecifies the current directory no matter where (inc cloud)
app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html")
});



app.listen(3000, ()=>{
  console.log("server started on port 3000");
});
