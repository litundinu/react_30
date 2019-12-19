const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const authRouter = require('./routes')

const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use('/', authRouter);




// app.post('/users', function(req, res, next) {
//     var query = connection.query('INSERT INTO users (email, name, lastname, password) VALUES (?, ?, ?, ?)', [req.body.email, req.body.name, req.body.lastname, req.body.password], function(error, result){
//         if(error) {res.status(500).send('Error')}
//         else {res.status(200).send}
//         ;

//     });
//     res.end('SUcces!')
// });


// app.get("/", (req,res) => {
//     res.send("youhou");
// });






app.use(function(req,res,next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

let server = app.listen( process.env.PORT || 5000, function(){
        console.log('Listening on port' + server.address().port);
})