const mongoose= require('mongoose'); //requiire libary

//connect to database
mongoose.connect('mongodb://localhost/todo_list_db');
//acriure the connection if its succesfull
const db = mongoose.connection;

//error
db.on("error", console.error.bind(console,"error connecting to db"));
//conncted
db.once('open',function(){
    console.log("succesfully connected to database")
})