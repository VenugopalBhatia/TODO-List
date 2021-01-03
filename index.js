const express = require('express');
const port = 8000;
const db = require('./config/mongoose');
const TaskList = require('./models/Chore');
const app = express();



app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('assets'));
app.use(express.urlencoded());
app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){
        console.log("error starting server");
        return;
    }

    console.log(`Server running on port: ${port}`);
})