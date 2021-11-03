//express module
const express = require('express');
const conexionBD = require('./conectionbd');
//server
const app = express();
//import json
app.use(express.json());

//peticion inicio
app.get('/',(req,res) =>{
    const connection = conexionBD();
    connection.connect(function(error){
        if(error){
            throw error;
        }else{
            console.log('Conexion correcta.');
        }
    })
    connection.end();

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

/* EJEMPLO DE CONSULTA A BASE DE DATOS
var query = connection.query('INSERT INTO personaje(nombre, apellido, biografia) VALUES(?, ?, ?)', ['Homero', 'Simpson', 'Esposo de Marge y padre de Bart, Lisa y Maggie.'], function(error, result){
   if(error){
      throw error;
   }else{
      console.log(result);
   }
}
*/