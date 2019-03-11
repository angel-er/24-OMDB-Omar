var express = require('express');
var router = express.Router();
var { Users } = require('../models/Users')

router.get('/', ((req, res) => {
   
    Users.findAll()
    .then(users => {
       res.send(req.params.users)
    })

}))


module.exports = router;