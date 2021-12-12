
// --- -initialize --------
const express = require('express');
const app = express();
const port = 2001;
const path = require('path');
const mongoose = require('mongoose');
const routerRegister = require('./Routers/RoutersRegister');

mongoose.connect('mongodb://localhost/people');

const db = mongoose.connection;

db.on("error" , () => {console.log("HOUVER UM ERRO")});
db.once("open" , () => {console.log("BANCO CARREGADO ...");});

app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname,'Templates-View'));


app.use("/",routerRegister);

app.listen(port ,() =>{
    console.log("SERVER RUNNING THE PORT ", port);
});