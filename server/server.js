require('./config/config'); // ejecuta el archivo

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-encoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
app.get('/', (req, res) => {
    res.json(`Hello World ${ date } ${ time }`);
});

app.get('/usuario', function(req, res) {
    res.json('GetUsuario')
});

app.post('/usuario', function(req, res) {
    let body = req.body; // se obtiene el body de la petición

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id
    })
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${ process.env.PORT }`);
});