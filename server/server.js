require('./config/config'); // ejecuta el archivo

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-encoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json('Hello World')
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

app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
});