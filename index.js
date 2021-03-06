const express= require('express');
const app= express();
const port = 8000;

//setting up the ejs view engine

app.set("view engine","ejs");
app.set("views" ,"./views")
//parser used to decode the encrpyted form data send by browser to server
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


//routes all request to routes/index file
app.use('/',require("./routes/index"))



//setting express to lock up assests for static files
app.use(express.static("assets"));

app.listen(port,function(err){
    if (err){
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on port No. ${port}`)
})