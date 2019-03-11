const express = require('express');
// var bodyParser = require('body-parser');
// const axios = require('axios')
var path = require('path');
var morgan = require('morgan')
var bodyParser = require('body-parser')

var db = require('./models/Users').db;
const router = express.Router()
const usersRoute = require('./routes/usersRoute')



//Instancia
const app = express();

//Midleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/users', usersRoute);
// app.use(function (req, res, next) {
    
//     if (path.extname(req.path).length > 0) {
//         res.status(404).end();
//     } else {
//         next(null);
//     }

// });

// app.get('/?titulo=:titulo', function (req, res) {

//     axios.get('https://www.omdbapi.com/?apikey=20dac387&s=' + req.body.titulo)
//     .then(search =>
//         res.send(search.data))
//     })
    
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/:movie', function(req,res){
    res.send(req.params.movie)
})

    
// app.get('/batman', function (req, res) {
//   axios.get('https://www.omdbapi.com/?apikey=20dac387&s=batman')
//      .then(search =>
//          res.send(search.data))
// })
        
//Escuchar        
var port = 3000
app.listen(port, () => (db.sync({
    force: true
  })));
//   app.on('error', onError);

// app.listen(port, function () {
//     console.log('Listening on', port)
// })
        
        