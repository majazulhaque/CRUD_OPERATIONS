const express = require('express');
const dotenv = require('dotenv');


//Config
dotenv.config({path:"config/config.env"});


const app = express();

app.use(express.json());




app.use(express.urlencoded({extended:false}));

// Route imports
const item = require("./Routes/itemRoute");


const db = require('./config/database');

app.use('/api',item);





// Run the server
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port: ${process.env.PORT}`);
});