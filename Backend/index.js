//express module
const express = require('express');

//server
const app = express();
//import json
app.use(express.json());

//peticion inicio
app.get('/',(req,res) =>{
    res.json({ answer : 'Hello World'
    });
});

//post
app.post('/user',(req,res) =>{
    console.log(req.body);
    res.json({ answer : 'Recived'
    });
});

//running server
app.listen(3000,()=>{
    console.log('Server on port 3000');
});
