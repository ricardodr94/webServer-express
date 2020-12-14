const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

//express hbs

hbs.registerPartials( __dirname + '/views/parciales');


app.set('view engine', 'hbs');

//Ruta Raiz
app.get('/', (req, res) =>{
    res.render('home', {
        name: "world",
        anio: new Date().getFullYear()
    });
});

//ruta del about
app.get('/about', (req, res) =>{
    res.render('about', {
        anio: new Date().getFullYear()
    });
});



app.listen(port, () =>{
    console.log("escuchando peticiones en el puerto" + port);
});
