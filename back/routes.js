const express = require('express');
const router = express.Router()
const connection = require('./db');
const flash = require('flash')


router.post('/signup', function(req, res, next) {
    console.log('from router POST', router.post)
    var query = connection.query('INSERT INTO users (email, name, lastname, password) VALUES (?, ?, ?, ?)', [req.body.email, req.body.name, req.body.lastname, req.body.password], function(error, result){
        if (error)
            res.status(500).json({ flash:  error.message });
        else
            res.status(200).json({ flash:  "User has been signed up!" });
    });
    // res.end('SUcces!')
});



router.get("/", (req,res) => {
    res.send("youhou");
});

module.exports = router