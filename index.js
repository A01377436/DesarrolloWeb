//impbrtar las bibliotecas

const express = require('express');
const path = require('path');
const consolaRoutes=require('./routes/consola');
const palindromoRoutes=require('./routes/palindromo');
const idiomaFRoutes=require('./routes/idiomaf');

const app=express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));
app.use('/consola',consolaRoutes);
app.use('/palindromo',palindromoRoutes)
app.use('/idiomaf',idiomaFRoutes)


//definición de nuestra aplicación web
app.get('/bigote',(request,response)=>{
    console.log('Hola Mundo');
    response.send('<h1>Hola mundo<h1>')
});

app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,'views','index.html'));

}
);
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'pagina1.html'));
});

app.get('/prueba1',(req,res)=>{
    console.log(req.query)
    res.send("Datos enviados por query"+req.query.name)
});


app.get('/prueba2/:name/:age',(req,res)=>{
    console.log(req.params)
    res.send("Datos enviados por params"+req.params.name)
})

app.post('/prueba3',(req,res)=>
{
console.log(req.body);
res.send("Datos recibidos")

})

//lanzar la aplicación node index.js
app.listen(8080 ,()=>{
console.log("Servidor en línea")

});
