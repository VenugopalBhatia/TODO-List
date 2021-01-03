const express = require('express');
const port = 8000;
const app = express();


app.get('/',require('./routes'));



app.listen(port,function(err){
    if(err){
        console.log("error starting server");
        return;
    }

    console.log(`Server running on port: ${port}`);
})