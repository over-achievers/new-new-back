const express = require('express');
const router  = express.Router();
const User    = require('../models/user-model');



// post user info
router.post('/user', (req, res, next)=>{
  console.log("The body req is: ", req.body)
  User.create({
    username: req.body.username,
  })
  .then((response)=>{
    res.json({response})
  })
  .catch((err)=>{
    next(err)
  })

})




router.get('/getUser', (req, res, next)=>{


})



module.exports = router;