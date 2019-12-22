const express = require('express');
const router  = express.Router();
const User    = require('../models/User');




router.post('/user', (req, res, next)=>{
  console.log(req)
    User.create({username: username, password: hash})
    .then((result)=>{
        res.json({message: 'success', user: result})
    })
    .catch((err)=>{
        next(err)
    })
})




router.get('/get-user-info', (req, res, next)=>{
  if(req.session.currentUser){
    res.json(req.session.currentUser);
  } else {
    res.json(null)
  }
})



module.exports = router;