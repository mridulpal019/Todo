const express= require('express');
const app= express();
const port = 8000;

//setting up the ejs view engine

app.set("view engine","ejs");
app.set("views" ,"./views")

const bodyParser = require('body-parser');//parser used to decode the encrpyted form data send by browser to server
app.use(bodyParser.urlencoded({extended: false}));



app.use('/',require("./routes/index"))




app.use(express.static("assets"));//setting express to lock up assests for static files
app.listen(port,function(err){
    if (err){
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on port No. ${port}`)
})