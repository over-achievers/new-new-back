const express = require('express');
const router  = express.Router();
const User    = require('../models/User');



// post user info
router.post('/user', (req, res, next)=>{
  console.log(req)

})




router.get('/getUser', (req, res, next)=>{


})



module.exports = router;