const express = require('express');
const router = express.Router()
const connection = require('./db');


router.post('/users', function(req, res, next) {
    var query = connection.query('INSERT INTO users (email, name, lastname, password) VALUES (?, ?, ?, ?)', [req.body.email, req.body.name, req.body.lastname, req.body.password], function(error, result){
        if(error) {res.status(500).send('Error')}
        else {res.status(200).send}
        ;

    });
    res.end('SUcces!')
});


router.get("/", (req,res) => {
    res.send("youhou");
});

module.exports = router