const express = require('express');
const router  = express.Router();
const User    = require('../models/user-model');



// post user info
router.post('/addUser', (req, res, next)=>{
  console.log("The body req is: ", req.body)
  User.create({
    username: req.body.username,
    score: req.body.score,
    completed: req.body.completed,
    avatar: req.body.avatar
  })
  .then((response)=>{
    res.json({response})
  })
  .catch((err)=>{
    next(err)
  })

})




router.get('/users', (req, res, next)=>{

  User.find()
  .then((allUsers)=>{
    res.json({allUsers: allUsers});
  })
  .catch((err)=>next(err))
})



module.exports = router;